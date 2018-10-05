// globals
var finalDex = 0;
var finalCon = 0;
var finalInt = 0;
var finalStr = 0;

// Race and Class stat displays
function raceClass() {
  var x = document.getElementById("stats");
  var race = x.elements[0].value;
  var charClass = x.elements[1].value;
  var dexterity = x.elements[2].value;
  var constitution = x.elements[3].value;
  var intelligence = x.elements[4].value;
  var strength = x.elements[5].value;

  // races
  if (race === "Human") {
    document.getElementById("raceDex").innerHTML = 2;
    document.getElementById("raceCon").innerHTML = 2;
    document.getElementById("raceInt").innerHTML = 2;
    document.getElementById("raceStr").innerHTML = 2;
  }
  else if (race === "Elf") {
    document.getElementById("raceDex").innerHTML = 3;
    document.getElementById("raceCon").innerHTML = 1;
    document.getElementById("raceInt").innerHTML = 3;
    document.getElementById("raceStr").innerHTML = 1;
  }
  else if (race === "Dwarf") {
    document.getElementById("raceDex").innerHTML = 0;
    document.getElementById("raceCon").innerHTML = 4;
    document.getElementById("raceInt").innerHTML = 1;
    document.getElementById("raceStr").innerHTML = 3;
  }
  else if (race === "Halfling") {
    document.getElementById("raceDex").innerHTML = 4;
    document.getElementById("raceCon").innerHTML = 1;
    document.getElementById("raceInt").innerHTML = 2;
    document.getElementById("raceStr").innerHTML = 1;
  }
  else if (race === "Half-Orc") {
    document.getElementById("raceDex").innerHTML = 1;
    document.getElementById("raceCon").innerHTML = 2;
    document.getElementById("raceInt").innerHTML = 1;
    document.getElementById("raceStr").innerHTML = 4;
  }
  else if (race === "Dragonborn") {
    document.getElementById("raceDex").innerHTML = 1;
    document.getElementById("raceCon").innerHTML = 1;
    document.getElementById("raceInt").innerHTML = 3;
    document.getElementById("raceStr").innerHTML = 3;
  }
  else if (race === "Gnome") {
    document.getElementById("raceDex").innerHTML = 3;
    document.getElementById("raceCon").innerHTML = 1;
    document.getElementById("raceInt").innerHTML = 4;
    document.getElementById("raceStr").innerHTML = 0;
  }
  else {
    document.getElementById("raceDex").innerHTML = 0;
    document.getElementById("raceCon").innerHTML = 0;
    document.getElementById("raceInt").innerHTML = 0;
    document.getElementById("raceStr").innerHTML = 0;
  }

  // classes
  if (charClass === "Fighter") {
    document.getElementById("classDex").innerHTML = 1;
    document.getElementById("classCon").innerHTML = 1;
    document.getElementById("classInt").innerHTML = 0;
    document.getElementById("classStr").innerHTML = 2;
  }
  else if (charClass === "Barbarian") {
    document.getElementById("classDex").innerHTML = 0;
    document.getElementById("classCon").innerHTML = 1;
    document.getElementById("classInt").innerHTML = 0;
    document.getElementById("classStr").innerHTML = 3;
  }
  else if (charClass === "Cleric") {
    document.getElementById("classDex").innerHTML = 0;
    document.getElementById("classCon").innerHTML = 1;
    document.getElementById("classInt").innerHTML = 3;
    document.getElementById("classStr").innerHTML = 0;
  }
  else if (charClass === "Conjurer") {
    document.getElementById("classDex").innerHTML = 0;
    document.getElementById("classCon").innerHTML = 1;
    document.getElementById("classInt").innerHTML = 3;
    document.getElementById("classStr").innerHTML = 0;
  }
  else if (charClass === "Sorceror") {
    document.getElementById("classDex").innerHTML = 0;
    document.getElementById("classCon").innerHTML = 1;
    document.getElementById("classInt").innerHTML = 3;
    document.getElementById("classStr").innerHTML = 0;
  }
  else if (charClass === "Rogue") {
    document.getElementById("classDex").innerHTML = 3;
    document.getElementById("classCon").innerHTML = 0;
    document.getElementById("classInt").innerHTML = 0;
    document.getElementById("classStr").innerHTML = 1;
  }
  else if (charClass === "Ranger") {
    document.getElementById("classDex").innerHTML = 2;
    document.getElementById("classCon").innerHTML = 0;
    document.getElementById("classInt").innerHTML = 0;
    document.getElementById("classStr").innerHTML = 2;
  }
  else if (charClass === "Paladin") {
    document.getElementById("classDex").innerHTML = 0;
    document.getElementById("classCon").innerHTML = 0;
    document.getElementById("classInt").innerHTML = 2;
    document.getElementById("classStr").innerHTML = 2;
  }
  else {
    document.getElementById("classDex").innerHTML = 0;
    document.getElementById("classCon").innerHTML = 0;
    document.getElementById("classInt").innerHTML = 0;
    document.getElementById("classStr").innerHTML = 0;
  }

  finalDex = Number(document.getElementById("raceDex").innerHTML) +
    Number(document.getElementById("classDex").innerHTML) + Number(dexterity);
  finalCon = Number(document.getElementById("raceCon").innerHTML) +
    Number(document.getElementById("classCon").innerHTML) + Number(constitution);
  finalInt = Number(document.getElementById("raceInt").innerHTML) +
    Number(document.getElementById("classInt").innerHTML) + Number(intelligence);
  finalStr = Number(document.getElementById("raceStr").innerHTML) +
    Number(document.getElementById("classStr").innerHTML) + Number(strength);

    document.getElementById("finalDex").innerHTML = finalDex;
    document.getElementById("finalCon").innerHTML = finalCon;
    document.getElementById("finalInt").innerHTML = finalInt;
    document.getElementById("finalStr").innerHTML = finalStr;
}



