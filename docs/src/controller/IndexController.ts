import { EndPointModel, CoinsObj } from "../model";
import { IndexView } from "../view";

export class IndexController{
    constructor(
        private readonly _model : EndPointModel,
        private readonly _view : IndexView
    ){

    }

    initialize() {
        this._view.initialize();
    }

    onGetValue(){
        let self = this;
        let promise = new Promise(function (resolve, reject) {
            let promiseFetch = self._model.getAll();
            promiseFetch.then(response => {
                resolve(response);
            });
        })
        promise.then(response => {
            console.log(response)
            let stringResposta = JSON.stringify(response)
            let coins = JSON.parse(stringResposta);
            
            let iota = coins.RAW.IOT;
            let ripplexrp = coins.RAW.XRP;
            
            let coinsValues = new CoinsObj();

            coinsValues._iota = iota.USD.PRICE;
            coinsValues._ripple = ripplexrp.USD.PRICE;

            this._view.showValues(coinsValues);
        });
    }
}