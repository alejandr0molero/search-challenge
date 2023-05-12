import type { FC, ReactNode } from "react";

import "./Wrapper.scss";

interface WrapperProps {
  children: ReactNode | ReactNode[];
}

export const Wrapper: FC<WrapperProps> = ({ children }) => (
  <div className="containter">{children}</div>
);
