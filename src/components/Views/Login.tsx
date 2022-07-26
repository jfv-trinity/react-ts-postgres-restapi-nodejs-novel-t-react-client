import * as React from "react";

// function checkEmail(element){
//   if (element.value.includes("@") == false || element.value.includes(".com") == false){
//       element.style.borderColor="red";
//       emailSubtext.classList="subtext";
//       emailSubtext.innerHTML="Invalid Email";
//     }
//   else{
//       emailSubtext.classList="hidden-subtext";
//       element.style.borderColor="green";
//       }
// }

// function checkPassword(password, password1){
//     if(password == password1){
//       document.getElementById('password').style.borderColor='green';
//     }
//     else
//     {
//         document.getElementById('')
//     }
//   }

function LoginPage() {
  return (
    <React.Fragment>
      <form method="POST">
        <h5 style={{ textAlign: "center" }}>Login</h5>
        <div className="form-group">
          <label>
            {" "}
            <b>Email Address/Username</b>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email/username"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <b>Password</b>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter password"
            />
          </label>
        </div>
        <input type="hidden" name="type" value="login" />
        <br />
        <button
          type="submit"
          id="submit-button"
          value="Send Form"
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
    </React.Fragment>
  );
}

export default LoginPage;
