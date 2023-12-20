import React, { ReactElement, ReactNode } from "react";

interface IconComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  iconName: string;
}

export default function IconComponent({
  iconName,
  className,
  ...props
}: IconComponentProps): ReactElement {
  return (
    <i
      aria-label={`icon: ${iconName}`}
      className={`material-symbols-outlined ${className}`}
      {...props}
    >
      {iconName}
    </i>
  );
}
