class Tableau1 extends Phaser.Scene{

    preload(){
        this.load.image('carre','assets/carre.png');
        this.load.image('cercle','assets/cercle.png');
    }

    create(){
        this.start=new Start(this);
        start.startGame()
        this.NewPlayer = new Joueur('Jones','NewPlayer',this,500);
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