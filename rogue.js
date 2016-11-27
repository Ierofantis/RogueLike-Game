var html = "<table class='table'><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>";
var i;
var cell = document.getElementById("wrapper").getElementsByTagName("td");
var list = [];
var board = [];
var counter = 0;
for (i = 0; i < 11; i++) {
  $("#wrapper").append(html);
}
var enemyMov = [];
var heroPos = [];
var SecretDoor=[88];
var _enemyMov = [4, 11, 12, 15, 35, 24, 56, 67, 89, 23, 99, 22]
var _enemyPos = [15, 25, 40, 60, 80, 87, 120];
var _healthPos = [18, 29, 66, 80, 90, 110];

var hero = {
  color: "#557a4c",
  power: 5,
  health: 5,
  position: 0
}

var enemy = {
  color: "red",
  power: 1,
  health: 1,
  position: _enemyPos
}

var items = {
  color: "green",
  power: 1,
  health: 1,
  position: _healthPos
}
function toggleD(){
   document.body.style.backgroundColor="lightblue";    
}

function toggleL(){ 
   document.body.style.backgroundColor="black";   
}
function start() {
  for (i = 0; i < _enemyPos.length; i++) {
    cell[_enemyPos[i]].style.backgroundColor = enemy.color;
  }

  for (i = 0; i < _healthPos.length; i++) {
    cell[_healthPos[i]].style.backgroundColor = items.color;
  }
  var heroPos = cell[hero.position].style.backgroundColor = hero.color;
  hero.power = 5,
  hero.health = 5
}

start()

document.onkeydown = function(e) {

  for (i = 0; i < _enemyPos.length; i++) {
    if (hero.position === _enemyPos[i]) {
      hero.health--;
      document.getElementById("health").innerHTML = "Your Health is"+"&nbsp" + hero.health +"";
    }
    if (hero.health === 0) {
      alert("You are Dead");
      start()
    }
  }

  for (i = 0; i < _enemyPos.length; i++) {
    if (hero.position === _healthPos[i]) {
      if (hero.position === _healthPos[i]) {
        hero.health++;
        document.getElementById("health").innerHTML = "Your Health is"+"&nbsp" + hero.health +"";
      }
    }
  }

  if (e.keyCode === 37) {
    cell[hero.position -= 1].style.backgroundColor = hero.color;
    cell[hero.position + 1].style.backgroundColor = "lightblue";
  }
  if (e.keyCode === 38) {
    cell[hero.position -= 12].style.backgroundColor = hero.color;
    cell[hero.position + 12].style.backgroundColor = "lightblue";
  }
  if (e.keyCode === 39) {
    cell[hero.position += 1].style.backgroundColor = hero.color;
    cell[hero.position - 1].style.backgroundColor = "lightblue";
  }
  if (e.keyCode === 40) {
    cell[hero.position += 12].style.backgroundColor = hero.color;
    cell[hero.position - 12].style.backgroundColor = "lightblue";
  }
};