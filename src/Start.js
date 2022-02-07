class Start{
    constructor(Tableau1){
        this.scene = Tableau1;

    }

    startGame(){
        this.Wscreen = 800;
        this.Hscreen = 800;
        this.controle = new Controle(this) //initialisation des contrôles des joueurs en appellant le constructeur de la classe controle

        this.NewPlayer = new Joueur('Joueur 1',this,800);
        this.Mainball = new Ball(this)
        this.brique= new Brique(100,100,this)


    }
}