import React from "react";
import { previousPage } from "../../static/index";

function ChapterEditor() {
  return (
    <React.Fragment>
      <form method="POST" className="centered">
        <h5>Chapter Editor</h5>
        <hr />
        <div className="form-group">
          <p>Chapter Title</p>
          <input
            type="text"
            className="form-control"
            value="{{chapter.chapter_title}}"
            id="form-title"
            name="form-title"
          />
          <p>Chapter Context</p>
          {/* <input
            type="text"
            className="form-control"
            id="form-context"
            name="form-context"
          >
            "{chapter.context}"
          </input> */}
          <input
            type="hidden"
            id="chapter-id"
            name="chapter-id"
            value="{{chapter.id}}"
          />
          <input
            type="hidden"
            id="book-id"
            name="book-id"
            value="{{chapter.book_id}}"
          />
        </div>
        <button type="submit" value="Send Form" className="btn btn-primary">
          Confirm changes
        </button>
        <button type="reset" className="btn btn-warning">
          reset
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => previousPage()}
        >
          cancel
        </button>
      </form>
    </React.Fragment>
  );
}

export default ChapterEditor;
