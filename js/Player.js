class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
    this.rank = 0;
    this.fuel = 185;
    this.life = 185;
    this.score = 0;
    this.boomlifetime = 3.5;
  }

  addPlayer() {
    var playerIndex = "/Corrida De Carros/players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      score: this.score
    });
  }

  getDistance() {
    var playerDistanceRef = database.ref("/Corrida De Carros/players/player" + this.index);
    playerDistanceRef.on("value", data => {
      var data = data.val();
      this.positionX = data.positionX;
      this.positionY = data.positionY;
    });
  }

  getCount() {
    var playerCountRef = database.ref("/Corrida De Carros/playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/Corrida De Carros/").update({
      playerCount: count
    });
  }

  update() {
    var playerIndex = "/Corrida De Carros/players/player" + this.index;
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      score: this.score,
      //att aula c42
      life: this.life
    });
  }

  static getPlayersInfo() {
    var playerInfoRef = database.ref("/Corrida De Carros/players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
  }

  getCarsAtEnd() {
    database.ref("/Corrida De Carros/carsAtEnd").on("value", data => {
      this.rank = data.val();
    });
  }

  static updateCarsAtEnd(rank) {
    database.ref("/Corrida De Carros/").update({
      carsAtEnd: rank
    });
  }
}
