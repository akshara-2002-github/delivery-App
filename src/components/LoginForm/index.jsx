import "./index.css";

const LoginForm = () => {
  return (
    <div className="loginPage">
      <div className="loginPage__content">
        <div className="loginPage__content__logo"></div>
        <h2>Welcome Back 👋</h2>
        <p>
          Today is a new day. It's your day. You shape it.<br/> Sign in to start
          ordering.
        </p>
        <form>
          <label for="name">Email:</label>
          <input type="text" placeholder="Example@gmail.com"/>
          <label for="name">Password:</label>
          <input type="password" placeholder="At least 8 characters" />
          <button type="submit">Sign in</button>
        </form>
        <p>Do you have an account? <a>Sign Up</a></p>
      </div>
      <div className="loginPage__image"> </div>
    </div>
  );
};

export default LoginForm;
