import React from "react";
import IconComponent from "../IconComponent";

/**
 * icon name: movie
 *
 * categroies: av
 *
 * tags: cinema, film, media, movie, slate, video
 *
 * popularity: 24484
 */
const Movie = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <IconComponent iconName="movie" {...props} />
);

export default Movie;
