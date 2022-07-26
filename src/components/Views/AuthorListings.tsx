import React from "react";
import "./AuthorListings.scss";
import { editBook, retrieveBook, deleteBook } from "../../static/index";

function AuthorListings() {
  return (
    <React.Fragment>
      <div className="centered">
        <h1>
          {" "}
          List of Authors' books{" "}
          <a href="/add_book" className="btn btn-success">
            {" "}
            +{" "}
          </a>
        </h1>
        <ul className="list-group list-group-flush" id="books">
          {/* {% for book in user.book %}
                    <li className="list-group-item">
                        <h6 className="list-header" onClick={() => retrieveBook(book.id)} /> {{ book.book_title }} </h6>
                        <button type="button" className="btn btn-warning" onClick={() => editBook(book.id)}  /> </ul> edit book details </button>
                        <button type="button" className="btn btn-warning" onClick={() => retrieveBook(book.id)} /> edit chapters </button>
                        <button type="button" className="close" onClick={()=> deleteBook(book.id) } />
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </li>
                    {% endfor %} */}
        </ul>
        <a href="/add_book" className="btn btn-success">
          {" "}
          Create Novel{" "}
        </a>
      </div>
    </React.Fragment>
  );
}

export default AuthorListings;
