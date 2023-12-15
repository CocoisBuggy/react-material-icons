import React, { ReactNode } from "react";

interface IconComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  iconName: string;
}

export default function IconComponent({
  iconName,
  className,
  ...props
}: IconComponentProps): ReactNode {
  return (
    <i
      aria-label={`icon: ${iconName}`}
      className={`material-icons-outlined ${className}`}
      {...props}
    >
      {iconName}
    </i>
  );
}
