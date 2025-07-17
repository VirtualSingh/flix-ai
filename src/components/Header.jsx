import logo from "/logo.png";

export default function Header() {
  return (
    <header className="header h-14  px-4 bg-gradient-to-r from-black  via-transparent via-50% to-black to-90% ">
      <span className="logo-wrapper inline-block h-full">
        <img src={logo} alt="logo" className="h-full" />
      </span>
    </header>
  );
}
