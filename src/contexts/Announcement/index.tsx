import { createContext, useContext, useMemo, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { IModals } from '../../components/Modal/interfaces';
import { api } from '../../services/api';
import { UserContext } from '../User';
import {
  IAnnouncement,
  IAnnouncementContext,
  IAnnouncementProviderProps,
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
  const [announcement, setAnnouncement] = useState<IAnnouncement | null>(null);
  const [announcementIdToDelete, setAnnouncementIdToDelete] =
    useState<string>('');
  const [modalAnnouncement, setModalAnnouncement] = useState<IModals>({
    createAnnouncement: false,
    updateAnnouncement: false,
    deleteAnnouncement: false,
  });

  const { token } = useContext(UserContext);

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

  const createAnnouncement = async (data: FieldValues) => {
    const {
      coverImage,
      description,
      mileage,
      price,
      title,
      typeSale,
      typeVehicle,
      year,
      ...rest
    } = data;

    let images = Object.values(rest).map((value: string) => {
      return { url: value };
    });

    images = images.filter((image) => image.url != '');

    const dataToSend = {
      coverImage,
      description,
      mileage: parseInt(mileage),
      price,
      title,
      typeSale,
      typeVehicle,
      year: parseInt(year),
      images,
      isActive: true,
    };

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const promiseCreate = api.post(`/announcements/`, dataToSend);

    toast.promise(promiseCreate, {
      loading: 'Carregando...',
      success: () => {
        setModalAnnouncement({ createAnnouncement: false });
        return 'Anúncio criado com sucesso';
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const updateAnnouncement = async (data: FieldValues, id: string) => {
    const {
      coverImage,
      description,
      mileage,
      price,
      title,
      typeSale,
      typeVehicle,
      year,
      isActive,
      ...rest
    } = data;

    let images = Object.values(rest).map((value: string) => {
      return { url: value };
    });

    images = images.filter((image) => image.url != '');

    const dataToSend = {
      coverImage,
      description,
      mileage: parseInt(mileage),
      price,
      title,
      typeSale,
      typeVehicle,
      year: parseInt(year),
      images,
      isActive: isActive == 'true',
    };

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const promiseUpdate = api.patch(`/announcements/${id}`, dataToSend);

    toast.promise(promiseUpdate, {
      loading: 'Carregando...',
      success: () => {
        setModalAnnouncement({
          ...modalAnnouncement,
          updateAnnouncement: false,
        });

        return 'Anúncio atualizado com sucesso';
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const deleteAnnouncement = async (id: string) => {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const promiseDelete = api.delete(`/announcements/${id}`);

    toast.promise(promiseDelete, {
      loading: 'Excluindo...',
      success: () => {
        setModalAnnouncement({
          ...modalAnnouncement,
          deleteAnnouncement: false,
        });
        return 'Anúncio excluído com sucesso';
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const callFunctionToDeleteAnnouncement = (id: string) => {
    setAnnouncementIdToDelete(id);
    setModalAnnouncement({
      ...modalAnnouncement,
      updateAnnouncement: false,
      deleteAnnouncement: true,
    });
  };

  const values = useMemo(
    () => ({
      announcements,
      setAnnouncements,
      announcementsSeller,
      setAnnouncementsSeller,
      announcement,
      setAnnouncement,
      announcementIdToDelete,
      setAnnouncementIdToDelete,
      modalAnnouncement,
      setModalAnnouncement,
      loading,
      setLoading,
      listAnnouncements,
      listAnnouncementsSeller,
      createAnnouncement,
      updateAnnouncement,
      deleteAnnouncement,
      callFunctionToDeleteAnnouncement,
    }),
    [
      announcements,
      announcementsSeller,
      announcement,
      announcementIdToDelete,
      modalAnnouncement,
      loading,
    ],
  );

  return (
    <AnnouncementContext.Provider value={values}>
      {children}
    </AnnouncementContext.Provider>
  );
};
