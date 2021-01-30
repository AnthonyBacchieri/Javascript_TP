import AbsGrille from "./AbsGrille";

export default class PresGrille {
    constructor() {
        this.lettres = document.querySelectorAll("div#motsmeles > div > span");
        this.input = document.getElementById("mot");
        this.nouveauMot = () => {
            // todo
            // pour réagir aux touches sur l'input
        };
    }

    setCtrl(ctrl) {
        this.ctrl = ctrl;
        // ajout de listener que quand on est pret
        this.input.addEventListener("keyup", this.nouveauMot);
    }
    
    this.abs.reçoitMessage(MESSAGE.SELECTION_MOT, mot);

    reçoitMessage(message, piecejointe) {
        // todo
    }


    clear() {
        // todo
    }

    select(liste) {
        // todo, on peut se baser sur les indices
    }
}