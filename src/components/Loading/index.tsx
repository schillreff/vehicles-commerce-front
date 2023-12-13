import { StyledLoading } from './styles';

export const Loading = () => {
  return (
    <StyledLoading className='loading'>
      <div className='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledLoading>
  );
};
