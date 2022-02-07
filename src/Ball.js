class Ball {
    constructor(Tableau1) {
        this.scene = Tableau1
        /*
         * Création des attributs de la balle comme le sens du premier lancé , sa taille, son emplacement etc...
         */

        this.ball = this.scene.physics.add.sprite(1280 / 2, 720 / 2, 'cercle')
        this.ball.scale = 0.05
        this.ball.setVelocityX(Math.random() > 0.5 ? -200 : 200)
        this.ball.setBounce(1, 1)
        //this.ball.visible = false

    }

    /*
     * création dd'une limita à la vélocité de la balle sinon elle finit par traverser les raquettes
     */
}