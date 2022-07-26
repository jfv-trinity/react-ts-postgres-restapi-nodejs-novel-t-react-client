import * as React from "react";
import "./AnonBookInfo.scss";
import {
  bookMark,
  displayModal,
  retrieveChapter,
  editChapter,
  deleteChapter,
} from "../../static/index";

function AnonBookPage() {
  return (
    <React.Fragment>
      <div className="centered">
        {/* <h4>{{ book.book_title }}  <i className="fa-solid fa-bookmark" onClick={() => bookMark(book.id)}></i></h4> */}
        <hr />
        <br />
        <div>
          <img src="/static/emptybook.png" className="book-cover" />
          <div className="wrapper">
            <div className="details">
              {/* <div className="row">
                    <div className="book-attribute">title(s):</div>
                    <div className="attribute-context">{{book.book_title}}</div>
                </div>
                <div className="row">
                    <div className="book-attribute">Genre(s): </div>
                    <div className="attribute-context">{{book_genres}}</div>
                </div>
                <div className="row">
                    <div className="book-attribute">Author: </div>
                    <div className="attribute-context">{{book.author}}</div>
                </div>
                <div className="row">
                    <div className="book-attribute">rank: </div>
                    <div className="attribute-context">N/A</div>
                </div>
                <div className="row">
                    <div className="book-attribute">rating: </div>
                    <div className="attribute-context">N/A</div>
                </div> */}
            </div>
          </div>
        </div>
        <br />
        <br />
        <div>
          <h3> Book Summary </h3>
          <hr />
          {/* <p style={{textAlign:"center"}}>{% print(book.prologue) %}</p> */}
        </div>
        <br />
        <br />
        <div className="w3-container">
          <h3> Book Chapters </h3>
          <button
            className="btn btn-success"
            onClick={() =>
              displayModal(document.getElementById("add-chapter-modal")!)
            }
          >
            +
          </button>
          <hr />
          <ul className="list-group list-group-flush" id="books">
            {/* {% for chapter in book.book_chapters %}
        <li className="list-group-item">
            <h6 className="list-header"  onClick={()=>retrieveChapter(chapter.id )}>{{ chapter.chapter_title }}</h6>
            <button type="button" className="btn btn-warning" onClick={()=> editChapter(chapter.book_id, chapter.id)} id="edit-modal">edit chapter</button>
                            <button type="button" className="close" onClick={() => deleteChapter(chapter.book_id, chapter.id)} id="delete">
                <span aria-hidden="true">&times;</span>
            </button>
        </li>
        {% endfor %} */}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AnonBookPage;
