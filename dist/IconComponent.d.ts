import React, { ReactNode } from "react";
interface IconComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    iconName: string;
}
export default function IconComponent({ iconName, className, ...props }: IconComponentProps): ReactNode;
export {};
//# sourceMappingURL=IconComponent.d.ts.map