import { ReactNode } from 'react';

export interface IBaseTextProps {
  tag: string;
  className?: string;
  id?: string;
  children: ReactNode;
  onClick?: React.MouseEventHandler;
}
