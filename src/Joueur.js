class Joueur{

    constructor(Tableau1,x){
        this.scene = Tableau1;
        this.playerpad=this.scene.physics.add.sprite(x,700,'carre').setOrigin(0.0);
    }
    droite(){
        this.playerpad.setVelocityX(450)
    }
    gauche(){
        this.playerpad.setVelocityX(-450)
    }

    immobile(){
        this.playerpad.setVelocityX(0)
    }

    limite(){

    }




}