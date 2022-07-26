import react from "react";
import { previousPage } from "../../static/index.js";

function BookCreation() {
  <form method="POST" className="centered">
    <h5>Book Creation</h5>
    <div className="form-group">
      <br />
      <p>
        {" "}
        Book Title <br />
        <input type="text" id="book_title" name="book_title" />
      </p>
      {/* <p>
                <br />
                <input type="text" id="author" name="author" value={% print(user.username) %} readOnly /> </p> */}
    </div>
    <p>
      {" "}
      Book Summary <br />
      <textarea className="form-control" name="prologue"></textarea>
    </p>
    <div className="container">
      <ul className="ks-cboxtags">
        {/* {% for element in form_checkboxes %}
                <li><input type="checkbox" id={% print(element) %} name={% print(element) %} />
                <label for={% print(element) %}>{% print(element) %}</label></li>
          {% endfor %} */}
      </ul>
    </div>
    <div className="wrapper">
      <button type="submit" value="Send Form" className="btn btn-primary">
        Validate Book
      </button>
      <button type="reset" className="btn btn-warning">
        Reset
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          previousPage();
        }}
      >
        cancel
      </button>
    </div>
  </form>;
}

export default BookCreation;
