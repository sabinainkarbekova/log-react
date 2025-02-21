import './App.css';
import logo from "./img/MEET__1_-removebg-preview.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="LOGO" />
      </div>
      <nav className="nav">
        <a href="#products">Продукты</a>
        <a href="#premium">Подписка</a>
        <a href="#specialty">Особенности</a>
      </nav>
      <div className="buttons">
        <button className="demo">Запросить демо</button>
        <Link to="/form" className="form-button">Войти</Link>
      </div>
    </header>
  );
}

export default Header;
