import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import jwt_decode, { JwtPayload } from "jwt-decode";

import { api } from "../../services";
import { IProviderProps } from "../ListContext";
import { useEffect } from "react";

interface IUserContext {
  isModalLoginOpen: boolean;
  setIsModalLoginOpen: Dispatch<SetStateAction<boolean>>;
  isModalRegisterOpen: boolean;
  setIsModalRegisterOpen: Dispatch<SetStateAction<boolean>>;
  signIn: (data: ISignIn) => void;
  registerUser: (data: IRegister) => void;
  logout: () => void;
  user: IResponseRegister | undefined;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
}

interface IResponseRegister {
  id: string;
  name: string;
  email: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

interface IResponseSignIn {
  data: { token: string };
}

interface IResponseUser {
  data: IResponseRegister[];
}

const UserContext = createContext({} as IUserContext);

export const UserContextProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState<IResponseRegister>();
  const [isModalLoginOpen, setIsModalLoginOpen] = useState<boolean>(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] =
    useState<boolean>(false);
  const [tokenIsAdd, setTokenIsAdd] = useState(false);

  const signIn = async (datas: ISignIn) => {
    try {
      const { data }: IResponseSignIn = await api.post("/login", datas);
      localStorage.setItem("@todo-list:token", data.token);
      setIsModalLoginOpen(false);
    } catch (error) {
      console.log(error);
    }
    setTokenIsAdd(true);
  };

  const registerUser = (data: IRegister) => {
    api.post("/users", data).then(() => {
      setIsModalRegisterOpen(false);
      setIsModalLoginOpen(true);
    });
  };

  const logout = () => {
    setUser(undefined);
    localStorage.removeItem("@me-au:token");
  };

  const getUser = async () => {
    const token = localStorage.getItem("@todo-list:token");

    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      try {
        const { data }: IResponseUser = await api.get("/users");
        const userId = jwt_decode<JwtPayload>(token).sub;

        const userFound = data.find((e) => e.id === userId);
        setUser(userFound);
      } catch (error) {
        console.log(error);
      }
    }
    setTokenIsAdd(false);
  };

  useEffect(() => {
    getUser();
  }, [tokenIsAdd]);

  return (
    <UserContext.Provider
      value={{
        isModalLoginOpen,
        setIsModalLoginOpen,
        isModalRegisterOpen,
        setIsModalRegisterOpen,
        signIn,
        registerUser,
        logout,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
