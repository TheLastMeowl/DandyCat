/**** WELCOME! *********************************************/
/**
 * Program your Bot to defeat a series of opponents! 
 * 
 * Game Summary:
 *  - Every .5 seconds, each Bot is able to make a
 * movement if they are touching the ground. Each movement expends 
 * a certain amount of energy when made, defined by the code running
 * the Bot. Higher energy used == bigger movement. A movement is either 
 * a jump or a dash. Bots gain a point when they jump on top of another
 * Bot or when their opponent Bot runs out of energy. For each round, 
 * the first Bot to 3 points wins!
 * 
 * Use the "Activity Documentation" button to read more about 
 * all the different ways you can control your bot
 * 
 * ----------------------------------------------------------
 * After making a change: save this file, then press the refresh
 * button above the game window!
 * ----------------------------------------------------------
 */

var myBot = this; // More readable/easier access
var opponent = this.opponent; // More readable/easier access


/**************** Start Modifying Here! *********************/

myBot.setName('My Bot');
myBot.setColor(0x992222);
myBot.makeMove = function() {
  /*
    * Scene Width: 800
    * Scene Height: 480
    */
   if (myBot.distanceFrom(opponent) > 300) {
    myBot.dashToward(opponent, 5);
  }
  else if (myBot.distanceFrom(opponent) > 150 && opponent.isAlive() && !myBot.isBelow(opponent)) {
    myBot.jumpToward(opponent, 11);
  }
  else if (opponent.isMovingDown() && opponent.isMovingToward(this) && opponent.isAlive() && myBot.getX() > 740)
  {
    myBot.dashLeft(6)
  }
  else if (opponent.isMovingDown() && opponent.isMovingToward(this) && opponent.isAlive() && myBot.getX() < 60)
  {
    myBot.dashRight(6)
  }
  else if (opponent.isMovingDown() && opponent.isMovingToward(this) && && opponent.isAlive() && myBot.xDistanceFrom(opponent) < 110)
  {
    myBot.dashAway(opponent,7)
  }
  else if (!opponent.isAlive() && myBot.xDistanceFrom(opponent) < 200 && myBot.yDistanceFrom(opponent) < 150)
  {
    myBot.dashAway(opponent,7)
  }

  else {
  }
};




/**** GOODBYE! ************************************************/
