import colorRandomizer from '../../utils/colorRandomizer';
import { nameInitials } from '../../utils/nameInitials';
import { IUserImageProps } from './interfaces';
import { StyledUserImage } from './styles';

export const UserImage = ({ name, size, fontSize }: IUserImageProps) => {
  return (
    <StyledUserImage color={colorRandomizer(name)} size={size} fontSize={fontSize}>
      {nameInitials(name)}
    </StyledUserImage>
  );
};
