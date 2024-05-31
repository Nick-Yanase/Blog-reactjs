import logosvg from "../../img/logo.svg";
const Header = () => {
  const descLogo = "Essa é a logo do blog";
  return (
    <>
      <header className="border w-full flex justify-center ">
        <nav className="w-full max-w-screen-lg bg-slate-400 flex justify-between items-center">
          <div className="logo">
            <img src={logosvg} alt={descLogo} />
          </div>
          <div className="search">
            <input type="text" name="search"/>
          </div>
          <ul className="flex gap-3 items-center ">
            <li><a href="#" className=" inline-block border p-2 text-regal-blue ">Option1</a></li>
            <li><a href="#">Option1</a></li>
            <li><a href="#">Option1</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
