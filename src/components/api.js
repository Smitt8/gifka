export default class Api {
  constructor({url, token}) {
    this._url = `https://${url}/v1/gifs`;
    this._token = token;

    this._headers =  {
      "Content-type": "application/json"
    }
  }

  _checkResult(result) {
    if (result.ok) {
      return result.json();
    }
    return Promise.reject(`Ошибка --> ${result.statusText}`);
  }

  loadTrending = () => {
    return fetch(`${this._url}/trending?api_key=${this._token}&limit=25`, {
      headers: this._headers,
    })
    .then(result => {
      return this._checkResult(result);
    });
  };

  searchGifs = (query) => {
    return fetch(`${this._url}/search?api_key=${this._token}&q=${query}&limit=25`, {
      headers: this._headers,
    })
    .then(result => {
      // console.log(result);
      return this._checkResult(result);
    })
  };

  getRandom = () => {
    return fetch(`${this._url}/random?api_key=${this._token}`, {
    headers: this._headers,
  })
  .then(result => {
    return this._checkResult(result);
  })
  }
}
