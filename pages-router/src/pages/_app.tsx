import NavBar from "@src/components/NavBar";
import type { AppProps } from "next/app";
import Link from "next/link";
import { styled } from "styled-components";

const AppWrapper = styled.div`
  background: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <NavBar />
      <Component {...pageProps} />
    </AppWrapper>
  );
}
