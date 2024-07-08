


import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AppInput from "../../Components/AppInput/AppInput";
import { SCLoginPage } from './LoginPagw.style';
import Button from "../../Components/Button/Button";



const loginFormSchema = yup.object({
  useremail: yup.string().email().required("Обязательное поле!"),
  userpassword: yup
    .string()
    .min(4, "Пароль должен содержать как минимум 4 символа!")
    .required("Обязательное поле!"),
});

export const LoginPage = () => {
  const navigate = useNavigate();
  

  interface ILoginForm {
    useremail: string;
    userpassword: string;
  }

  // const onLoginSubmit = (data: ILoginForm) => {
  //   loginUser({ email:data.useremail, password:data.userpassword });
  // };

  

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      useremail: "",
      userpassword: "",
    },

    resolver: yupResolver(loginFormSchema),
  });

  const HandleClick = (info:ILoginForm) => {
    if (info){
      navigate('/MainPage')
      localStorage.setItem('user', JSON.stringify(info))
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <SCLoginPage className="LoginPage">
      <section className="LoginPage">
        <div className="main">
          <div className="login_header">
            <img src="../../../public/Img/Login/rdc-logo-default.svg" alt="" />
            <span className="login_h1">Welcome back</span>
            <span>Log in to Realtor.com PRO</span>
          </div>
          <div className="login">
            <form onSubmit={handleSubmit(HandleClick)}>
              <Controller
                control={control}
                name="useremail"
                render={({ field }) => (
                  <AppInput
                  className="Login_input"
                    isRequired={false}
                    inputType="text"
                    inputPlaceholder="Введите свой email"
                    isError={errors.userpassword ? true : false}
                  
                    {...field}
                  />
                )}
              />
              <div className="password_main">
              <Controller
                control={control}
                name="userpassword"
                render={({ field }) => (
                  <AppInput
                  type={showPassword ? "text" : "password"}
                   id="password-input"    
                    isRequired={false}
                    inputType="password"
                    inputPlaceholder="Пароль"
                    isError={errors.userpassword ? true : false}
                   
                    {...field}
                  />)}/>
                      <button
                      
                  type="button"
                  id="toggle-password"
                  className={`toggle-password-button ${showPassword ? "show" : ""}`}
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <img
                    src="../../../public/Img/Login/eye_dvgo1hfpxel7.svg"
                    alt="Eye icon"
                    className="eye-icon"
                  />
                </button>
                </div>
              <a className="login_a" href="">
                Forgot password?
              </a>
              {/* <button type="submit" className="Login_button">Log in</button> */}
              <Button buttonText={"Log in"} buttonType={"submit"} buttonID={""} className={"Login_button"}/>
              <div className="login_span">
                <span>
                  Having login issues? <a href="">Get help</a>
                </span>
                <span>
                  Are you an agent? <a href="">Sign up</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer className="Footer_login">
        <div className="login_footer">
          <div className="footer_a">
            <a href="">Support</a>
            <a href="">Ad Choices</a>
            <a href="">Privacy</a>
            <a href="">Website terms of use</a>
            <a href="">Do not sell my personal information</a>
          </div>
          <div className="footer_p">
            <p>©1995-2024</p> <a href="">National Association of REALTORS®</a>{" "}
            <p>and </p>
            <a href="">Move, Inc</a>
            <p>
              . All rights reserved. Realtor.com® is the official site of the
              National Association of REALTORS® and is operated by Move, Inc., a
              subsidiary of News Corp.
            </p>
          </div>
        </div>
      </footer>
    </SCLoginPage>
  );
};


