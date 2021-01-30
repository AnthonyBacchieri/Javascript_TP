import PresGrille from "./PresGrille";

export default class AbsGrille {

    static NORD = 0;
    static NORDEST = 1;
    static EST = 2;
    static SUDEST = 3;
    static SUD = 4;
    static SUDOUEST = 5;
    static OUEST = 6;
    static NORDOUEST = 7;
    static DIRECTIONS = [AbsGrille.NORD, AbsGrille.NORDEST, AbsGrille.EST, AbsGrille.SUDEST, AbsGrille.SUD, AbsGrille.SUDOUEST, AbsGrille.OUEST, AbsGrille.NORDOUEST];

    constructor() {
        this.taille = 0;
        this.lettres = [];
    }

    setCtrl(ctrl) {
        this.ctrl = ctrl;
    }

    /**
     * méthode pour recevoir les messages du controleur
     */
    reçoitMessage(message, piecejointe) {
        // todo
    }

    /**
     * pour trouver la lettre suivante, en partant d'une lettre dans une direction donnée
     * @param lettre : la lettre d'où on part
     * @param direction : la direction à suivre
     * @return la lettre si elle existe (on ne sort pas du cadre) ou null sinon
     */
    getLettreSuivante(lettre, direction) {
        let i = this.getIndiceSuivant(lettre.indice, direction);
        let result = null;
        if (i >= 0) result = this.lettres[i];
        return result;
    }

    /**
     * pour obtenir l'indice suivant (d'une lettre), en partant dans une direction
     * @param indice
     * @param direction
     * @returns {number} -1 si l'indice n'est pas possible (hors du tableau) ou
     */
    getIndiceSuivant(indice, direction) {
		switch(direction) {
			case NORD:
				if (division > 0) indicePotentiel = indicePotentiel-TAILLE;
				else indicePotentiel = -1;
				break;
			case NORDEST:
				if ((division > 0) && (modulo < (TAILLE-1)))
					{
					indicePotentiel = indicePotentiel-TAILLE+1;
					}
				else indicePotentiel = -1;
				break;
			case EST:
				if  (modulo < (TAILLE-1))
					{
					indicePotentiel = indicePotentiel+1;
					}
				else indicePotentiel = -1;
				break;
			case SUDEST:
				if  ((modulo < (TAILLE-1)) && (division < (TAILLE-1)))
					{
					indicePotentiel = indicePotentiel+TAILLE+1;
					}
				else indicePotentiel = -1;
				break;
			case SUD:
				if  (division < (TAILLE-1))
					{
					indicePotentiel = indicePotentiel+TAILLE;
					}
				else indicePotentiel = -1;
				break;
			case SUDOUEST:
				if  ((division < (TAILLE-1)) && (modulo > 0))
					{
					indicePotentiel = indicePotentiel+TAILLE-1;
					}
				else indicePotentiel = -1;
				break;
			case OUEST:
				if  (modulo > 0)
					{
					indicePotentiel = indicePotentiel-1;
					}
				else indicePotentiel = -1;
				break;
			case NORDOUEST:
				if  ((modulo > 0) && (division >0)) 
					{
					indicePotentiel = indicePotentiel-TAILLE-1;
					}
				else indicePotentiel = -1;
				break;
			default:
				indicePotentiel = -1;
				break;	
		}
    }


    /**
     * recherche toutes les suites d'indices qui correspondent au mot recherché
     * @param motrecherché
     * @returns {[]} un tableau d'indice s'il n'y a qu'une lettre ou un tableau de tableau d'indice s'il y a 2 lettres ou plus
     */
    getToutesLesPossibilites(motrecherché) {
        // todo
        // modification du code précédent : pour chaque lettres correspondant à la première lettre (il faut rechecher dans le tableau par exemple avec la méthode filter)
        // s'il y a plus d'une lettre : il faut explorer les directions
        // et on construit la liste des indices à mettre à jour (array d'array s'il le mot recherche à plusieurs lettres)
    }
}