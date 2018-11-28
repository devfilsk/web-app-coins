import { EndPointModel } from "./model";
import { IndexView } from "./view";
import { IndexController } from "./controller";

const elRaiz = document.getElementById("root");

const model = new EndPointModel();
const view = new IndexView(elRaiz);
const controller = new IndexController(model, view);

view.controller = controller;
controller.initialize();

const btnConsultar = document.getElementById("btn-consultar");
(btnConsultar as HTMLElement).addEventListener("click", function () {
    controller.onGetValue();
});