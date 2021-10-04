var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0)  {
    // Alert players that they are starting the round

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight! Goodbye!");
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney);
    break;
    }
}
    
enemyHealth = enemyHealth - playerAttack;
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    
    //check enemy health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
    playerMoney = playerMoney + 20;
    break;
} else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

playerHealth = playerHealth - enemyAttack;
   console.log(
enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    break;
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

// this is the definition for the defined function called enemyName
for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1) );
    }
    else {
        window.alert("You have lose your robot in battle! Game Over!");
        break;
    }
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(enemyNames[i]);
}

//fight();