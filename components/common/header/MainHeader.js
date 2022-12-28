import Link from "next/link";
import AutoComplete from "../../autocomplete/AutoComplete";
const MainHeader = () => {
  const navLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/doctors">Doctors</Link>
      </li>
      <li>
        <Link href="/medicines">Medicines</Link>
      </li>
    </>
  );
  const customItems = (
    <>
      <Link href="/signup" className="btn btn-xs m-2">
        Signup
      </Link>
      <Link href="/login" className="btn btn-xs m-2">
        Login
      </Link>
    </>
  );
  return (
    <>
      <header>
        <div className="navbar bg-primary-content flex justify-between">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu text-black menu-compact dropdown-content mt-3 p-2 shadow bg-primary-content rounded-box w-52"
              >
                {navLinks}
                {customItems}
              </ul>
            </div>
            <Link
              href="/"
              className="btn btn-ghost normal-case text-xl text-black"
            >
              MedicineBD
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-black p-0">{navLinks}</ul>
            {customItems}
          </div>
        </div>
        <AutoComplete />
      </header>
    </>
  );
};

export default MainHeader;
