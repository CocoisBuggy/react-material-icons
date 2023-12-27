import React from "react";
import IconComponent from "../IconComponent";

/**
 * icon name: album
 *
 * categroies: av
 *
 * tags: album, artist, audio, bvb, cd, computer, data, disk, file, music, record, sound, storage, track
 *
 * popularity: 7375
 */
const Album = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <IconComponent iconName="album" {...props} />
);

export default Album;
