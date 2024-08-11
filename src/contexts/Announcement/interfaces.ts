import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface IImage {
  id: string;
  url: string;
}

export interface IAnnouncement {
  id: string;
  title: string;
  typeSale: string;
  year: number;
  mileage: number;
  price: string;
  description: string;
  typeVehicle: string;
  coverImage: string;
  isActive: boolean;
  User: {
    id: string;
    fullName: string;
    description: string;
    phone: string;
  };
  images: IImage[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IComment {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  User: {
    id: string;
    fullName: string;
    phone: string;
  };
}

export interface IAnnouncementProviderProps {
  children: ReactNode;
}

export interface IModalsAnnouncement {
  createAnnouncement: boolean;
  updateAnnouncement: boolean;
  deleteAnnouncement: boolean;
}

export interface IAnnouncementContext {
  announcements: IAnnouncement[];
  setAnnouncements: Dispatch<SetStateAction<IAnnouncement[]>>;
  announcementsSeller: IAnnouncement[];
  setAnnouncementsSeller: Dispatch<SetStateAction<IAnnouncement[]>>;
  modalAnnouncement: IModalsAnnouncement;
  setModalAnnouncement: Dispatch<SetStateAction<IModalsAnnouncement>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  listAnnouncements: () => void;
  listAnnouncementsSeller: (id: string) => void;
  createAnnouncement: (data: IAnnouncement) => void;
}