// stat calculations
function stats() {
  var x = document.getElementById("stats");
  var dexterity = finalDex;
  var constitution = finalCon;
  var intelligence = finalInt;
  var strength = finalStr;
  var weapon = x.elements[6].value;

  var health = 10 + Math.floor(1.5 * constitution);
  var armorClass = 10 + Math.floor(dexterity/5 + constitution/4);
  var speed = 4 + Math.floor(dexterity/10);
  var sneak = -4 + Math.floor(dexterity/3);
  var athletics = -4 + Math.floor(dexterity/8 + strength/4);
  var finesse = -4 + Math.floor(dexterity/4 + intelligence/7);
  var charisma = -3 + Math.floor(intelligence/4);
  var perception = -4 + Math.floor(intelligence/3 + dexterity/10);
  var mana = -1 + Math.floor((intelligence-1)/2);
  var manaPool;
  if (mana < 1){
    manaPool = 0;
  }
  else if (mana < 2){
    manaPool = 1;
  }
  else if (mana < 3){
    manaPool = 2;
  }
  else if (mana < 4){
    manaPool = 3;
  }
  else if (mana < 5){
    manaPool = 4;
  }
  else if (mana < 6){
    manaPool = 5;
  }
  else if (mana < 8){
    manaPool = 6;
  }
  else if (mana < 10){
    manaPool = 7;
  }
  else if (mana < 12){
    manaPool = 8;
  }
  else if (mana < 15){
    manaPool = 9;
  }
  else {
    manaPool = 10;
  }
  var will = -4 + Math.floor(intelligence/3 + constitution/9);
  var fortitude = -4 + Math.floor(constitution/4 + strength/8);
  var endDamage = combatNumbers(strength, dexterity);

  // -------------    MAIN WEAPONS FUNCTION    ----------------

  function combatNumbers(strength, dexterity) {
    var intStr = Number(strength);
    var intDex = Number(dexterity);
    var hitRoll1 = 0;
    var hitRoll2 = -100;
    var damageRoll;
    var damageRollDiceNum;
    var damageRollDice;
    var damageRollBonus;
    var damageString;

    if ((weapon === "Sword") || (weapon === "Axe") || (weapon === "Spear")
				|| (weapon === "Mace") || (weapon === "Hammer")) {
			hitRoll1 = -4 + Math.floor(intStr/4 + intDex/3);
			damageRoll = damageRollBig(intStr);
		}
		else if ((weapon === "Dagger") || (weapon === "Knife")) {
			hitRoll1 = -2 + Math.floor(intStr/4 + intDex/3);
			damageRoll = damageRollSmall(intStr + intDex/3);
		}
		else if (weapon === "Staff") {
			hitRoll1 = -1 + Math.floor(intStr/5 + intDex/3);
			damageRoll = damageRollMedium(intStr);
		}
		else if (weapon === "Bow") {
			hitRoll1 = -4 + Math.floor(intStr/6 + intDex/3);
			damageRoll = damageRollMedium(intStr/2 + intDex/3);
		}
		else if (weapon === "Crossbow") {
			hitRoll1 = -1 + Math.floor(intStr/3);
			damageRoll = damageRollBig(intStr);
		}
		else if (weapon === "Dual Daggers") {
			hitRoll1 = -7 + Math.floor(intStr/5 + intDex/3);
			hitRoll2 = -7 + Math.floor(intStr/5 + intDex/4);
			damageRoll = damageRollSmall(intStr + intDex/3);
		}
		else {
      damageString = "Unnaccounted for weapon";
      return damageString;
		}
		
		if (hitRoll2 == -100) {
			damageString = "\nHit: " + hitRoll1 + "<br/>Damage: " + damageRoll;
		}
		else {
			damageString = "\nHit: " + hitRoll1 + " / " + hitRoll2 + "<br/>Damage: " + damageRoll;
		}
		return damageString;

    // ------------ BIG DAMAGE --------------
    function damageRollBig(intStr) {
      damageRollNum = Number(intStr);
      damageRollDiceNum = Math.floor(damageRollNum / 6);
      switch (damageRollDiceNum) {
      case 0:  damageRollDice = "d4";
      alter = 0;
      break;
      
      case 1:  damageRollDice = "d6";
      alter = 1;
      break;
      
      case 2:  damageRollDice = "d8";
      alter = 2;
      break;
      
      case 3:  damageRollDice = "2d6";
      alter = 2;
      break;
      
      case 4: damageRollDice = "3d6";
      alter = 1;
      break;
      
      default: damageRollDice = "4d6";
      alter = 0;
      break;
      }
      
      damageRollBonus = Math.floor((damageRollNum % 6 - 1)/2) + alter;
      
      if (damageRollBonus >= 0) { 
        damageRoll = damageRollDice + " + " + damageRollBonus;
      }
      else {
        damageRoll = damageRollDice + " - " + (damageRollBonus * -1);
      }
      
      return damageRoll;
    }
    
    // -------------  MEDIUM DAMAGE  --------------
    function damageRollMedium(intStr) {
      damageRollNum = Number(intStr);
      damageRollDiceNum = Math.floor(damageRollNum / 7);
      switch (damageRollDiceNum) {
      case 0:  damageRollDice = "d4";
      alter = 0;
      break;
      
      case 1:  damageRollDice = "d6";
      alter = 1;
      break;
      
      case 2:  damageRollDice = "d8";
      alter = 2;
      break;
      
      case 3:  damageRollDice = "2d6";
      alter = 2;
      break;
      
      case 4: damageRollDice = "3d6";
      alter = 1;
      break;
      
      default: damageRollDice = "4d6";
      alter = 0;
      break;
      }
      
      damageRollBonus = Math.floor((damageRollNum % 7 - 1)/2) + alter;
      
      if (damageRollBonus >= 0) { 
        damageRoll = damageRollDice + " + " + damageRollBonus;
      }
      else {
        damageRoll = damageRollDice + " - " + (damageRollBonus * -1);
      }
      
      return damageRoll;
    }
    
    // -------------  SMALL DAMAGE  ---------------------
    function damageRollSmall(intStr) {
      damageRollNum = Number(intStr);
      damageRollDiceNum = Math.floor(damageRollNum / 7);
      switch (damageRollDiceNum) {
      case 0:  damageRollDice = "d4";
      alter = 0;
      break;
      
      case 1:  damageRollDice = "d6";
      alter = 1;
      break;
      
      case 2:  damageRollDice = "d8";
      alter = 2;
      break;
      
      case 3:  damageRollDice = "2d6";
      alter = 2;
      break;
      
      case 4: damageRollDice = "3d6";
      alter = 1;
      break;
      
      default: damageRollDice = "4d6";
      alter = 0;
      break;
      }
      
      damageRollBonus = Math.floor((damageRollNum % 7 - 1)/2) + alter - 1;
      
      if (damageRollBonus >= 0) { 
        damageRoll = damageRollDice + " + " + damageRollBonus;
      }
      else {
        damageRoll = damageRollDice + " - " + (damageRollBonus * -1);
      }
      
      return damageRoll;
    }
  }

  // final display
  document.getElementById("statSheet").innerHTML =
  "Weapon: " + weapon + "<br/>" +
  "Dexterity: " + dexterity + "<br/>" + 
  "Constitution: " + constitution + "<br/>" +
  "Intelligence: " + intelligence + "<br/>" +
  "Strength: " + strength + "<br/><br/>" + 
  "Health: " + health + "<br/>" + 
  "Armor Class: " + armorClass + "<br/>" + 
  "Speed: " + speed + "<br/>" + 
  "Sneak: " + sneak + "<br/>" + 
  "Athletics: " + athletics + "<br/>" + 
  "Finesse: " + finesse + "<br/>" + 
  "Charisma: " + charisma + "<br/>" + 
  "Perception: " + perception + "<br/>" + 
  "Mana: " + manaPool + "<br/>" + 
  "Will: " + will + "<br/>" + 
  "Fortitude: " + fortitude + "<br/>" + 
  endDamage;
  ;
}

