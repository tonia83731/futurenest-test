import styled from "styled-components";
import { breakpoints } from "../style/breakpoints";
import { colorList } from "../style/colorList";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { useState } from "react";
// import Header from "../components/Header";
import InputText from "../components/InputText";
import { userData } from "../data/userData";

export default function LoginPage() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    if(userName.length === 0 || password.length === 0) return
    if(userName === userData.username && password === userData.password){
      Swal.fire({
        position: "top",
        title: "登入成功！",
        timer: 1000,
        icon: "success",
        showConfirmButton: false,
      });
      navigate("/");
    } else {
      Swal.fire({
        position: "top",
        title: "登入失敗！",
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
    }
  }
  return (
    <>
      {/* <Header /> */}
      <LoginSection>
        <LoginDiv>
          <MainTitle>登入頁面</MainTitle>
          <FormSection onSubmit={handleSubmit}>
            <InputText
              name="username"
              className="username"
              label="帳號"
              placeholder="請輸入帳號"
              isRequired={true}
              inputValue={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <InputText
              name="password"
              className="password"
              label="密碼"
              placeholder="請輸入密碼"
              isRequired={true}
              inputValue={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormBtn>登入</FormBtn>
            <OtherBtn>
              <Link to="/">取消</Link>
            </OtherBtn>
          </FormSection>
        </LoginDiv>
      </LoginSection>
    </>
  );
}

const LoginSection = styled.section`
  text-align: center;
  width: 80%;
  max-width: 1280px;
  margin: auto;
  @media screen and (min-width: ${breakpoints.mobile}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
`;
const LoginDiv = styled.div`
  grid-column: 2/3;
`
const MainTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  @media screen and (min-width: ${breakpoints.mobile}) {
    font-size: 24px;
  }
`;

const FormSection = styled.form`
  text-align: left;
`;
const FormBtn = styled.button`
  width: 100%;
  margin-top: 16px;
  font-weight: 700;
  color: ${colorList.white};
  background-color: ${colorList.light_green};
  border-radius: 50px;
`
const OtherBtn = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 8px;
  a {
    color: ${colorList.gray_table_border};
    text-decoration: underline;
  }
`;
