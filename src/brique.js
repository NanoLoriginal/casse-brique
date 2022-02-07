class Brique{
    constructor(x,y,type,Tableau1){
        this.scene = Tableau1;
        this.briqueType = type;
        this.brique=this.scene.physics.add.sprite(x,y,'carre').setOrigin(0.0)
        this.brique.body.setSize(60,30)
        this.brique.setImmovable(true)

    }



}