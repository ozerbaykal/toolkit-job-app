import { NavLink } from "react-router-dom";

const header = () => {
  return (
    <header>
      <h2>İş takip</h2>
      <nav>
        <NavLink to={"/"}>İş Listesi</NavLink>
        <NavLink to={"/new"}>İş Ekle</NavLink>
      </nav>
    </header>
  );
};

export default header;
