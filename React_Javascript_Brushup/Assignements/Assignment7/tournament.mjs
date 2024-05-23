/* B] Create file tournament.mjs
import class CricketPlayer from module cricket_player
Create 5 objects of CricketPlayer class and print all the details of each object Invoke play function which returns string value as per playerType
For example:
If playerType is batsman, then function play should return "Batting"
If playerType is fielder, then function play should return "Fielding" and so on NOTE: playerType can be one of below types
batsman, bowler, fielder, wicketkeeper or allRounder */

import CricketPlayer from "./cricket_player.mjs";

const players = [
  new CricketPlayer(1, "batsman", "Sachin Tendulkar", 50),
  new CricketPlayer(2, "fielder", "Yuvraj Singh", 45),
  new CricketPlayer(3, "batsman", "Virat Kohli", 36),
  new CricketPlayer(4, "wicketkeeper", "M. S. Dhoni", 42),
  new CricketPlayer(5, "bowler", "Jasprit Bumrah", 32),
];

for (let i = 0; i < players.length; i++) {
  players[i].print();
  console.log(`Player is ${players[i].play()}`);
  console.log("-------------------------------------------------------------------")
}
