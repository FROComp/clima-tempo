import styled, { createGlobalStyle } from "styled-components";
import background from "@/assets/background.jpg";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: start;
  height: 100vh;
  padding: 32px 0;
  width: 100vw;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #fafafa;
  border-radius: 8px;
  padding: 16px;
  width: 400px;
`;

export const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding-left: 8px;
  width: 100%;
  height: 48px;
  outline: none;
`;

export const Button = styled.button`
  color: #fff;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #0466c8;

  &:disabled {
    background-color: #ced4da;
    color: #6c757d;
  }
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  width: 100%;
`;

export const CityName = styled.h5`
  align-items: center;
  color: #121212;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  font-weight: 400;
  gap: 8px;

  img {
    width: 24px;
  }
`;

export const Condition = styled.div`
  color: #6c757d;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin-top: 8px;
`;

export const Temperature = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  img {
    width: 30px;
  }
`;

export const TempText = styled.h3`
  color: #121212;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
  font-weight: 500;
`;
