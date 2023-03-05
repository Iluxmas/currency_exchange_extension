class Api {
  constructor(url, key) {
    this._baseURL = url;
    this._apikey = key;
  }

  getResource(url) {

    const newProm = fetch(`${this._baseURL}${url}`, {
      method: 'GET',
      headers: {
        "apikey": this._apikey,
        "Content-Type": "application/json",
      },
    });

    return newProm;
  }


}

const apiURL = "https://api.apilayer.com/fixer";
const apikey = 'IgCnFI8U0cbMQlvU6NqDKjSdcoyPoPuN';

const ApiService = new Api(apiURL, apikey);

export default ApiService;