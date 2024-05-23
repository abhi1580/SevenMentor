class CricketPlayer {
  constructor(playedId, playerType, name, age) {
    this.playedId = playedId;
    this.playerType = playerType;
    this.name = name;
    this.age = age;
  }

  play() {
    switch (this.playerType) {
      case "batsman":
        return "Batting";
      case "bowler":
        return "Bowling";
      case "fielder":
        return "Fielding";
      case "wicketkeeper":
        return "Wicketkeeping";
      case "allRounder":
        return "All-round";
      default:
        return "Unknown";
    }
  }

  print() {
    console.log(
      `Player ID: ${this.playedId}, Name: ${this.name}, Age: ${this.age}, Player Type: ${this.playerType}`
    );
  }
}

export default CricketPlayer;
