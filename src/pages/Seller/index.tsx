import { useContext, useEffect } from 'react';
import { ContainerPage } from '../../components/ContainerPage';
import { Loading } from '../../components/Loading';
import { ProductsSection } from '../../components/ProductsSection';
import { AuctionList } from '../../components/ProductsSection/Auction/AuctionList';
import { ProductList } from '../../components/ProductsSection/Product/ProductList';
import { UserProfile } from '../../components/UserProfile';
import { AnnouncementContext } from '../../contexts/Announcement';
import { IAnnouncement } from '../../contexts/Announcement/interfaces';
import { UserContext } from '../../contexts/User';
import { StyledSeller } from './styles';

export const Seller = () => {
  const { searchParams, user } = useContext(UserContext);
  const { listAnnouncementsSeller, announcementsSeller, modalAnnouncement } =
    useContext(AnnouncementContext);

  const sellerID = searchParams.get('user');
  useEffect(() => {
    if (sellerID) {
      listAnnouncementsSeller(sellerID);
    }
  }, [
    sellerID,
    modalAnnouncement.createAnnouncement,
    modalAnnouncement.deleteAnnouncement,
    modalAnnouncement.updateAnnouncement,
  ]);

  return (
    <>
      {user ? (
        <>
          <UserProfile
            name={user.fullName}
            description={user.description}
            viewButton={user.isSeller}
          />
          <StyledSeller>
            <ContainerPage className='container-page'>
              <>
                <ProductsSection id='auction' listName='Leilão'>
                  <AuctionList
                    auctions={announcementsSeller.filter(
                      (auction: IAnnouncement) =>
                        auction.typeSale === 'auction',
                    )}
                    viewButtons={sellerID === user?.id}
                  />
                </ProductsSection>
                <ProductsSection id='car' listName='Carros'>
                  <ProductList
                    products={announcementsSeller.filter(
                      (car: IAnnouncement) =>
                        car.typeVehicle === 'car' && car.typeSale === 'sale',
                    )}
                    viewButtons={sellerID === user?.id}
                    isActive={true}
                  />
                </ProductsSection>
                <ProductsSection id='motorcycle' listName='Motos'>
                  <ProductList
                    products={announcementsSeller.filter(
                      (motorcycle: IAnnouncement) =>
                        motorcycle.typeVehicle === 'motorcycle' &&
                        motorcycle.typeSale === 'sale',
                    )}
                    viewButtons={sellerID === user?.id}
                    isActive={true}
                  />
                </ProductsSection>
              </>
            </ContainerPage>
          </StyledSeller>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
