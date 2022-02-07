class Tableau1 extends Phaser.Scene{

    preload(){
        this.load.image('carre','assets/carre.png');
        this.load.image('cercle','assets/cercle.png');

    }

    create(){
        this.start=new Start(this);
        start.startGame()
    }

    resetScore(){
        this.NewPlayer.score=0
    }



    update(){

    }


}