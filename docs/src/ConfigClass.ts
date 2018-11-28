export class ConfigClass{
    
    private static urlApi : string = "https://min-api.cryptocompare.com/data/";

    static getUrlApi(){
        //this.urlApi = "https://api.bitfinex.com/v1";
        return this.urlApi;
    }
}