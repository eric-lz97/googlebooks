import React, { Component } from "react";
import { toast } from "react-toastify";
import { List } from "../components/List/index";
import Book from "../components/Book/index";
import API from "../utils/API";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };
}
