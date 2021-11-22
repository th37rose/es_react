/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import * as React from 'react';

export const IconRestart = React.memo<JSX.IntrinsicElements['svg']>(
  function IconRestart({className}) {
    return (
      <svg
        className={className}
        width="0.78em"
        height="0.78em"
        viewBox="0 0 14 14"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.3567 11.9929C10.147 13.0412 8.59937 13.6172 6.9987 13.615C3.3167 13.615 0.332031 10.6303 0.332031 6.94828C0.332031 3.26628 3.3167 0.281616 6.9987 0.281616C10.6807 0.281616 13.6654 3.26628 13.6654 6.94828C13.6654 8.37228 13.2187 9.69228 12.4587 10.775L10.332 6.94828H12.332C12.3319 5.71909 11.9072 4.52766 11.1298 3.57554C10.3524 2.62343 9.26994 1.96908 8.06559 1.72319C6.86124 1.4773 5.60892 1.65496 4.52048 2.22613C3.43205 2.79729 2.57431 3.72689 2.09238 4.85767C1.61045 5.98845 1.5339 7.25099 1.87569 8.43171C2.21748 9.61243 2.95663 10.6388 3.96809 11.3373C4.97955 12.0358 6.20123 12.3635 7.42646 12.2649C8.6517 12.1663 9.80527 11.6475 10.692 10.7963L11.3567 11.9929Z"
          fill="currentColor"
        />
      </svg>
    );
  }
);

IconRestart.displayName = 'IconRestart';
