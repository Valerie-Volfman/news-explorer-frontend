import React from "react";

class Api extends React.Component {
    constructor(props) {
        super(props);
        this._baseUrl = props.baseUrl;
    }

    async getArticles({name}) {
        const response = await fetch(`${this._baseUrl}?q=${name}&apiKey=549c0ee8a91c430dbf1ff2ea6b9b7f5f`, {
            method: "GET",
            headers: this._generateHeaders(),
        });

        return this._getResponseData(response);
    }

    _generateHeaders() {
        return {
            'Accept': 'application/json',
            "Content-Type": "application/json",
        }
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
    // baseUrl: "https://newsapi.org/v2/top-headlines?country=us&apiKey=549c0ee8a91c430dbf1ff2ea6b9b7f5f",
    baseUrl: "https://nomoreparties.co/news/v2/top-headlines",
});

export default api;