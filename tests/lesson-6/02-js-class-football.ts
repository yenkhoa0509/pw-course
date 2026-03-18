class Team {
    name: string;
    players: string[];

    constructor(name: string) {
        this.name = name;
        this.players = [];
    }

    addPlayer(player: string) {
        this.players.push(player);
    }

    listPlayers() {
        console.log("Danh sách cầu thủ trong đội", this.name + ":");
        for (let i = 0; i < this.players.length; i++) {
            console.log("- " + this.players[i]);
        }
    }
}
