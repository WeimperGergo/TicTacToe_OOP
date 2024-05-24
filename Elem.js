export default class Elem{
    #ertek = " ";
    #szuloElem;
    #divElem;
    #id = 0;
    constructor(id, ertek, szuloElem){
        this.#id = id;
        this.#ertek=ertek;
        this.#szuloElem=szuloElem;
        this.#megjelenit();
        /* ELEMRE KATTINTÁSKOR */
        this.#divElem = this.#szuloElem.children("div:last-child"); // ÚJ
        //console.log(this.#divElem);
        //console.log(this);
        
        
        
        /*this.#divElem.on("click", function(){
            console.log(this);
        })*/
        
        /*
        Egy osztályban a this, a konkrét objektum példányt jelenti, de egy eseménykezelőben
        ' function ' névtelen függvénnyel használva azt a html elemet jelenti, amelyik az 
        eseményt kiváltotta (olyan mint az event.target.id), nyílfüggvénnyel ( => ) használva 
        pedig az objektum példányra mutat
        */

        
        this.#divElem.on("click", () =>{
            //console.log(this.#id);
            if(this.#ertek === " ") this.#esemenyTrigger("lepes");
        })
    }

    #megjelenit(){
        let txt = `
        <div>
            <p>${this.#ertek}</p>
        </div>`;
        this.#szuloElem.append(txt);
    }

    /* Információ átadás eseményesetén másik osztálynak */
    #esemenyTrigger(esemenyNev){
        /* Létrehoz egy saját eseményt
        esemenyNev néven,
        és átad adatokat saját magáról {detail: } */
        const e = new CustomEvent(esemenyNev, {detail:this.#id});
        window.dispatchEvent(e);
    }
}
