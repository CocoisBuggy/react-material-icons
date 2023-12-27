import fs from "fs";
import prettier from "prettier";
import converter from "number-to-words";

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

/** If the first word in the sequence is a number, replace it with words. */
function replaceNumbersWithWords(str: string): string {
  if (parseInt(str.split("_")[0])) {
    const words = converter.toWords(parseInt(str.split("_")[0]));
    // replace spaces with underscores and return the string
    return words.replace(/ /g, "_") + str.split("_").slice(0).join("_");
  } else {
    return str;
  }
}

function nameToComponentName(str: string): string {
  // First replace numbers with words, then convert to camel case
  const withWords = replaceNumbersWithWords(str);
  return toCamelCase(withWords).replace(/_/g, "");
}

function generateComponent(icon: Icon): string {
  const name = nameToComponentName(icon.name);
  return `
  /**
   * icon name: ${icon.name}
   *
   * categroies: ${icon.categories.join(", ")}
   *
   * tags: ${icon.tags.join(", ")}
   *
   * popularity: ${icon.popularity}
  */
  const ${name} = (props: React.HTMLAttributes<HTMLDivElement>) => <IconComponent iconName="${
    icon.name
  }" {...props} />;\n`;
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
