var board=[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];
//console.log(board);
const player1_Button = document.getElementById('player-1');
const player2_Button = document.getElementById('player-2');

class Player{
    constructor(name,position,money){
        this.name=name;
        this.position=position;
        this.money=money;
    }
    rollDice(){
        let pos = Math.floor.length(Math.random()*6) + 1;
        console.log(pos);
        this.updatePosition(pos);
    }
    updatPosition(pos){
        this.position+=pos;
        console(this.position);
        this.updateMoney();
    }
        updateMoney(){
            if(this.position<board.length)
            this.money-=board(this.position);
            else{
            this.position%= 15;
            this.money-=board(this.position);
            }
            console.log(player1);
            console.log(player2);
        }
    
}

let player1= new Player("Shravya",0,1000);
let player2= new Player("Nikitha",0,1000);
player1_Button.addEventListener('click',function(){
    player1.roll_Dice();
},false);

player2_Button.addEventListener('click',function(){
    player2.roll_Dice();
},false);