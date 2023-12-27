import React from "react";
import IconComponent from "../IconComponent";

/**
 * icon name: my_location
 *
 * categroies: maps
 *
 * tags: destination, direction, location, maps, navigation, pin, place, point, stop
 *
 * popularity: 30307
 */
const MyLocation = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <IconComponent iconName="my_location" {...props} />
);

export default MyLocation;
