class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;

    }

    getCount(){
        var playerStateRef = database.ref('playerCount');
        playerStateRef.on("value",function (data){
            playerCount = data.val();
        }) 
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }

    
    update(){
        var playerIndex = "Players/Player"+this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        })
    }

    static getPlayerInfo(){
        var playerInforef = database.ref('Players');
        playerInforef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
    
}
