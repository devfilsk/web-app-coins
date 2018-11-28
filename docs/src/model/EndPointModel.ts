import { ConfigClass } from './../ConfigClass';

export class EndPointModel{
    getAll(){
        let url = `${ConfigClass.getUrlApi()}pricemultifull?fsyms=IOT,XRP&tsyms=BTC,USD,BRL`;

        return fetch(url)
            .then(response => {
                if(response.status != 200){
                    throw new Error("Erro!");
                }
                return response.json();
            })
    }
}

export class CoinsObj {
    _iota: number | undefined;
    _ripple: number | undefined;

    constructor(){
        this._iota = 0;
        this._ripple = 0;
    }
}