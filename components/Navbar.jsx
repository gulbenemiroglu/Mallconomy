import Link from "next/link";
import Score from "./Score";

const Navbar = () => {
  return (
    <header className="navbar-container">
      <Link href={"/home"}>
        <h2 className="title">TestCase <b>APP</b></h2>
      </Link>
      <Score/>
    </header>
  );
};

export default Navbar;