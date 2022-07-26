import * as React from "react";
import "./UserProfile.scss";

function displayModal(element: HTMLElement | null) {
  if (element != null) {
    if (element.style.display == "block" || element.style.display == null) {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  }
}

function UserProfile() {
  return (
    <React.Fragment>
      <div className="something">
        <h2 className="header">Profile</h2>
        <div className="card">
          <div className="form-group">
            <div className="left">
              <h5>Email Address</h5>
              {/* <p className="subtext">{{user.email}}</p> */}
            </div>
            <div className="right">
              <button
                type="button"
                className="btn btn-primary"
                id="email-change"
                onClick={() =>
                  displayModal(document.getElementById("email-confirmation"))
                }
              >
                edit
              </button>
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <h5>User Name</h5>
              {/* <p className="subtext">{{user.username}}</p> */}
            </div>
            <div className="right">
              <button
                type="button"
                className="btn btn-primary"
                id="username-change"
                onClick={() =>
                  displayModal(document.getElementById("username-confirmation"))
                }
              >
                edit
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <h4> Password Security </h4>
      <p>
        Change password using existing password or upgrade your security and
        change password using email authentication.
      </p>
      <button
        className="btn btn-primary"
        id="password-change"
        onClick={() =>
          displayModal(document.getElementById("password-confirmation"))
        }
      >
        {" "}
        Change password{" "}
      </button>
      <br />
      <hr />
      <h4> Account Actions </h4>
      <p> Account can be disabled and recovered later.</p>
      <a href="#!" className="btn btn-danger">
        Disable Account
      </a>
      <button
        type="button"
        id="deletion"
        className="btn outline"
        onClick={() =>
          displayModal(document.getElementById("account-confirmation"))
        }
      >
        Delete Account
      </button>

      {/* <!--modals for page -->
<!--email modal--> */}
      <div className="w3-container">
        <div id="email-confirmation" className="w3-modal">
          <div className="w3-modal-content w3-card-4 w3-animate-opacity">
            <span
              onClick={() =>
                (document.getElementById("email-confirmation")!.style.display =
                  "none")
              }
              className="w3-button w3-large w3-hover-red w3-display-topright"
              title="Close Modal"
            >
              &times;
            </span>
            <div className="w3-center">
              <br />
              <h4>Enter email address</h4>
              <p>Enter a new email address and your existing password.</p>
            </div>
            <form method="post" className="w3-container">
              <div className="w3-section">
                <label>
                  <b>Enter new email address</b>
                </label>
                <input
                  type="email"
                  className="w3-input w3-border w3-margin-bottom"
                  id="email-form-email"
                  name="email-form-email"
                  placeholder=""
                />
                <label>
                  <b>Enter password</b>
                </label>
                <input
                  type="password"
                  className="w3-input w3-border w3-margin-bottom"
                  id="email-form-password"
                  name="email-form-password"
                  placeholder=""
                />
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() =>
                    (document.getElementById(
                      "email-confirmation"
                    )!.style.display = "none")
                  }
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-success">
                  Confirm
                </button>
                <input
                  type="hidden"
                  id="email-form"
                  name="form"
                  value="email-modal"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <!--username modal--> */}
      <div className="w3-container">
        <div id="username-confirmation" className="w3-modal">
          <div className="w3-modal-content w3-card-4 w3-animate-opacity">
            <span
              onClick={() =>
                (document.getElementById(
                  "username-confirmation"
                )!.style.display = "none")
              }
              className="w3-button w3-large w3-hover-red w3-display-topright"
              title="Close Modal"
            >
              &times;
            </span>
            <div className="w3-center">
              <br />
              <h4>Enter new username</h4>
              <p>Enter password.</p>
            </div>
            <form method="post" className="w3-container">
              <div className="w3-section">
                <label>
                  <b>Username</b>
                </label>
                <input
                  type="text"
                  className="w3-input w3-border w3-margin-bottom"
                  id="modal-username"
                  name="modal-username"
                  placeholder=""
                />
                <label>
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className="w3-input w3-border w3-margin-bottom"
                  id="modal-password"
                  name="modal-password"
                  placeholder=""
                />
                <input
                  type="hidden"
                  id="username-form"
                  name="form"
                  value="username-modal"
                />
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() =>
                    (document.getElementById(
                      "username-confirmation"
                    )!.style.display = "none")
                  }
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-success">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <!--password modal--> */}
      <div className="w3-container">
        <div id="password-confirmation" className="w3-modal">
          <div className="w3-modal-content w3-card-4 w3-animate-opacity">
            <span
              onClick={() =>
                (document.getElementById(
                  "password-confirmation"
                )!.style.display = "none")
              }
              className="w3-button w3-large w3-hover-red w3-display-topright"
              title="Close Modal"
            >
              &times;
            </span>
            <div className="w3-center">
              <br />
              <h4>Enter new password</h4>
              <p>Enter existing password below new password.</p>
            </div>
            <form method="post" className="w3-container">
              <div className="w3-section">
                <label>
                  <b>Existing password</b>
                </label>
                <input
                  type="password"
                  className="w3-input w3-border w3-margin-bottom"
                  id="modal-existing-password"
                  name="existing-password"
                  placeholder=""
                />
                <label>
                  <b>New password</b>
                </label>
                <input
                  type="password"
                  className="w3-input w3-border w3-margin-bottom"
                  id="modal-new-password"
                  name="new-password"
                  placeholder=""
                />

                <input
                  type="hidden"
                  id="password-form"
                  name="form"
                  value="password-modal"
                />
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() =>
                    (document.getElementById(
                      "password-confirmation"
                    )!.style.display = "none")
                  }
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-success">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <!--account modal--> */}
      <div className="w3-container">
        <div id="account-confirmation" className="w3-modal">
          <div className="w3-modal-content w3-card-4 w3-animate-opacity">
            <span
              onClick={() =>
                (document.getElementById(
                  "account-confirmation"
                )!.style.display = "none")
              }
              className="w3-button w3-large w3-hover-red w3-display-topright"
              title="Close Modal"
            >
              &times;
            </span>
            <div className="w3-center">
              <br />
              <h4>Delete account</h4>
              <p>
                Enter "Delete Account" to <b>permanently</b> delete your
                account.
              </p>
            </div>
            <form method="post" className="w3-container">
              <div className="w3-section">
                <input
                  type="text"
                  className="w3-input w3-border w3-margin-bottom"
                  id="delete-confirmation"
                  name="confirmation"
                  placeholder=""
                />
                <input
                  type="hidden"
                  id="account-form"
                  name="form"
                  value="account-modal"
                />
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() =>
                    (document.getElementById(
                      "account-confirmation"
                    )!.style.display = "none")
                  }
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-success">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserProfile;
