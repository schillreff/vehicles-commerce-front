import { IAnnouncement } from '../../../../contexts/Announcement/interfaces';

export interface IProductListProps {
  products: IAnnouncement[];
  viewButtons?: boolean;
  isActive?: boolean;
}
