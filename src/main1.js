let gameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    backgroundColor: '#FFFFF',
    parent: 'game',
    disableWebAudio: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: new Tableau1()

};
let game = new Phaser.Game(gameConfig);