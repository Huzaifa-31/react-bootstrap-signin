import "./style.css";
function App() {
  return (
    <form className="  needs-validation form-signin" novalidate>
      <div className="col-12 mb-4  text-center">
        <img
          className="mb-4"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          alt=""
        />
        <h1 className="h3 mb-3">Sign In Page</h1>
        <p className="mb-0">
          Build a sign in page to display your command on bootstrap{" "}
          <span style={{ color: "red" }}>:text with color red </span>
          pseudo-element.
        </p>
        <a href="https://www.google.com/">
          Works in latest Chrome, Safari, Firefox. This is a clickable section
          that will take us to a new page
        </a>
      </div>
      <div className="col-12">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="test@test.com"
            value="test@test.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value="123456789"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="invalidCheck"
            required
          />
          <label className="form-check-label" for="invalidCheck">
            Remember me
          </label>
        </div>
      </div>
      <div className="col-12">
        <button
          className="btn btn-lg btn-primary btn-block col-12"
          type="submit"
        >
          Sign In
        </button>
        <p className="mt-5 mb-3 text-muted text-center">© 2017-2018</p>
      </div>
    </form>
  );
}

export default App;
