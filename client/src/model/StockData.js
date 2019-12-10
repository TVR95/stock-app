const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

class StockData {
    constructor(URL) {
        this.URL = URL;
    }

    stockNames() {
        let response;
        const url = 'http://webtask.future-processing.com:8068/stocks'

        const Http = new XMLHttpRequest();
        Http.open("GET", url);
        Http.send();

        Http.onreadystatechange = (e) => {
            console.log(Http.responseText);
            response = Http.responseText;
        }

        return response;
    }
}

module.exports = StockData;