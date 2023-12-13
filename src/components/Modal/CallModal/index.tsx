import { useContext } from 'react';
import { UserContext } from '../../../contexts/User';
import { DeleteUserForm } from '../DeleteUser';
import { EditAddressForm } from '../EditAddress';
import { EditUserForm } from '../EditUser';

export const CallModal = () => {
  const { user, modalUser } = useContext(UserContext);

  return (
    <>
      {user?.Address && modalUser.editAddress && (
        <EditAddressForm address={user.Address} />
      )}
      {user && modalUser.editUser && <EditUserForm user={user} />}
      {modalUser.deleteUser && <DeleteUserForm />}
    </>
  );
};