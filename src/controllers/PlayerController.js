const Player = require('../models/Player');

module.exports = {
    create(request, response) {
        const player = request.body;

        Player.newPlayer(player).then((createdPlayer) => {
            return response.send({createdPlayer});
        }).catch((error) => {
            console.log(error);
        });
    },

    index(request, response){
        Player.getAllPlayers().then((allPlayers) =>{
            return response.send({allPlayers});
        }).catch((error)=> {
            console.log(error);
        });
    },

    update(request, response){
        const playerName = request.params.name;
        const playerNewData = request.body;

        Player.updatePlayer(playerName, playerNewData).then(()=>{
            return response.send({message: "Player atualizado com sucesso!"});
        }).catch((error) => {
            console.log(error);
        });
    },

    delete(request, response) {
        const playerName = request.params.name;

        Player.deletePlayer(playerName).then(() => {
            return response.send({message: "Player apagado com sucesso!"});
        }).catch((error) => {
            console.log(error);
        });
    },


}