import { IAnnouncement } from '../../../../contexts/Announcement/interfaces';

export interface IProductCardProps {
  product: IAnnouncement;
  viewButtons?: boolean;
  isActive?: boolean;
}
