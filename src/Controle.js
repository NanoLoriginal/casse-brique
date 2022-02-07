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
                me.scene.NewPlayer.droite();
            }
            if (event.key === "LEFT") {
                me.scene.NewPlayer.gauche();
            }
            event.preventDefault();
        }, true);

        window.addEventListener("keyup", function (event) {
            if (event.defaultPrevented) {
                return; // jje ne sais pas à quoi ça sert
            }
            if (event.key === "RIGHT") {
                me.scene.NewPlayer.immobile();
            }
            if (event.key === "LEFT") {
                me.scene.NewPlayer.immobile();
            }
            event.preventDefault(); // je ne sais pas à quoi ça sert
        }, true);

    }
}