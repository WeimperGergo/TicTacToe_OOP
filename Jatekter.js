import Elem from "./Elem.js";

export default class Jatekter{
    #korszamlalo = 0;
    #lista = [" "," "," "," "," "," "," "," "," "];

    constructor(){
        this.#megjelenit();

        /* Feliratkozik a lepes nevű eventre */
        $(window).on("lepes", (event)=>{
            console.log(event.detail);
            let id = event.detail;
            this.#lep(id);
        })
    }

    #megjelenit(){
        const szuloELEM = $(".jatekter");
        szuloELEM.empty();
        this.#lista.forEach((ertek, index) => {
            const elem = new Elem(index, ertek, szuloELEM);
        });
    }

    #lep(id){
        if(this.#korszamlalo % 2 === 0){
            this.#lista[id] = "X";
        }
        else{
            this.#lista[id] = "O"
        }
        this.#korszamlalo++;
        this.#megjelenit();
    }

}