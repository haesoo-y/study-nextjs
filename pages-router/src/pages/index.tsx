import { styled } from "styled-components";

const HomeWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  margin: 40px;
  padding: 30px;
  & p {
    font-size: 40px;
    font-weight: 700;
    background: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default function Home() {
  return (
    <HomeWrapper>
      <p>TODO-NEXT-PAGE-ROUTE</p>
    </HomeWrapper>
  );
}
