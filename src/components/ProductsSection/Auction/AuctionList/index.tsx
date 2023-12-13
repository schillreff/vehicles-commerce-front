import { EmptyList } from '../../EmptyList';
import { AuctionCard } from '../AuctionCard';
import { IAuctionListProps } from './interfaces';
import { StyledAuctionList } from './styles';

export const AuctionList = ({ auctions, viewButtons }: IAuctionListProps) => {
  return (
    <StyledAuctionList>
      {auctions.length == 0 ? (
        <EmptyList>No momento não têm leilões cadastrados</EmptyList>
      ) : (
        auctions.map((auction) => (
          <AuctionCard
            key={auction.id}
            auction={auction}
            viewButtons={viewButtons}
          />
        ))
      )}
    </StyledAuctionList>
  );
};
