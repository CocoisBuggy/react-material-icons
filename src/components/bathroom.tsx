import React from "react";
import IconComponent from "../IconComponent";

/**
 * icon name: bathroom
 *
 * categroies: search
 *
 * tags: bath, bathroom, closet, home, house, place, plumbing, room, shower, sprinkler, wash, water, wc
 *
 * popularity: 3456
 */
const Bathroom = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <IconComponent iconName="bathroom" {...props} />
);

export default Bathroom;
