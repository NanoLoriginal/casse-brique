class Start{
    constructor(Tableau1){
        this.scene = Tableau1;

    }
    startGame(){
        this.Wscreen = 1280;
        this.Hscreen = 720;
        this.controle = new Controle(this) //initialisation des contrôles des joueurs en appellant le constructeur de la classe controle

        this.NewPlayer = new Joueur('Joueur 1',this,800);


    }
}