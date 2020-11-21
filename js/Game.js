class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }
  play(){
    form.hide();
    text("Game Start",120,100);
    Player.getPlayerInfo();
      var displayPos = 130;
      
    if(allPlayers!==undefined){
      for(var plr in allPlayers){
        console.log(player.index)
          if(plr==="player" + player.index){
              fill("red"); 
              
          }
            else{
              fill("black")
            }
        displayPos = displayPos + 20;
        textSize(15);
        text(allPlayers[plr].name + "-" + allPlayers[plr].distance,120,displayPos);
      }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
          player.distance = player.distance + 50;
          player.update();     
        }
    }
  }

  async start(){
      if(gameState===0){
        player = new Player();
        var playerCountRef = await database.ref("playerCount").once("value");
        if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
        }
          form = new Form();
          form.display();
      }
  }
  

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
/*
  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  */
}

