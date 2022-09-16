import React, { useContext, useEffect, useState } from "react";
import "./AuthorListings.scss";
import { displayPublishedBooks } from "../../static/index";
import BookEntity from "../Container/Book";
import { UserContext } from "../../static/UserContext";
import { useNavigate } from "react-router-dom";
import { CreateBookModal } from "../Modal/createBook";
import { useParams } from "react-router-dom";

function AuthorListings() {
  const user = useContext(UserContext);
  const params = useParams();
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3001/books/search/author/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setBooks(data);
          console.log("this is the set data", data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <h1>
          {user?.username}&apos;s Listings
          <CreateBookModal user={user} isLoggedIn={true} />
          <hr />
        </h1>
        {books && <div>{displayPublishedBooks(books, user!)}</div>}
      </div>
    </React.Fragment>
  );
}

export default AuthorListings;
