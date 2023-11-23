/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { breakpoints } from '../style/breakpoints'
import { colorList } from '../style/colorList'

export default function InputText ({
  name,
  className,
  label,
  type,
  placeholder,
  inputValue,
  isRequired,
  onChange
}) {
  return (
    <InputTextDiv>
      <InputTextLabel htmlFor={`login-${className}`}>{label}</InputTextLabel>
      <InputTextInput
        name={name}
        type={type || 'text'}
        placeholder={placeholder}
        id={`login-${className}`}
        value={inputValue}
        required={isRequired}
        onChange={onChange}
      />
    </InputTextDiv>
  )
}

const InputTextDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`
const InputTextLabel = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
`
const InputTextInput = styled.input`
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  background-color: ${colorList.gray_input};
  padding-left: 16px;
  border-radius: 8px;
  border: none;

  display: flex;
  align-items: center;
  width: calc(100% - 16px);
  &::placeholder {
    color: ${colorList.gray_table_border};
    font-weight: 700;
    padding: 0;
  }
  &:focus {
    outline: none;
  }
  @media screen and (min-width: ${breakpoints.mobile}) {
    font-size: 18px;
  }
`
