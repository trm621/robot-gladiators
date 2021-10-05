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
var startGame = function() {

    playerHealth = 100;
    
    playerAttack = 10;
    
    playerMoney = 10;

for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1) );
        
        var pickedEnemyName = enemyNames[i];

        enemyHealth = 50;

        fight(pickedEnemyName[i]);
    }
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}
    var endGame = function() {
        if (playerHealth > 0) {
            window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
        }
        else {
            window.alert("You've lost your robot in battle.");
        }
        window.alert("The game has now ended. Let's see how you did!");
    
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
    }
endGame();
};


// fight()

// start the game when the page loads
startGame();
