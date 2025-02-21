import React, { useState } from "react";
import "./App.css"; 

function Form() {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    accepted: false,
  });

  function handleChange(event) {
    const { name, type, checked, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.login || !formData.password) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    if (!formData.accepted) {
      alert("Вы должны принять условия.");
      return;
    }

    alert(" Данные успешно отправлены!");

    setFormData({
      login: "",
      password: "",
      accepted: false,
    });
  }

  return (
    <div className="form-container">
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="login"
        placeholder="Логин"
        value={formData.login}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Пароль"
        value={formData.password}
        onChange={handleChange}
      />
      <label>
        <input
          type="checkbox"
          name="accepted"
          checked={formData.accepted}
          onChange={handleChange}
        />
        Я принимаю все условия
      </label>
      <button type="submit" className="submit-button">Отправить</button>
    </form>
  </div>
  );
}

export default Form;
