import { InputHTMLAttributes } from 'react';

export interface IInputLabelProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}
