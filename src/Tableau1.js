class Tableau1 extends Phaser.Scene{

    preload(){
        this.load.image('carre','assets/carre.png');
        this.load.image('cercle','assets/cercle.png');
    }

    create(){
        this.NewPlayer = this.physics.add.sprite(300,700,'carre').setOrigin(0.0);
        this.NewPlayer.setDisplaySize(200,20);
        this.NewPlayer.setImmovable(true);
        this.NewPlayer.body.setAllowGravity(false);


        this.Mainball = this.physics.add.sprite(380,600,'cercle').setOrigin(0.0);

        this.Mainball.setDisplaySize(20,20);
        this.Mainball.setBounce(1,1.01)

        this.gauche = this.physics.add.sprite(0,0,'carre').setOrigin(0,0);
        this.gauche.setDisplaySize(20,800);
        this.gauche.setImmovable(true);
        this.gauche.body.setAllowGravity(false);

        this.droite = this.physics.add.sprite(780,0,'carre').setOrigin(0,0);
        this.droite.setDisplaySize(20,800);
        this.droite.setImmovable(true);
        this.droite.body.setAllowGravity(false);

        this.haut = this.physics.add.sprite(0,0,'carre').setOrigin(0,0);
        this.haut.setDisplaySize(800,20);
        this.haut.setImmovable(true);
        this.haut.body.setAllowGravity(false);


    }

    resetScore(){
        this.NewPlayer.score=0
    }

    renvoie(player){
        if(player.x==80){
            this.detect=1
        }

        if(player.x==1180){
            this.detect=0
        }
        /*
        on recupère la position de la balle sur la raquette pour créer un angle de rebond différent selon la raquette
         */
        this.rando=this.Mainball.ball.y-player.y
        this.coeff=this.rando/100
        this.coeff=this.coeff*10-5
        this.Mainball.ball.setVelocityY(this.Mainball.ball.body.velocity.y+this.coeff*50)
        if (this.lock==0) {
            this.Mainball.ball.setVelocityX(this.Mainball.ball.body.velocity.x * 1.05)
        }
    }




    update(){

    }


}