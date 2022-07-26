import * as React from "react";

function RegisterPage() {
  return (
    <React.Fragment>
      <form className="w3-container" method="post" id="form-register">
        <div className="w3-section">
          <p>
            <b>Email Address</b>
          </p>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter email"
          />
          <br />
          <label>
            <b>User Name</b>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Enter Username"
            />
          </label>
          <br />
          <label>
            <b>Password</b>
            <input
              type="password"
              className="form-control"
              id="password1"
              name="password1"
              placeholder="Enter Password"
            />
          </label>
          <p id="password1-error" className="hidden-subtext">
            this is subtext
          </p>
          <br />
          <label>
            <b>Re-enter Password</b>
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              placeholder="Re-enter Password"
            />
          </label>
          <p id="password2-error" className="hidden-subtext">
            this is subtext
          </p>
          <button
            className="w3-button w3-block w3-green w3-section w3-padding"
            type="submit"
          >
            Create Account
          </button>
          <input type="hidden" id="form2" name="type" value="register" />
        </div>
      </form>
    </React.Fragment>
  );
}

export default RegisterPage;
