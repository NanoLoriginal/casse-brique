class Controle {
    constructor(Tableau1){
        this.scene = Tableau1
        this.InitKeyboard()
    }

    /*
     * création de la méthode pour utiliser le clavier
     */

    InitKeyboard(){
        let me = this;
        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) {
                return; // je ne sais pas à quoi ça sert
            }
            if (event.key === "RIGHT") {
                me.scene.joueurGauche.droite();
            }
            if (event.key === "LEFT") {
                me.scene.joueurGauche.gauche();
            }
            if (event.key === "j") {
                me.scene.joueurDroite.monte();
            }
            if (event.key === "n") {
                me.scene.joueurDroite.descend();
            }
            event.preventDefault(); // je ne sais pas à quoi ça sert
        }, true);



    }
}