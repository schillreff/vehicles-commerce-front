import { useContext } from 'react';
import { AnnouncementContext } from '../../../contexts/Announcement';
import { UserContext } from '../../../contexts/User';
import { CreateAnnouncementForm } from '../CreateAnnouncement';
import { DeleteUserForm } from '../DeleteUser';
import { EditAddressForm } from '../EditAddress';
import { EditUserForm } from '../EditUser';
import { UpdateAnnouncementForm } from '../UpdateAnnoucement';

export const CallModal = () => {
  const { user, modalUser } = useContext(UserContext);
  const { modalAnnouncement } = useContext(AnnouncementContext);

  return (
    <>
      {user?.Address && modalUser.editAddress && (
        <EditAddressForm address={user.Address} />
      )}
      {user && modalUser.editUser && <EditUserForm user={user} />}
      {modalUser.deleteUser && <DeleteUserForm />}
      {modalAnnouncement.createAnnouncement && <CreateAnnouncementForm />}
      {modalAnnouncement.updateAnnouncement && <UpdateAnnouncementForm />}
    </>
  );
};
