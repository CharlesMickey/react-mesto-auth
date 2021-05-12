import React from "react";

function Login() {
  const [stateInput, setStateInput] = React.useState({});

  function handleChangeInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setStateInput({ ...stateInput, [name]: value });
  }
  return (
    <div className={`formAuth`}>
      <h2 className={`formAuth__form-name`}>Вход</h2>
      <form className={`formAuth__form`} noValidate>
        <fieldset className="formAuth__set">
          <label className="formAuth__field">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="formAuth__input"
              minLength={2}
              maxLength={40}
              value={stateInput.email || ""}
              onChange={handleChangeInput}
              required
            />
            <span className="" id="email-error"></span>
          </label>
          <label className="formAuth__field">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Пароль"
              className="formAuth__input"
              minLength="2"
              maxLength="200"
              value={stateInput.password || ""}
              onChange={handleChangeInput}
              required
            />
            <span className="" id="password-error"></span>
          </label>
        </fieldset>
        <button
          type="submit"
          value="Отправить на сервер"
          className="formAuth__button-submit"
        >
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
