import React from "react";
import IconComponent from "../IconComponent";

/**
 * icon name: book
 *
 * categroies: action
 *
 * tags: book, bookmark, favorite, label, library, read, reading, remember, ribbon, save, tag
 *
 * popularity: 29187
 */
const Book = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <IconComponent iconName="book" {...props} />
);

export default Book;
