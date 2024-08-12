import { IAnnouncement } from '../../../../contexts/Announcement/interfaces';

export interface IAuctionCardProps {
  auction: IAnnouncement;
  viewButtons?: boolean;
}
