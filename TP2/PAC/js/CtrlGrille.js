class CtrlGrille {
    constructor(abs, pres) {
        this.abs = abs;
        this.abs.setCtrl(this);
        this.pres = pres;
        this.pres.setCtrl(this);

        this.parent = null;
        this.enfants = [];
    }

    reçoitMessageDeLAbstraction(message, piecejointe) {
        console.error("reçoitMessageDeLAbstraction non impl");
    }

    reçoitMessageDuParent(message, piecejointe) {
        console.error("reçoitMessageDuParent non impl");
    }

    reçoitMessageDUnEnfant(message, piecejointe, ctrl) {
        console.error("reçoitMessageDUnEnfant non impl : "+message);
    }

    reçoitMessageDeLaPresentation(message, piecejointe) {
        // todo (appel à la méthode nouvelleSelection)
    }

    addEnfant(controleur) {
        this.enfants.push(controleur);
        controleur.setParent(this);
    }

    removeEnfant(controleur) {
        this.enfants = this.enfants.filter(pac => pac !== controleur);
    }

    setParent(controleur) {
        this.parent = controleur;
    }


    nouvelleSelection(mot) {
        // il faut demander les lettres à l'abstraction
        // transformer cela en tableau d'indice
        // et transmettre cela à la présentation
    }
}