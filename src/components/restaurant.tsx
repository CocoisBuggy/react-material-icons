import React from "react";
import IconComponent from "../IconComponent";

/**
 * icon name: restaurant
 *
 * categroies: maps
 *
 * tags: breakfast, dining, dinner, eat, food, fork, knife, local, lunch, meal, places, restaurant, spoon, utensils
 *
 * popularity: 42648
 */
const Restaurant = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <IconComponent iconName="restaurant" {...props} />
);

export default Restaurant;
