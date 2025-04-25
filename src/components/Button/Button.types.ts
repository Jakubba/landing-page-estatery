import { ReactNode } from 'react';
export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  to?: string;
}