// ---------------------------- SPELLS ---------------------------------
function spells() {
	var x = document.getElementById("spells");
	var level = Number(x.elements[0].value);
	var intelligence = Number(x.elements[1].value);
	detectMagic();
  resistEvil();
  heal();
  bestowLuck();
  bless();
  holyArmor();
  cleanse();
  dispelMagic();
  smite();
  daze();
  necrotize();
  groupHeal();
  flamingWeapon();
  orbOfLight();
  dullSenses();
  grease();
  ensnare();
  bendNature();
  charm();
  spectralFist();
  createPortal();
  insectSwarm();
  protectiveBarrier();
  illusion();
  alterMemory();
  magicMissile();
  fireball();
  gust();
  wallOfFlames();
  blight();
  coneOfCold();
  dragonsBreath();
  chainLightning();
	
	function detectMagic() {
		var bonus = -3 + Math.floor(level/5 + intelligence/5);
		if (bonus < 0) {
			document.getElementById("detectMagic").innerHTML = "d20 - " + (-bonus);
		}
		else {
		  document.getElementById("detectMagic").innerHTML = "d20 + " + bonus;
		}
  }
  
	function resistEvil() {
		var hitBonus = 1 + Math.floor(level/3 + intelligence/10);
		var damageBonus = 1 + Math.floor(level + intelligence/8);
    document.getElementById("resistEvil").innerHTML = "Hit/Checks: +" + hitBonus +
      "<br/>Damage: +" + damageBonus;
  }

  function heal() {
    var dice;
    var bonus;
    var alter;
    var diceNum = Math.floor((level + intelligence)/8);
    switch (diceNum) {
      case 0: dice = "d4";
      alter = 0;
      break;

      case 1: dice = "d6";
      alter = 2;
      break;
      
      case 2: dice = "d8";
      alter = 4;
      break;

      case 3: dice = "d10";
      alter = 6;
      break;

      case 4: dice = "2d6";
      alter = 8;
      break;
      
      default: dice = "3d6";
      alter = 8;
      break;
    }
    bonus = Math.floor(((level + intelligence)%8)/3) + alter;
  
    document.getElementById("heal").innerHTML = dice + " + " + bonus;
  }

  function bestowLuck() {
    var bonus = Math.floor(level/5 + intelligence/6);
		var duration = 1 + Math.floor(level/5 + intelligence/10);
    document.getElementById("bestowLuck").innerHTML = "Bonus: +" + bonus +
      "<br/>Duration: " + duration + " hours";
  }

  function bless() {
    var bonus = 1 + Math.floor(level/7 + intelligence/12);
    document.getElementById("bless").innerHTML = "+" + bonus;
  }

  function holyArmor() {
    var bonus = 1 + Math.floor(level/5 + intelligence/6);
    document.getElementById("holyArmor").innerHTML = "+" + bonus;
  }

  function cleanse() {
		var bonus = -3 + Math.floor(level/6 + intelligence/5);
		if (bonus < 0) {
			document.getElementById("cleanse").innerHTML = "d20 - " + (-bonus);
		}
		else {
		  document.getElementById("cleanse").innerHTML = "d20 + " + bonus;
    }
  }

  function dispelMagic() {
    var bonus = -4 + Math.floor(level/6 + intelligence/6);
    if (bonus < 0) {
      document.getElementById("dispelMagic").innerHTML = "d20 - " + (-bonus);
    }
    else {
      document.getElementById("dispelMagic").innerHTML = "d20 + " + bonus;
    }
  }

  function smite() {
    var dice;
    var bonus;
    var alter;
    var diceNum = Math.floor(intelligence/6);
    switch (diceNum) {
      case 0: dice = "d4";
      alter = 0;
      break;

      case 1: dice = "d6";
      alter = 1;
      break;
      
      case 2: dice = "d8";
      alter = 2;
      break;

      case 3: dice = "d10";
      alter = 3;
      break;

      case 4: dice = "2d6";
      alter = 4;
      break;
      
      default: dice = "3d6";
      alter = 3;
      break;
    }
    bonus = Math.floor((intelligence%6)/2) + alter;
   
    document.getElementById("smite").innerHTML = dice + " + " + bonus;
  }

  function daze() {
    var dc = 10 + Math.floor(level/10 + intelligence/5);
	  var penalty = Math.floor(level/8 +intelligence/5);
    document.getElementById("daze").innerHTML = "DC: " + dc + "<br/>Penalty: -" + penalty;
  }
  
  function necrotize() {
    var dc = 10 + Math.floor(level/6 + intelligence/5);
    var dice;
    var bonus;
    var alter;
    var diceNum = Math.floor((level + intelligence)/9);
    switch (diceNum) {
      case 0: dice = "d4";
      alter = -1;
      break;

      case 1: dice = "d6";
      alter = 0;
      break;
      
      case 2: dice = "d8";
      alter = 1;
      break;

      case 3: dice = "d10";
      alter = 2;
      break;

      case 4: dice = "2d6";
      alter = 3;
      break;
      
      default: dice = "3d6";
      alter = 2;
      break;
    }
    bonus = Math.floor(((level + intelligence)%9)/3) + alter;
    
    if (bonus < 0) {
			document.getElementById("necrotize").innerHTML = "DC: " + dc + "<br/>" + dice + " - " + -bonus;
		}
		else {
      document.getElementById("necrotize").innerHTML = "DC: " + dc + "<br/>" + dice + " + " + bonus;
    }
  }

  function groupHeal() {
    var dice;
    var bonus;
    var alter;
    var diceNum = Math.floor((level + intelligence)/12);
    switch (diceNum) {
      case 0: dice = "d4";
      alter = 0;
      break;

      case 1: dice = "d6";
      alter = 2;
      break;
      
      case 2: dice = "d8";
      alter = 4;
      break;

      case 3: dice = "d10";
      alter = 6;
      break;

      case 4: dice = "2d6";
      alter = 8;
      break;
      
      default: dice = "3d6";
      alter = 8;
      break;
    }
    bonus = Math.floor(((level + intelligence)%12)/4) + alter;
  
    document.getElementById("groupHeal").innerHTML = dice + " + " + bonus;
  }
  
  function flamingWeapon() {
		var bonus = Math.floor(level/4 + intelligence/5);
		  document.getElementById("flamingWeapon").innerHTML = "+" + bonus;
  }
  
  function orbOfLight() {
    var dc = 6 + Math.floor(level/3 + intelligence/6);
    document.getElementById("orbOfLight").innerHTML = "DC: " + dc;
  }
  
  function dullSenses() {
    var dc = 9 + Math.floor(level/4 + intelligence/5);
    var penalty = Math.floor(level/4 +intelligence/5);
    document.getElementById("dullSenses").innerHTML = "DC: " + dc + "<br/>Penalty: -" + penalty;
  }
  
  function grease() {
    var dc = 7 + Math.floor(level/5 + intelligence/6);
    document.getElementById("grease").innerHTML = "DC: " + dc;
  }
  
  function ensnare() {
    var dc = 6 + Math.floor(level/5 + intelligence/6);
    document.getElementById("ensnare").innerHTML = "DC: " + dc;
  }
  
  function bendNature() {
    var bonus = -5 + Math.floor(level/5 + intelligence/5);
    if (bonus < 0) {
      document.getElementById("bendNature").innerHTML = "d20 - " + (-bonus);
    }
    else {
      document.getElementById("bendNature").innerHTML = "d20 + " + bonus;
    }
  }
  
  function charm() {
    var dc = 8 + Math.floor(level/8 + intelligence/5);
    document.getElementById("charm").innerHTML = "DC: " + dc;
  }

  function spectralFist() {
    var health = 7 + Math.floor(level/10 + intelligence/3);
    var dice;
    var bonus;
    var alter;
    var diceNum = Math.floor((level + intelligence)/9);
    switch (diceNum) {
      case 0: dice = "d4";
      alter = -1;
      break;

      case 1: dice = "d6";
      alter = 0;
      break;
      
      case 2: dice = "d8";
      alter = 1;
      break;

      case 3: dice = "d10";
      alter = 2;
      break;

      case 4: dice = "2d6";
      alter = 3;
      break;
      
      default: dice = "3d6";
      alter = 2;
      break;
    }
    bonus = Math.floor(((level + intelligence)%9)/3) + alter;
    
    if (bonus < 0) {
			document.getElementById("spectralFist").innerHTML = "Health: " + health + "<br/>" + dice + " - " + -bonus;
		}
		else {
      document.getElementById("spectralFist").innerHTML = "Health: " + health + "<br/>" + dice + " + " + bonus;
    }
  }

  function createPortal() {
    var size = Math.floor(level/5 + intelligence/8);
    var distance = Math.floor(level/5 + intelligence/4) * 5;
    document.getElementById("createPortal").innerHTML = "Size: " + size +
      " feet<br/>Distance: " + distance + " feet";
  }

  function insectSwarm() {
    var dc = 9 + Math.floor(level/7 + intelligence/5);
    var dice;
    var bonus;
    var alter;
    var diceNum = Math.floor((level + intelligence)/12);
    switch (diceNum) {
      case 0: dice = "d4";
      alter = 0;
      break;

      case 1: dice = "d6";
      alter = 1;
      break;
      
      case 2: dice = "d8";
      alter = 2;
      break;

      case 3: dice = "d10";
      alter = 3;
      break;

      case 4: dice = "2d6";
      alter = 4;
      break;
      
      default: dice = "3d6";
      alter = 3;
      break;
    }
    bonus = Math.floor(((level + intelligence)%12)/4) + alter;
    
    if (bonus < 0) {
			document.getElementById("insectSwarm").innerHTML = "DC: " + dc + "<br/>" + dice + " - " + -bonus;
		}
		else {
      document.getElementById("insectSwarm").innerHTML = "DC: " + dc + "<br/>" + dice + " + " + bonus;
    }
  }

  function protectiveBarrier() {
    var health = 10 + Math.floor(level/10 + intelligence/2);
    document.getElementById("protectiveBarrier").innerHTML = "Health: " + health;
  }

  function illusion() {
    var bonus = -6 + Math.floor(level/10 + intelligence/3);
    if (bonus < 0) {
      document.getElementById("illusion").innerHTML = "d20 - " + (-bonus);
    }
    else {
      document.getElementById("illusion").innerHTML = "d20 + " + bonus;
    }
  }

  function alterMemory() {
    var dc = 15 + Math.floor(intelligence/4);
    document.getElementById("alterMemory").innerHTML = "DC: " + dc;
  }

  function magicMissile() {
    var dice;
    var bonus;
    var alter;
    var diceNum = Math.floor((level + intelligence)/12);
    switch (diceNum) {
      case 0: dice = "d4";
      alter = -1;
      break;

      case 1: dice = "d6";
      alter = 1;
      break;
      
      case 2: dice = "d8";
      alter = 3;
      break;

      case 3: dice = "d10";
      alter = 5;
      break;

      case 4: dice = "2d6";
      alter = 6;
      break;
      
      default: dice = "3d6";
      alter = 5;
      break;
    }
    bonus = Math.floor(((level + intelligence)%12)/3) + alter;
  
    if (bonus < 0) {
      document.getElementById("magicMissile").innerHTML = dice + " - " + -bonus;
    }
    else {
      document.getElementById("magicMissile").innerHTML = dice + " + " + bonus;
    }
  }

  function fireball() {
    var dice;
    var bonus;
    var alter = 0;
    var diceNum = Math.floor((level + intelligence)/6);
    switch (diceNum) {
      case 0: dice = "d4";
      break;

      case 1: dice = "d6";
      break;
      
      case 2: dice = "d8";
      break;

      case 3: dice = "d10";
      break;

      case 4: dice = "2d6";
      break;
      
      default: dice = "3d6";
      break;
    }
    bonus = Math.floor(((level + intelligence)%7)/4) + alter;
  
    if (bonus < 0) {
      document.getElementById("fireball").innerHTML = dice + " - " + -bonus;
    }
    else {
      document.getElementById("fireball").innerHTML = dice + " + " + bonus;
    }
  }

  function gust() {
    var dc = 8 + Math.floor(level/4 + intelligence/5);
    document.getElementById("gust").innerHTML = "DC: " + dc;
  }

  function wallOfFlames() {
    var length = 2 + Math.floor(level/6 + intelligence/8);
    var depth = 1 + Math.floor(level/18 + intelligence/25);
    var dice;
    var bonus;
    var alter;
    var diceNum = Math.floor((level + intelligence)/12);
    switch (diceNum) {
      case 0: dice = "d4";
      alter = -1;
      break;

      case 1: dice = "d6";
      alter = 0;
      break;
      
      case 2: dice = "d8";
      alter = 1;
      break;

      case 3: dice = "d10";
      alter = 2;
      break;

      case 4: dice = "2d6";
      alter = 3;
      break;
      
      default: dice = "3d6";
      alter = 2;
      break;
    }
    bonus = Math.floor(((level + intelligence)%12)/4) + alter;
    
    if (bonus < 0) {
      document.getElementById("wallOfFlames").innerHTML = dice + " - " + -bonus +
        "<br/>Length: " + length + " feet<br/>Depth: " + depth + " feet";
		}
		else {
      document.getElementById("wallOfFlames").innerHTML = dice + " + " + bonus +
        "<br/>Length: " + length + " feet<br/>Depth: " + depth + " feet";
    }
  }

  function blight() {
    var dc = 10 + Math.floor(level/10 + intelligence/5);
    var dice;
    var bonus;
    var alter;
    var diceNum = Math.floor((level + intelligence)/9);
    switch (diceNum) {
      case 0: dice = "d4";
      alter = 0;
      break;

      case 1: dice = "d6";
      alter = 1;
      break;
      
      case 2: dice = "d8";
      alter = 2;
      break;

      case 3: dice = "d10";
      alter = 3;
      break;

      case 4: dice = "2d6";
      alter = 4;
      break;
      
      default: dice = "3d6";
      alter = 3;
      break;
    }
    bonus = Math.floor(((level + intelligence)%9)/3) + alter;
    
    if (bonus < 0) {
			document.getElementById("blight").innerHTML = "DC: " + dc + "<br/>" + dice + " - " + -bonus;
		}
		else {
      document.getElementById("blight").innerHTML = "DC: " + dc + "<br/>" + dice + " + " + bonus;
    }
  }

  function coneOfCold() {
    var dc = 7 + Math.floor(level/10 + intelligence/7);
    var dice;
    var bonus;
    var alter;
    var diceNum = Math.floor((level + (intelligence*0.8))/9);
    switch (diceNum) {
      case 0: dice = "d4";
      alter = -2;
      break;

      case 1: dice = "d6";
      alter = -1;
      break;
      
      case 2: dice = "d8";
      alter = 0;
      break;

      case 3: dice = "d10";
      alter = 1;
      break;

      case 4: dice = "2d6";
      alter = 2;
      break;
      
      default: dice = "3d6";
      alter = 1;
      break;
    }
    bonus = Math.floor(((level + (intelligence*0.8))%9)/3) + alter;
    
    if (bonus < 0) {
			document.getElementById("coneOfCold").innerHTML = "DC: " + dc + "<br/>" + dice + " - " + -bonus;
		}
		else {
      document.getElementById("coneOfCold").innerHTML = "DC: " + dc + "<br/>" + dice + " + " + bonus;
    }
  }

  function dragonsBreath() {
    var dice;
    var bonus;
    var alter;
    var diceNum = Math.floor((level + (intelligence*.9))/9);
    switch (diceNum) {
      case 0: dice = "d4";
      alter = -1;
      break;

      case 1: dice = "d6";
      alter = 0;
      break;
      
      case 2: dice = "d8";
      alter = 1;
      break;

      case 3: dice = "d10";
      alter = 2;
      break;

      case 4: dice = "2d6";
      alter = 2;
      break;
      
      default: dice = "3d6";
      alter = 1;
      break;
    }
    bonus = Math.floor(((level + (intelligence*.9))%9)/3) + alter;
    
    if (bonus < 0) {
			document.getElementById("dragonsBreath").innerHTML = dice + " - " + -bonus;
		}
		else {
      document.getElementById("dragonsBreath").innerHTML = dice + " + " + bonus;
    }
  }

  function chainLightning() {
    var dice;
    var bonus;
    var alter;
    var diceNum = Math.floor((level + (intelligence*.9))/9);
    switch (diceNum) {
      case 0: dice = "d4";
      alter = -1;
      break;

      case 1: dice = "d6";
      alter = 0;
      break;
      
      case 2: dice = "d8";
      alter = 1;
      break;

      case 3: dice = "d10";
      alter = 2;
      break;

      case 4: dice = "2d6";
      alter = 2;
      break;
      
      default: dice = "3d6";
      alter = 1;
      break;
    }
    bonus = Math.floor(((level + (intelligence*.9))%9)/3) + alter;
    
    if (bonus < 0) {
			document.getElementById("chainLightning").innerHTML = dice + " - " + -bonus;
		}
		else {
      document.getElementById("chainLightning").innerHTML = dice + " + " + bonus;
    }
  }

}

// Abilities
function abilities() {
  var x = document.getElementById("classAb");
  var classAbSel = x.elements[0].value;
  var allAbs = document.getElementsByClassName("ability");

  if (classAbSel === "allAbs") {
    for (var i = 0; i < allAbs.length; i++) {
      allAbs[i].style.display = "table-row";
    }
  }
  else if (classAbSel === "barbarian") {
    for (var i = 0; i < allAbs.length; i++) {
      if (!(allAbs[i].classList.contains("barbarian"))
		  && !(allAbs[i].classList.contains("all"))) { 
        allAbs[i].style.display = "none";
      }
      else {
        allAbs[i].style.display = "table-row";
      }
    }
  }
}