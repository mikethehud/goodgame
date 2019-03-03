import React from "react";
import classNames from "classnames";

type BadgeVariant = 'primary' | 'notification' | 'error' | 'alert';

interface BadgeProps {
  text: string
  variant?: BadgeVariant
}

export default ({ text, variant }: BadgeProps) => {
  const classes = classNames("gg-badge", {
    [`gg-badge-${variant}`]: true
  });

  return (
    <span className={classes}>
      {text}
    </span>
  )
}