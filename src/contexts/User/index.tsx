import {
  ChangeEvent,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { api } from '../../services/api';
import {
  IAddress,
  IEditUser,
  ImodalsUser,
  IRecoverPassword,
  ISendEmailRecover,
  ISignIn,
  ISignInResponse,
  ISignUp,
  IUserContext,
  IUserProviderProps,
  IUserResponse,
} from './interfaces';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUserResponse | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('@usermotorsshop:token'),
  );
  const [modalUser, setModalUser] = useState<ImodalsUser>({
    recoverPassword: false,
    editUser: false,
    editAddress: false,
    deleteUser: false,
  });
  const [userInputValues, setUserInputValues] = useState({
    cpf: '',
    phone: '',
    cep: '',
  });
  const [searchParams, setSearchParams] = useSearchParams();

  async function loadUser() {
    if (token) {
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;

        await api.get('/users').then((response) => {
          setUser(response.data);
          setUserInputValues({
            cpf: response.data.cpf,
            phone: response.data.phone,
            cep: response.data.Address.cep,
          });
        });
      } catch (error) {
        localStorage.removeItem('@usermotorsshop:token');
        setToken(null);
      }
    }
  }

  useEffect(() => {
    loadUser();
  }, [token]);

  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'address.cep') {
      setUserInputValues({ ...userInputValues, cep: value });
    } else {
      setUserInputValues({
        ...userInputValues,
        [name]: value,
      });
    }
  };

  const navigate = useNavigate();
  const navigateTo = (route: string) => {
    navigate(route);
  };

  const signIn = async (data: ISignIn) => {
    const signInResponse = api.post<ISignInResponse>('/login', data);

    toast.promise(signInResponse, {
      loading: 'Entrando...',
      success: (response) => {
        const { token } = response.data;

        localStorage.setItem('@usermotorsshop:token', token);
        setToken(token);
        navigateTo('/');

        return 'Seja bem-vindo(a)';
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const signUp = (data: ISignUp) => {
    const promisseSignUp = api
      .post('/users', data)
      .then((response) => response);

    toast.promise(promisseSignUp, {
      loading: 'Registrando...',
      success: () => {
        navigateTo('/login');
        return 'Registrado com sucesso, realize o login.';
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const sendEmailRecover = (data: ISendEmailRecover) => {
    const promisseSendEmail = api
      .post('/users/recover-password', data)
      .then((response) => response);

    toast.promise(promisseSendEmail, {
      loading: 'Enviando...',
      success: () => {
        setModalUser({ ...modalUser, recoverPassword: false });
        return 'Verifique o seu email.';
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const recoverPassword = (data: IRecoverPassword, token: string | null) => {
    const promisseRecoverPassword = api
      .patch(`/users/recover-password/${token}`, data)
      .then((response) => response);

    toast.promise(promisseRecoverPassword, {
      loading: 'Alterando...',
      success: () => {
        setSearchParams({});
        navigateTo('/login');
        return 'Senha alterada com sucesso!';
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const editAddress = (data: IAddress) => {
    const promisseEditAdress = api
      .patch('/address', data)
      .then((response) => response);

    toast.promise(promisseEditAdress, {
      loading: 'Salvando...',
      success: () => {
        loadUser();
        setModalUser({ ...modalUser, editAddress: false });
        return 'Endereço atualizado com sucesso.';
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const editUser = (data: IEditUser) => {
    const promiseEditUser = api.patch('/users', data);

    toast.promise(promiseEditUser, {
      loading: 'Salvando...',
      success: () => {
        setModalUser({ ...modalUser, editUser: false });
        loadUser();
        return 'Usuário atualizado com sucesso!';
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const deleteUser = () => {
    const promiseDeleteUser = api.delete('/users');

    toast.promise(promiseDeleteUser, {
      loading: 'Deletando...',
      success: () => {
        setModalUser({ ...modalUser, deleteUser: false });
        setToken(null);
        setUser(null);
        navigateTo('/');
        return 'Usuário deletado com sucesso!';
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const values = useMemo(
    () => ({
      user,
      setUser,
      token,
      setToken,
      modalUser,
      setModalUser,
      userInputValues,
      setUserInputValues,
      searchParams,
      setSearchParams,
      inputChange,
      navigateTo,
      signIn,
      signUp,
      sendEmailRecover,
      recoverPassword,
      editAddress,
      editUser,
      deleteUser,
    }),
    [user, token, modalUser, userInputValues, searchParams],
  );

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
