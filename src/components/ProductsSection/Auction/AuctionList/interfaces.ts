import { IAnnouncement } from '../../../../contexts/Announcement/interfaces';

export interface IAuctionListProps {
  auctions: IAnnouncement[];
  viewButtons?: boolean;
}
