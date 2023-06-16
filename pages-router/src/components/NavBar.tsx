import Link from "next/link";
import { styled } from "styled-components";

const NavWrapper = styled.nav`
  display: flex;
  background-color: #232222;
  padding: 20px;
  width: 100%;
  & a {
    color: white;
    margin-left: 30px;
  }
`;

const NavBar = () => {
  return (
    <NavWrapper>
      <Link href="/todos">todos</Link>
      <Link href="/">home</Link>
    </NavWrapper>
  );
};

export default NavBar;
