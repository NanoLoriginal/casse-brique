class Ball {
    constructor(Tableau1) {
        this.scene = Tableau1
        /*
         * Création des attributs de la balle comme le sens du premier lancé , sa taille, son emplacement etc...
         */
        this.ball = this.scene.physics.add.sprite(1280 / 2, 720 / 2, 'cercle');
        this.ball.setBounce(1, 1);
        //this.ball.visible = false
    }
}