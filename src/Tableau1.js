class Tableau1 extends Phaser.Scene{

    preload(){
        this.load.image('carre','assets/carre.png');
        this.load.image('cercle','assets/cercle.png');

    }

    create(){

    }

    startGame(){

        this.lock = 0 //initialisation du lock à 0 qui servira ensuite à bloquer la vitesse de la balle
        this.text.destroy() //suppression du text du menu
        if (this.start == 1){
            this.Mainball = new Ball(this)
            /*
            création des joueurs
            */
            this.joueurGauche = new Joueur('Player 1', 'joueurGauche',this,0)

            this.joueurDroite = new Joueur('Player 2', 'joueurDroite',this,1230)
            /*
            création des murs en haut et en bas
             */
            this.MurUp= new Mur(this,0)
            this.MurDown= new Mur(this,670)
            /*
            initialisation du score
             */
            this.score = 0
        }

    }

    update(){

    }


}