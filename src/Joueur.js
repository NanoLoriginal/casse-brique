class Joueur{

    constructor(name,Tableau1,x){
        this.scene = Tableau1;
        this.nom = name
        this.playerpad=this.scene.physics.add.sprite(x,700,'carre').setOrigin(0.0);
        this.playerpad.body.setSize(200,20)
        this.playerpad.setImmovable(true)
        this.playerpad.setVelocityY(0)
        this.playerpad.setVelocityX(0)


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