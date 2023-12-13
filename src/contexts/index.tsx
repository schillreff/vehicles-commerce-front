import { AnnouncementProvider } from './Announcement';
import { IGlobalProvider } from './interfaces';
import { UserProvider } from './User';

export const GlobalProvider = ({ children }: IGlobalProvider) => {
  return (
    <UserProvider>
      <AnnouncementProvider>{children}</AnnouncementProvider>
    </UserProvider>
  );
};
