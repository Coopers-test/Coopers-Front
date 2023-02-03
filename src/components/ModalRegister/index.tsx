import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Container } from "../ModalLogin/styles";
import { Button } from "../Button/styles";
import { IRegister, useUserContext } from "../../context/UserContext";

import SVG from "../../assets/Login_svg.svg";
import { schema } from "../../validators/register";

const ModalRegister = () => {
  const {
    isModalRegisterOpen,
    setIsModalRegisterOpen,
    setIsModalLoginOpen,
    registerUser,
  } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({ resolver: yupResolver(schema) });

  const handleModal = () => {
    setIsModalLoginOpen(true);
    setIsModalRegisterOpen(false);
  };

  return (
    <>
      {isModalRegisterOpen && (
        <Container>
          <div className="modal--container animate__animated animate__bounceIn">
            <div className="modal--close">
              <button onClick={() => setIsModalRegisterOpen(false)}>
                close
              </button>
            </div>
            <div className="modal--title">
              <img src={SVG} alt="" />
              <div className="title--subtitle">
                <h3>Sign in</h3>
                <p>to acess your list</p>
              </div>
            </div>
            <form
              className="modal--content"
              onSubmit={handleSubmit(registerUser)}
            >
              <label htmlFor="name">
                Name:
                <input type="text" {...register("name")} />
                <p>{errors.name?.message}</p>
              </label>
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
                width="120px"
                // onClick={() => handleModal()}
                type="submit"
              >
                Register
              </Button>
            </form>
          </div>
        </Container>
      )}
    </>
  );
};

export default ModalRegister;
