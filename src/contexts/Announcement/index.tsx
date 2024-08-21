import { createContext, useMemo, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { IModals } from '../../components/Modal/interfaces';
import { api } from '../../services/api';
import {
  IAnnouncement,
  IAnnouncementContext,
  IAnnouncementProviderProps
} from './interfaces';

export const AnnouncementContext = createContext({} as IAnnouncementContext);

export const AnnouncementProvider = ({
  children,
}: IAnnouncementProviderProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);
  const [announcementsSeller, setAnnouncementsSeller] = useState<
    IAnnouncement[]
  >([]);

  const [modalAnnouncement, setModalAnnouncement] = useState<IModals>({
    createAnnouncement: false,
    updateAnnouncement: false,
    deleteAnnouncement: false,
  });

  async function listAnnouncements() {
    try {
      const { data } = await api.get('/announcements');
      setAnnouncements(data);
      setLoading(false);
    } catch {
      toast.error('Erro ao listar anúncios');
    }
  }

  const listAnnouncementsSeller = async (id: string) => {
    try {
      const { data } = await api.get(`/announcements/seller/${id}`);
      setAnnouncementsSeller(data);
    } catch {
      toast.error('Erro ao listar anúncios');
    }
  };

  const createAnnouncement = (data: FieldValues) => {
    console.log(data);
  };

  const values = useMemo(
    () => ({
      announcements,
      setAnnouncements,
      announcementsSeller,
      setAnnouncementsSeller,
      modalAnnouncement,
      setModalAnnouncement,
      loading,
      setLoading,
      listAnnouncements,
      listAnnouncementsSeller,
      createAnnouncement,
    }),
    [announcements, announcementsSeller, modalAnnouncement, loading],
  );

  return (
    <AnnouncementContext.Provider value={values}>
      {children}
    </AnnouncementContext.Provider>
  );
};
