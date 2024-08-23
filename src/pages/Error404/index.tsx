import { StyledTitle } from '../../styles/Typography/typography';
import { StyledError404 } from './style';

export const Error404 = () => {
  return (
    <StyledError404>
      <div className='titleError'>
        <StyledTitle
          className=''
          tag='h1'
          style='heading-1'
          weight='700'
          color='--color-grey0'
        >
          Page Not Found
        </StyledTitle>
      </div>
    </StyledError404>
  );
};
