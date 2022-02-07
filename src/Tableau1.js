class Tableau1 extends Phaser.Scene{

    preload(){
        this.load.image('carre','assets/carre.png');
        this.load.image('cercle','assets/cercle.png');
    }

    create(){
        this.Xvitesse = 35;
        this.NewPlayer = this.physics.add.sprite(300,700,'carre').setOrigin(0.0);
        this.NewPlayer.setDisplaySize(200,20);
        this.NewPlayer.setImmovable(true);
        this.NewPlayer.body.setAllowGravity(false);


        this.Mainball = this.physics.add.sprite(380,650,'cercle').setOrigin(0.0);

        this.Mainball.setDisplaySize(20,20);
        this.Mainball.body.setAllowGravity(false);
        this.Mainball.setVelocityY(400)
        this.Mainball.setBounce(1,1)

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

        let me = this;

        this.physics.add.collider(this.NewPlayer, this.Mainball,function(){
            //console.log('touche player 1')
            me.rebond()
        })

        this.physics.add.collider(this.Mainball, this.gauche)
        this.physics.add.collider(this.Mainball, this.droite)
        this.physics.add.collider(this.Mainball, this.haut)
        this.initKeyboard()




        for(let i=0;i<9;i++){
            let brique = this.physics.add.sprite(i*61, 200, "carre").setDisplaySize(60,30).setOrigin(-2,0)
            brique.setImmovable(true)
            brique.body.setAllowGravity(false)
            this.physics.add.collider(this.Mainball, brique,function(){
                brique.destroy()
            })
        }

        for(let i=0;i<9;i++){
            let brique = this.physics.add.sprite(i*61, 231, "carre").setDisplaySize(60,30).setOrigin(-2,0)
            brique.setImmovable(true)
            brique.body.setAllowGravity(false)
            this.physics.add.collider(this.Mainball, brique,function(){
                brique.destroy()
            })
        }

        for(let i=0;i<9;i++){
            let brique = this.physics.add.sprite(i*61, 262, "carre").setDisplaySize(60,30).setOrigin(-2,0)
            brique.setImmovable(true)
            brique.body.setAllowGravity(false)
            this.physics.add.collider(this.Mainball, brique,function(){
                brique.destroy()
            })
        }

        for(let i=0;i<9;i++){
            let brique = this.physics.add.sprite(i*61, 293, "carre").setDisplaySize(60,30).setOrigin(-2,0)
            brique.setImmovable(true)
            brique.body.setAllowGravity(false)
            this.physics.add.collider(this.Mainball, brique,function(){
                brique.destroy()
            })
        }

        for(let i=0;i<9;i++){
            let brique = this.physics.add.sprite(i*61, 324, "carre").setDisplaySize(60,30).setOrigin(-2,0)
            brique.setImmovable(true)
            brique.body.setAllowGravity(false)
            this.physics.add.collider(this.Mainball, brique,function(){
                brique.destroy()
            })
        }



    }



    renvoie(){

        /*
        on recupère la position de la balle sur la raquette pour créer un angle de rebond différent selon la raquette
         */


        this.rando=this.Mainball.x-this.NewPlayer.x
        this.coeff=this.rando/100
        this.coeff=this.coeff*10-5
        this.Mainball.setVelocityX(this.Mainball.body.velocity.x+this.coeff*50)
    }

    rebond(){

        let hauteurPlayers = this.NewPlayer.displayWidth;

        let positionRelativePlayers = (this.Mainball.x - this.NewPlayer.x);

        positionRelativePlayers= (positionRelativePlayers / hauteurPlayers)
        positionRelativePlayers = positionRelativePlayers*2-1;

        this.Mainball.setVelocityX(this.Mainball.body.velocity.x + positionRelativePlayers * 200);

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

    initKeyboard(){
        let me = this
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.NewPlayer.x = me.NewPlayer.x + me.Xvitesse
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.NewPlayer.x = me.NewPlayer.x - me.Xvitesse
                    break;

                case Phaser.Input.Keyboard.KeyCodes.SPACE:
                    me.Mainball.velocityY = -200
                    break;

            }
        });

        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.NewPlayer.x = me.NewPlayer.x
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.NewPlayer.x = me.NewPlayer.x
                    break;
            }
        });
    }


    update(){

    }


}