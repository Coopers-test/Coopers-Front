import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../Button/styles";
import { Container } from "./styles";
import { ISignIn, useUserContext } from "../../context/UserContext";

import SVG from "../../assets/Login_svg.svg";
import { schema } from "../../validators/login";

const ModalLogin = () => {
  const {
    isModalLoginOpen,
    setIsModalLoginOpen,
    setIsModalRegisterOpen,
    signIn,
  } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>({ resolver: yupResolver(schema) });

  const handleModal = () => {
    setIsModalLoginOpen(false);
    setIsModalRegisterOpen(true);
  };

  return (
    <>
      {isModalLoginOpen && (
        <Container>
          <div className="modal--container animate__animated animate__bounceIn">
            <div className="modal--close">
              <button onClick={() => setIsModalLoginOpen(false)}>close</button>
            </div>
            <div className="modal--title">
              <img src={SVG} alt="" />
              <div className="title--subtitle">
                <h3>Sign in</h3>
                <p>to acess your list</p>
              </div>
            </div>
            <form className="modal--content" onSubmit={handleSubmit(signIn)}>
              <label htmlFor="email">
                Email:
                <input type="email" {...register("email")} />
                <p>{errors.email?.message}</p>
              </label>
              <label htmlFor="password">
                Password:
                <input type="password" {...register("password")} />
                <p>{errors.password?.message}</p>
              </label>
              <Button
                backgroundColor="var(--light-green)"
                color="var(--white)"
                borderRadius="0px"
                colorHover="var(--dark-green)"
                fontSize="14px"
                fontWeight="600"
                height="40px"
                width="100%"
                // onClick={() => setIsModalLoginOpen(true)}
                type="submit"
              >
                Sign in
              </Button>
              <Button
                backgroundColor="var(--light-gray)"
                color="var(--white)"
                borderRadius="0px"
                colorHover="var(--dark-gray)"
                fontSize="14px"
                fontWeight="600"
                height="40px"
                width="120px"
                onClick={() => handleModal()}
                type="button"
              >
                Não possui conta? Registre-se aqui
              </Button>
            </form>
          </div>
        </Container>
      )}
    </>
  );
};

export default ModalLogin;
