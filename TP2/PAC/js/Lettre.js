class Lettre {
    constructor(valeur, indice) {
        this.valeur = valeur;
        this.indice = indice;
    }


    /**
     *  le nombre de lettre doit être un carré (4,9,16,25, etc.)
     */
    setLettres(listeDeLettres) {
        this.lettres = [];
        for (let i = 0; i < listeDeLettres.length; i++) {
            this.lettres.push(new Lettre(listeDeLettres[i], i));
        }
        this.taille = Math.sqrt(this.lettres.length);
    }
}