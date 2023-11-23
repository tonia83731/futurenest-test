import styled from 'styled-components'
import { breakpoints } from '../style/breakpoints'

import Header from '../components/Header'

export default function MainPage () {
  return (
    <>
      <Header />
      <MainSection>
        <MainTitle>首頁</MainTitle>
      </MainSection>
    </>
  )
}

export const MainSection = styled.main`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: auto;
  padding: 96px 32px 0;
  @media screen and (min-width: ${breakpoints.mobile}) {
    padding: 136px 124px 0;
  }
`

export const MainTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  @media screen and (min-width: ${breakpoints.mobile}){
    font-size: 24px;
  }
`
