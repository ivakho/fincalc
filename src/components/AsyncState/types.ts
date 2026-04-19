import type { ReactNode } from "react";

export interface AsyncStateProps {
  loading: boolean;
  error: boolean;
  children: ReactNode;
}
