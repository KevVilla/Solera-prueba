import HeaderLink from "../HeaderLink/HeaderLink";
import { useState} from "react";

const Header = () => {
  const [name,setName] = useState("todos")
  
  return (
    <div className="flex gap-3 bg-slate-100 w-full py-3 px-10">
      <HeaderLink name={name} setName={setName}>Todos</HeaderLink>
      <HeaderLink name={name} setName={setName}>Auto</HeaderLink>
      <HeaderLink name={name} setName={setName}>Salud</HeaderLink>
      <HeaderLink name={name} setName={setName}>Hogar</HeaderLink>
    </div>
  );
};

export default Header;
