import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from '..';
import { AnnouncementContext } from '../../../contexts/Announcement';
import { IImage } from '../../../contexts/Announcement/interfaces';
import { StyledText } from '../../../styles/Typography/typography';
import { currencyMask, yearMask } from '../../../validators/masks';
import { schema } from '../../../validators/updateAnnouncement';
import { Button } from '../../Button';
import { StyledForm, StyledOption, StyledSelect } from '../../Form';
import { InputLabel } from '../../Form/InputLabel';
import { TextareaLabel } from '../../Form/TextareaLabel';
import { StyledUpdateAnnouncement } from './style';

export const UpdateAnnouncementForm = () => {
  const {
    announcement,
    updateAnnouncement,
    modalAnnouncement,
    setModalAnnouncement,
    callFunctionToDeleteAnnouncement,
  } = useContext(AnnouncementContext);

  const [imagesFields, setImagesFields] = useState<Array<number | IImage>>(
    announcement ? announcement.images : [1],
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const [values, setValues] = useState({
    year: announcement ? String(announcement?.year) : '',
    price: announcement ? announcement?.price : '0',
  });

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const addImageField = () => {
    imagesFields.push(imagesFields.length + 1);
    setImagesFields([...imagesFields]);
  };

  const [selectedTypeSale, setSelectedTypeSale] = useState<string>(
    announcement ? announcement.typeSale : 'sale',
  );
  const [selectedTypeVehicle, setSelectedTypeVehicle] = useState<string>(
    announcement ? announcement.typeVehicle : 'car',
  );

  const [selectedIsActive, setSelectedIsActive] = useState<string>(
    announcement ? String(announcement.isActive) : 'false',
  );

  return (
    <Modal
      title='Criar Anúncio'
      closeModal={setModalAnnouncement}
      modal={{ ...modalAnnouncement, updateAnnouncement: false }}
    >
      <StyledUpdateAnnouncement>
        <StyledForm
          className='update-announcement-form'
          onSubmit={handleSubmit((data) =>
            updateAnnouncement(data, announcement ? announcement.id : 'id'),
          )}
        >
          <StyledText tag='p' style='body-2' weight='500' color='--color-gray0'>
            Tipo de anúncio
          </StyledText>

          <StyledSelect
            id='typeSale'
            multiple
            {...register('typeSale')}
            value={[selectedTypeSale]}
            onChange={(event) => setSelectedTypeSale(event.target.value)}
          >
            <StyledOption value='sale'>Venda</StyledOption>
            <StyledOption value='auction'>Leilão</StyledOption>
          </StyledSelect>

          <StyledText tag='p' style='body-2' weight='500' color='--color-grey0'>
            Informações do veículo
          </StyledText>

          <InputLabel
            label='Título *'
            id='title'
            placeholder='Digitar título'
            type='text'
            defaultValue={announcement?.title}
            {...register('title')}
            error={errors.title?.message}
          />

          <div className='update-annoucement-form__small-inputs'>
            <InputLabel
              label='Ano *'
              id='year'
              placeholder='Digitar ano'
              type='text'
              {...register('year')}
              value={yearMask(values.year)}
              onChange={inputChange}
              error={errors.year?.message}
            />

            <InputLabel
              label='Quilometragem *'
              id='mileage'
              placeholder='0'
              type='number'
              defaultValue={announcement?.mileage}
              {...register('mileage')}
              error={errors.mileage?.message}
            />

            <InputLabel
              label='Preço *'
              id='price'
              placeholder='Digitar preço'
              type='text'
              {...register('price')}
              value={currencyMask(values.price)}
              onChange={inputChange}
              error={errors.price?.message}
            />
          </div>

          <TextareaLabel
            label='Descrição *'
            id='description'
            placeholder='Digitar descrição'
            defaultValue={announcement?.description}
            {...register('description')}
            error={errors.description?.message}
          />

          <StyledText tag='p' style='body-2' weight='500' color='--color-gray0'>
            Tipo de veículo
          </StyledText>

          <StyledSelect
            id='typeVehicle'
            multiple
            {...register('typeVehicle')}
            value={[selectedTypeVehicle]}
            onChange={(event) => setSelectedTypeVehicle(event.target.value)}
          >
            <StyledOption value='car'>Carro</StyledOption>
            <StyledOption value='motorcycle'>Moto</StyledOption>
          </StyledSelect>

          <StyledText tag='p' style='body-2' weight='500' color='--color-gray0'>
            Anúncio Publicado
          </StyledText>

          <StyledSelect
            id='isActive'
            multiple
            {...register('isActive')}
            value={[selectedIsActive]}
            onChange={(event) => setSelectedIsActive(event.target.value)}
          >
            <StyledOption value='true'>Sim</StyledOption>
            <StyledOption value='false'>Não</StyledOption>
          </StyledSelect>

          <InputLabel
            label='Imagem da capa *'
            id='coverImage'
            placeholder='Inserir URL da imagem'
            type='text'
            defaultValue={announcement?.coverImage}
            {...register('coverImage')}
            error={errors.coverImage?.message}
          />

          {imagesFields.map((image, index) => (
            <InputLabel
              label={`${index + 1}ª imagem da galeria`}
              id={`image${index + 1}`}
              placeholder='Inserir URL da imagem'
              defaultValue={typeof image == 'object' ? image.url : undefined}
              type='text'
              {...register(`image${index + 1}`)}
              error={errors.image1?.message}
              key={index + 1}
            />
          ))}

          <Button
            type='button'
            $size='medium'
            $backgroundColor='--color-brand3'
            $color='--color-white'
            $borderColor='--color-brand3'
            $hoverBackgroundColor='--color-brand4'
            $hoverColor='--color-brand1'
            $hoverBorderColor='--color-brand4'
            onClick={addImageField}
          >
            Adicionar campo para imagem da galeria
          </Button>

          <div className='update-annoucement-form__buttons'>
            <Button
              type='button'
              $size='big'
              $color='--color-gray0'
              $backgroundColor='--color-gray10'
              $borderColor='--color-gray4'
              $hoverColor='--color-white'
              $hoverBackgroundColor='--color-gray1'
              $hoverBorderColor='--color-gray1'
              onClick={() => callFunctionToDeleteAnnouncement()}
            >
              Excluir anúncio
            </Button>

            <Button
              type='submit'
              $size='big'
              $backgroundColor='--color-brand1'
              $color='--color-white'
              $borderColor='--color-brand1'
              $hoverBackgroundColor='--color-brand4'
              $hoverColor='--color-brand1'
              $hoverBorderColor='--color-brand4'
            >
              Editar anúncio
            </Button>
          </div>
        </StyledForm>
      </StyledUpdateAnnouncement>
    </Modal>
  );
};
