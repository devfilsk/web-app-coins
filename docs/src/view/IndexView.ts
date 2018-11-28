import { IndexController } from "../controller";
import { CoinsObj } from "model";

export class IndexView{
    controller: IndexController | undefined;

    constructor(private readonly raiz:HTMLElement | null){
    }

    initialize() {
      this.getValues();
    }


    showValues(values: CoinsObj){
        console.log("Iota:", values._iota)

        if(this.raiz){
            let iota = this.raiz.getElementsByClassName("iota-value")[0];
            iota.textContent = `${values._iota}`;
        }

        console.log("Ripple:", values._ripple)
        if(this.raiz){
            let iota = this.raiz.getElementsByClassName("ripple-value")[0];
            iota.textContent = `${values._ripple}`;
        }
    }

    getValues(){
        if(this.controller){
            this.controller.onGetValue();
        }
    }
}