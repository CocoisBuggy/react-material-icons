import fs from "fs";
var converter = require("number-to-words");
import prettier from "prettier";

type Icon = {
  name: string;
  version: number;
  popularity: number;
  codepoint: number;
  unsupported_families: string[];
  categories: string[];
  tags: string[];
  sizes_px: number[];
};

let indexHeader = `
import React from "react";
import IconComponent from "./IconComponent";
`;

function toCamelCase(str: string): string {
  const camel = str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function replaceNumbersWithWords(str: string): string {
  return str.replace(/\d+/g, (match) => {
    // Convert the matched number to words
    const words = converter.toWords(parseInt(match)) + "_";
    // Capitalize the first letter and replace spaces with underscores
    return words.charAt(0).toUpperCase() + words.slice(1).replace(/ /g, "_");
  });
}

function nameToComponentName(str: string): string {
  return toCamelCase(replaceNumbersWithWords(str));
}

function generateComponent(icon: Icon): string {
  const name = nameToComponentName(icon.name);
  return `const ${name} = (props: React.HTMLAttributes<HTMLDivElement>): React.ReactElement => <IconComponent iconName="${icon.name}" {...props} />;\n`;
}

async function main() {
  // get list of all google icons
  const response = await fetch("https://fonts.google.com/metadata/icons");
  const data = JSON.parse((await response.text()).replace(")]}'", ""));
  let icons: Icon[] = data.icons;
  let indexContent = indexHeader;

  icons.forEach((icon) => {
    indexContent += generateComponent(icon);
  });

  indexContent += `
  export {
    ${icons.map((icon) => nameToComponentName(icon.name)).join(",\n")}
  };
    `;

  await fs.promises.writeFile(
    "src/index.tsx",
    await prettier.format(indexContent, { parser: "typescript" }),
    "utf8"
  );
}

main().catch(console.error);
