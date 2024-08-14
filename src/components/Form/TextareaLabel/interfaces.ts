import { TextareaHTMLAttributes } from 'react';

export interface ITextareaLabelProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}
