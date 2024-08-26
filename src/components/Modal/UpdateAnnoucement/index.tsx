import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from '..';
import { AnnouncementContext } from '../../../contexts/Announcement';
import { StyledText } from '../../../styles/Typography/typography';
import { schema } from '../../../validators/createAnnouncement';
import { currencyMask, yearMask } from '../../../validators/masks';
import { Button } from '../../Button';
import { StyledForm, StyledOption, StyledSelect } from '../../Form';
import { InputLabel } from '../../Form/InputLabel';
import { TextareaLabel } from '../../Form/TextareaLabel';
import { StyledUpdateAnnouncement } from './style';

export const UpdateAnnouncementForm = () => {
  const [imagesFields, setImagesFields] = useState([1]);
  const { createAnnouncement, modalAnnouncement, setModalAnnouncement } =
    useContext(AnnouncementContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const [values, setValues] = useState({
    year: '',
    price: '0',
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

  const [selectedTypeSale, setSelectedTypeSale] = useState<string>('sale');
  const [selectedTypeVehicle, setSelectedTypeVehicle] = useState<string>('car');

  return (
    <Modal
      title='Criar Anúncio'
      closeModal={setModalAnnouncement}
      modal={{ ...modalAnnouncement, createAnnouncement: false }}
    >
      <StyledUpdateAnnouncement>
        <StyledForm
          className='update-announcement-form'
          onSubmit={handleSubmit(createAnnouncement)}
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

          <InputLabel
            label='Imagem da capa *'
            id='coverImage'
            placeholder='Inserir URL da imagem'
            type='text'
            {...register('coverImage')}
            error={errors.coverImage?.message}
          />

          {imagesFields.map((number) => (
            <InputLabel
              label={`${number}ª imagem da galeria${number === 1 ? ' *' : ''}`}
              id={`image${number}`}
              placeholder='Inserir URL da imagem'
              type='text'
              {...register(`image${number}`)}
              error={errors.image1?.message}
              key={number}
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
              onClick={() =>
                setModalAnnouncement({
                  ...modalAnnouncement,
                  createAnnouncement: false,
                })
              }
            >
              Cancelar
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
              Criar
            </Button>
          </div>
        </StyledForm>
      </StyledUpdateAnnouncement>
    </Modal>
  );
};
