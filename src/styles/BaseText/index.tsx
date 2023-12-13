import { IBaseTextProps } from './interfaces';

export const BaseText = ({
  id,
  tag,
  className,
  children,
  onClick,
}: IBaseTextProps) => (
  <>
    {tag === 'p' && (
      <p id={id} className={className}>
        {children}
      </p>
    )}
    {tag === 'a' && (
      <a
        id={id}
        className={className}
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </a>
    )}
  </>
);
