import styled from "styled-components";
import { breakpoints } from "../style/breakpoints";
import { colorList } from "../style/colorList";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";


export default function Header() {
  const [isChecked, setIsChecked] = useState(false)
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  return (
    <SiteHeader>
      <LogoDiv>
        This is Logo
      </LogoDiv>
      <NavInput
        type="checkbox"
        id="nav-input"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <NavLabel htmlFor="nav-input" id="nav-label">
        <i className="fa-solid fa-bars"></i>
      </NavLabel>
      <NavBar>
        <NavList>
          <NavItem>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              首頁
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/YouBike/payment"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              圖表
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/YouBike/stop-info"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
               踩地雷
            </NavLink>
          </NavItem>
        </NavList>
        <LoginBtn className="forMobile">
          <Link to="/login">登入</Link>
        </LoginBtn>
      </NavBar>
      <LoginBtn className="forDesktop">
        <Link to="/login">登入</Link>
      </LoginBtn>
    </SiteHeader>
  )
}

const SiteHeader = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  height: 72px;
  background: ${colorList.white};
  border-bottom: 1px solid ${colorList.gray_border};
  display: grid;
  grid-template-columns: 32px 1fr 1fr 32px;
  align-items: center;
  @media screen and (min-width: ${breakpoints.desktop}) {
    height: 104px;
    grid-template-columns: 124px 1fr 4fr 3fr 124px;
  }
  @media screen and (min-width: 1200px) {
    height: 104px;
    grid-template-columns: 124px 1fr 3fr 3fr 124px;
  }
`
const LogoDiv = styled.div`
  grid-column: 2/3;
  font-weight: 700;
  font-size: 30px
  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: 45px
  }
`
const NavInput = styled.input`
  display: none;
  &:checked ~ nav {
    transform: scale(1, 1);
  }
  &: checked ~ nav li {
    opacity: 1;
    transition: opacity .2s ease-out .15s;
  }
`
const NavLabel = styled.label`
  grid-column: 3/4;
  justify-self: end;
  cursor: pointer;
  @media screen and (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`
const NavBar = styled.nav`
  position: absolute;
  top: 100%;
  padding: 32px;
  width: 100%;
  height: calc(100vh - 72px);
  background-color: ${colorList.light_green};
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 0.3s ease-out;
  @media screen and (min-width: ${breakpoints.desktop}) {
    all: unset;
    background-color: ${colorList.white};
  }
`
const NavList = styled.ul`
  @media screen and (min-width: ${breakpoints.desktop}) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 40px;
  }
`

const NavItem = styled.li`
  margin-bottom: 32px;
  opacity: 0;
  a {
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 3.24px;
    color: ${colorList.white};
    &.active {
      color: ${colorList.olive};
    }
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    all: unset;
    a {
      color: ${colorList.olive};
      &.active {
        color: ${colorList.light_green};
      }
    }
  }
`
const LoginBtn = styled.li`
  position: fixed;
  bottom: 128px;
  background: ${colorList.white};
  padding: 10px 0;
  border-radius: 100px;
  width: 80px;
  text-align: center;
  opacity: 0;
  a {
    color: ${colorList.light_green};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.1px;
  }
  &.forDesktop {
    display: none;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    all: unset;
    justify-self: end;
    background-color: ${colorList.light_green};
    padding: 10px 24px;
    border-radius: 100px;
    a {
      color: ${colorList.white};
    }

    &.forMobile {
      display: none;
    }
    &.forDesktop {
      display: block;
    }
  }
`
