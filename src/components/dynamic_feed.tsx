import React from "react";
import IconComponent from "../IconComponent";

/**
 * icon name: dynamic_feed
 *
 * categroies: content
 *
 * tags: 'mail_outline', 'markunread'. Keep 'mail' and remove others., Duplicate of 'email'
 *
 * popularity: 8873
 */
const DynamicFeed = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <IconComponent iconName="dynamic_feed" {...props} />
);

export default DynamicFeed;
