class Brique{
    constructor(x,y,Tableau1){
        this.scene = Tableau1;
        this.brique = this.scene.physics.add.sprite(x, y, 'carre').setOrigin(0.0);
        this.brique.body.setSize(60,30)
        this.brique.setImmovable(true);

        let me = this
        this.scene.physics.add.collider(this.brique, this.scene.Mainball.ball)
    }
}