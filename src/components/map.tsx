import React from "react";
import IconComponent from "../IconComponent";

/**
 * icon name: map
 *
 * categroies: maps
 *
 * tags: destination, direction, location, map, maps, pin, place, route, stop, travel
 *
 * popularity: 55507
 */
const Map = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <IconComponent iconName="map" {...props} />
);

export default Map;
