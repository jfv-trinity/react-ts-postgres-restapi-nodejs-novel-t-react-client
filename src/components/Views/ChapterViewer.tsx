import React from "react";
import {
  retrieveNextChapter,
  retrievePreviousChapter,
} from "../../static/index";

function ChapterView() {
  return (
    <React.Fragment>
      <div className="centered">
        {/* <h2>
          home / {book.book_title} / {chapter.chapter_title}
        </h2> */}
        <hr />
        <div className="form-group">
          {/* <p>{{book.book_title}} - {{chapter.chapter_title}}</p> */}
          <hr />
          {/* <p>{% print(chapter.context) %}</p> */}
        </div>
        {/* <button onClick={() => retrievePreviousChapter(chapter.id)}>
          Previous Chapter
        </button>
        <button onClick={() => retrieveNextChapter(chapter.id)}>
          Next Chapter
        </button> */}
      </div>
    </React.Fragment>
  );
}

export default ChapterView;
