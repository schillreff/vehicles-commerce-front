import { useContext, useEffect } from 'react';
import { ContainerPage } from '../../components/ContainerPage';
import { Loading } from '../../components/Loading';
import { ProductsSection } from '../../components/ProductsSection';
import { AuctionList } from '../../components/ProductsSection/Auction/AuctionList';
import { ProductList } from '../../components/ProductsSection/Product/ProductList';
import { Slogan } from '../../components/Slogan';
import { AnnouncementContext } from '../../contexts/Announcement';
import { IAnnouncement } from '../../contexts/Announcement/interfaces';
import { StyledHome } from './styles';

export const Home = () => {
  const { announcements, listAnnouncements, loading } =
    useContext(AnnouncementContext);

  useEffect(() => {
    listAnnouncements();
  }, []);

  return (
    <>
      <Slogan />
      <StyledHome>
        <ContainerPage className='container-page'>
          {loading ? (
            <Loading />
          ) : (
            <>
              <ProductsSection id='auction' listName='Leilão'>
                <AuctionList
                  auctions={announcements.filter(
                    (auction: IAnnouncement) => auction.typeSale === 'auction',
                  )}
                />
              </ProductsSection>
              <ProductsSection id='car' listName='Carros'>
                <ProductList
                  products={announcements.filter(
                    (car: IAnnouncement) =>
                      car.typeVehicle === 'car' && car.typeSale === 'sale',
                  )}
                />
              </ProductsSection>
              <ProductsSection id='motorcycle' listName='Motos'>
                <ProductList
                  products={announcements.filter(
                    (motorcycle: IAnnouncement) =>
                      motorcycle.typeVehicle === 'motorcycle' &&
                      motorcycle.typeSale === 'sale',
                  )}
                />
              </ProductsSection>
            </>
          )}
        </ContainerPage>
      </StyledHome>
    </>
  );
};
