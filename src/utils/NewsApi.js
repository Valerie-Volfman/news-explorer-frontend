import React from "react";

class Api extends React.Component {
  constructor(props) {
    super(props);
    this._baseUrl = props.baseUrl;
  }

  async getArticles(keyword) {
    const response = await fetch(
      `${this._baseUrl}?q=${keyword}&pageSize=100&apiKey=549c0ee8a91c430dbf1ff2ea6b9b7f5f`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return this._getResponseData(response);
  }

  _generateHeaders() {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }
  _getResponseData(response) {
    if (!response.ok) {
      return Promise.reject(
        "Something went wrong",
        response.status,
        response.statusText
      );
    }
    return response.json();
  }
}

const api = new Api({
  baseUrl: "https://nomoreparties.co/news/v2/everything",
});

export default api;
