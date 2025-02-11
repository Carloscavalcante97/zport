interface HeaderProps {
    title: string;
    subtitle?: string;
  }
  
  const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    return (
      <header className="text-center mt-5 ">
        <h1 className="text-7xl font-extrabold text-green-600">{title}</h1>
        {subtitle && <h2 className="font-normal text-2xl mt-4 text-green-600">{subtitle}</h2>}
      </header>
    );
  };
  
  export default Header;
  