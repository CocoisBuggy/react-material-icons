import React from "react";
import IconComponent from "../IconComponent";

/**
 * icon name: pets
 *
 * categroies: action
 *
 * tags: animal, cat, dog, hand, paw, pet
 *
 * popularity: 49993
 */
const Pets = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <IconComponent iconName="pets" {...props} />
);

export default Pets;
