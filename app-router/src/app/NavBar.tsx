import Link from "next/link";
import { NavWrapper } from "./NavBar.styled";

const NavBar = () => {
  return (
    <NavWrapper>
      <Link href="/todos">todos</Link>
      <Link href="/">home</Link>
    </NavWrapper>
  );
};

export default NavBar;
