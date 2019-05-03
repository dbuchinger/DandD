// globals
var finalDex = 0;
var finalCon = 0;
var finalInt = 0;
var finalStr = 0;

// Race, Class, and Level stat displays
function defaultStats() {
  var x = document.getElementById("stats");
  var race = x.elements[0].value;
  var charClass = x.elements[1].value;
  var level = x.elements[2].value;
  var dexterity = x.elements[3].value;
  var constitution = x.elements[4].value;
  var intelligence = x.elements[5].value;
  var strength = x.elements[6].value;
  var pointsRemaining = 3 + (level-1)*2 - (Number(dexterity) + Number(constitution) + Number(intelligence) + Number(strength));
  

  // races
  if (race === "Human") {
    document.getElementById("raceDex").innerHTML = 2;
    document.getElementById("raceCon").innerHTML = 2;
    document.getElementById("raceInt").innerHTML = 2;
    document.getElementById("raceStr").innerHTML = 2;
    pointsRemaining = pointsRemaining + 2;
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
  else if (race === "Dwargon") {
    document.getElementById("raceDex").innerHTML = 0;
    document.getElementById("raceCon").innerHTML = 3;
    document.getElementById("raceInt").innerHTML = 2;
    document.getElementById("raceStr").innerHTML = 3;
  }
  else {
    document.getElementById("raceDex").innerHTML = 0;
    document.getElementById("raceCon").innerHTML = 0;
    document.getElementById("raceInt").innerHTML = 0;
    document.getElementById("raceStr").innerHTML = 0;
  }

  // classes
  if (charClass === "Fighter") {
    document.getElementById("classDex").innerHTML = 0;
    document.getElementById("classCon").innerHTML = 1;
    document.getElementById("classInt").innerHTML = 1;
    document.getElementById("classStr").innerHTML = 2;
    document.getElementById("weapon2").style.display = "inline";
  }
  else if (charClass === "Barbarian") {
    document.getElementById("classDex").innerHTML = 0;
    document.getElementById("classCon").innerHTML = 1;
    document.getElementById("classInt").innerHTML = 0;
    document.getElementById("classStr").innerHTML = 3;
    document.getElementById("weapon2").style.display = "inline";
  }
  else if (charClass === "Cleric") {
    document.getElementById("classDex").innerHTML = 0;
    document.getElementById("classCon").innerHTML = 0;
    document.getElementById("classInt").innerHTML = 4;
    document.getElementById("classStr").innerHTML = 0;
    document.getElementById("weapon2").style.display = "none";
  }
  else if (charClass === "Conjurer") {
    document.getElementById("classDex").innerHTML = 0;
    document.getElementById("classCon").innerHTML = 0;
    document.getElementById("classInt").innerHTML = 4;
    document.getElementById("classStr").innerHTML = 0;
    document.getElementById("weapon2").style.display = "none";
  }
  else if (charClass === "Sorcerer") {
    document.getElementById("classDex").innerHTML = 0;
    document.getElementById("classCon").innerHTML = 0;
    document.getElementById("classInt").innerHTML = 4;
    document.getElementById("classStr").innerHTML = 0;
    document.getElementById("weapon2").style.display = "none";
  }
  else if (charClass === "Rogue") {
    document.getElementById("classDex").innerHTML = 3;
    document.getElementById("classCon").innerHTML = 0;
    document.getElementById("classInt").innerHTML = 0;
    document.getElementById("classStr").innerHTML = 1;
    document.getElementById("weapon2").style.display = "inline";
  }
  else if (charClass === "Ranger") {
    document.getElementById("classDex").innerHTML = 2;
    document.getElementById("classCon").innerHTML = 0;
    document.getElementById("classInt").innerHTML = 1;
    document.getElementById("classStr").innerHTML = 1;
    document.getElementById("weapon2").style.display = "inline";
  }
  else {
    document.getElementById("classDex").innerHTML = 0;
    document.getElementById("classCon").innerHTML = 0;
    document.getElementById("classInt").innerHTML = 0;
    document.getElementById("classStr").innerHTML = 0;
    document.getElementById("weapon2").style.display = "inline";
  }

  // level bonus
  if (level <= 1) {
    document.getElementById("levelDex").innerHTML = 0;
    document.getElementById("levelCon").innerHTML = 0;
    document.getElementById("levelInt").innerHTML = 0;
    document.getElementById("levelStr").innerHTML = 0;
  }
  else {
    document.getElementById("levelDex").innerHTML = (level-1);
    document.getElementById("levelCon").innerHTML = (level-1);
    document.getElementById("levelInt").innerHTML = (level-1);
    document.getElementById("levelStr").innerHTML = (level-1);
  }
  if (pointsRemaining < 0) {
    document.getElementById("pointsRemaining").innerHTML = "Too many points spent.";
  }
  else {
    document.getElementById("pointsRemaining").innerHTML = pointsRemaining;
  }

  finalDex = Number(document.getElementById("raceDex").innerHTML) +
    Number(document.getElementById("classDex").innerHTML) +
    Number(document.getElementById("levelDex").innerHTML) + Number(dexterity);
  finalCon = Number(document.getElementById("raceCon").innerHTML) +
    Number(document.getElementById("classCon").innerHTML) + 
    Number(document.getElementById("levelCon").innerHTML) + Number(constitution);
  finalInt = Number(document.getElementById("raceInt").innerHTML) +
    Number(document.getElementById("classInt").innerHTML) + 
    Number(document.getElementById("levelInt").innerHTML) + Number(intelligence);
  finalStr = Number(document.getElementById("raceStr").innerHTML) +
    Number(document.getElementById("classStr").innerHTML) + 
    Number(document.getElementById("levelStr").innerHTML) + Number(strength);

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
  var charClass = x.elements[1].value;
  var weapon = x.elements[7].value;
  var weapon2 = x.elements[8].value;

  var health = 10 + Math.floor(1.5 * constitution);
  var armorClass = 10 + Math.floor(dexterity/5 + constitution/3);
  var speed = 4 + Math.floor(dexterity/10);
  var sneak = -3 + Math.floor(dexterity/3);
  var athletics = -3 + Math.floor(dexterity/8 + strength/3);
  var finesse = -3 + Math.floor(dexterity/3 + intelligence/7);
  var charisma = -2 + Math.floor(intelligence/4);
  var perception = -3 + Math.floor(intelligence/3 + dexterity/10);
  var mana = (intelligence-1)/2;
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
  else if (mana < 4.5){
    manaPool = 3;
  }
  else if (mana < 6){
    manaPool = 4;
  }
  else if (mana < 7.5){
    manaPool = 5;
  }
  else if (mana < 9){
    manaPool = 6;
  }
  else if (mana < 11){
    manaPool = 7;
  }
  else if (mana < 13){
    manaPool = 8;
  }
  else if (mana < 16){
    manaPool = 9;
  }
  else {
    manaPool = 10;
  }
  var will = -3 + Math.floor(intelligence/4 + constitution/8);
  var fortitude = -3 + Math.floor(constitution/4 + strength/8);
  var endDamage = combatNumbers(weapon, strength, dexterity);
  var endDamage2 = combatNumbers(weapon2, strength, dexterity);

  // -------------    MAIN WEAPONS FUNCTION    ----------------

  function combatNumbers(weapon, strength, dexterity) {
    var intStr = Number(strength);
    var intDex = Number(dexterity);
    var curWeapon = weapon;
    var hitRoll1 = 0;
    var hitRoll2 = -100;
    var damageRoll;
    var damageRollDiceNum;
    var damageRollDice;
    var damageRollBonus;
    var damageString;
    var throwable = 0;
    var throwDam;
    var throwHit;

    if ((curWeapon === "Battleaxe") || (curWeapon === "Hammer")) {
			hitRoll1 = -5 + Math.floor(intStr/3.5);
			damageRoll = damageRollHeavy(intStr);
		}
    else if ((curWeapon === "Sword") || (curWeapon === "Mace") || (curWeapon === "Spear")) {
			hitRoll1 = -4 + Math.floor(intStr/4 + intDex/3.5);
			damageRoll = damageRollBig(intStr);
    }
		else if ((curWeapon === "Dagger") || (curWeapon === "Knife")) {
			hitRoll1 = -2 + Math.floor(intStr/4.5 + intDex/3);
			damageRoll = damageRollSmall(intStr + intDex/3);
		}
		else if (curWeapon === "Staff") {
			hitRoll1 = -1 + Math.floor(intStr/4.5 + intDex/3);
			damageRoll = damageRollSmall(intStr);
    }
    else if ((curWeapon === "Javelin") || (curWeapon === "Hand Axe")) {
      throwable = 1;
			hitRoll1 = -3 + Math.floor(intStr/4 + intDex/3.5);
      damageRoll = damageRollMedium(intStr);
      throwHit = -5 + Math.floor(intStr/5 + intDex/3);
      throwDam = damageRollMedium(intStr);
		}
		else if (curWeapon === "Bow") {
			hitRoll1 = -4 + Math.floor(intDex/3);
			damageRoll = damageRollMedium(intStr/5 + intDex*.8);
		}
		else if (curWeapon === "Crossbow") {
			hitRoll1 = -1 + Math.floor(intDex/3);
			damageRoll = damageRollBig(intDex);
		}
		else if (curWeapon === "Dual Daggers") {
			hitRoll1 = -7 + Math.floor(intStr/4.5 + intDex/3);
			hitRoll2 = -7 + Math.floor(intStr/4.5 + intDex/3.5);
			damageRoll = damageRollSmall(intStr + intDex/3);
		}
		else {
      damageString = "Unaccounted for weapon";
      return damageString;
		}
    
    if (throwable == 0) {
      if (hitRoll2 == -100) {
        damageString = "<u>" + curWeapon + "</u><br/>&nbsp&nbsp&nbsp&nbspHit: " + hitRoll1 +
          "<br/>&nbsp&nbsp&nbsp&nbspDamage: " + damageRoll;
      }
      else {
        damageString = "<u>" + curWeapon + "</u><br/>&nbsp&nbsp&nbsp&nbspHit: " + hitRoll1 +
          " / " + hitRoll2 + "<br/>&nbsp&nbsp&nbsp&nbspDamage: " + damageRoll;
      }
      return damageString;
    }
    else {
      damageString = "<u>" + curWeapon + "</u><br/>&nbsp&nbsp&nbsp&nbspHit: " + hitRoll1 +
          "<br/>&nbsp&nbsp&nbsp&nbspDamage: " + damageRoll + "<br/><u>" + curWeapon +
          "(Thrown)</u><br/>&nbsp&nbsp&nbsp&nbspHit: " + throwHit +
          "<br/>&nbsp&nbsp&nbsp&nbspDamage: " + throwDam;
      return damageString;
    }

    // ------------ HEAVY DAMAGE --------------
    function damageRollHeavy(intStr) {
      damageRollNum = Number(intStr);
      var returned;
      damageRollDiceNum = Math.floor(damageRollNum / 6);
      switch (damageRollDiceNum) {
      case 0:  damageRollDice = "d4";
      alter = 1;
      break;
      
      case 1:  damageRollDice = "d6";
      alter = 2;
      break;
      
      case 2:  damageRollDice = "d8";
      alter = 3;
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
      
      damageRollBonus = Math.floor((damageRollNum % 6)/3) + alter;
      
      if (damageRollBonus >= 0) { 
        returned= damageRollDice + " + " + damageRollBonus;
      }
      else {
        returned= damageRollDice + " - " + (damageRollBonus * -1);
      }
      
      return returned
    }
    
    // ------------ BIG DAMAGE --------------
    function damageRollBig(intStr) {
      damageRollNum = Number(intStr);
      var returned;
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
      
      damageRollBonus = Math.floor((damageRollNum % 7 + 1)/3) + alter;
      
      if (damageRollBonus >= 0) { 
        returned= damageRollDice + " + " + damageRollBonus;
      }
      else {
        returned= damageRollDice + " - " + (damageRollBonus * -1);
      }
      
      return returned
    }
    
    // -------------  MEDIUM DAMAGE  --------------
    function damageRollMedium(intStr) {
      damageRollNum = Number(intStr);
      var returned;
      damageRollDiceNum = Math.floor(damageRollNum / 9);
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
      
      damageRollBonus = Math.floor((damageRollNum % 9 + 1)/4) + alter;
      
      if (damageRollBonus >= 0) { 
        returned= damageRollDice + " + " + damageRollBonus;
      }
      else {
        returned= damageRollDice + " - " + (damageRollBonus * -1);
      }
      
      return returned
    }
    
    // -------------  SMALL DAMAGE  ---------------------
    function damageRollSmall(intStr) {
      damageRollNum = Number(intStr);
      var returned;
      damageRollDiceNum = Math.floor(damageRollNum / 10);
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
      
      damageRollBonus = Math.floor((damageRollNum % 10)/4) + alter;
      
      if (damageRollBonus >= 0) { 
        returned= damageRollDice + " + " + damageRollBonus;
      }
      else {
        returned= damageRollDice + " - " + (damageRollBonus * -1);
      }
      
      return returned
    }
  }

  // final display
  if (!(weapon2 === "select") && !(charClass === "Cleric") 
      && !(charClass === "Conjurer") && !(charClass === "Sorcerer")) {
    document.getElementById("statSheet").innerHTML =
    "Weapons: " + weapon + ", " + weapon2 + "<br/>" +
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
    endDamage + "<br/>" + endDamage2;
    ;
  }
  else {
    document.getElementById("statSheet").innerHTML =
    "Weapons: " + weapon + "<br/>" +
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
  }
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
  noxiousCloud();
  telekinesis();
  mindShatter();
  earthquake();
  meteorStrike();
	
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
		var hitBonus = Math.floor(level/3 + intelligence/10);
		var damageBonus = Math.floor(level + intelligence/8);
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
    var diceNum = Math.floor((intelligence)/8);
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
    bonus = Math.floor((intelligence%8)/3) + alter;
   
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
    var diceNum = Math.floor(intelligence/9);
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
		var bonus = Math.floor(level/5 + intelligence/6);
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
    var dc = 6 + Math.floor(level/5 + intelligence/6);
    document.getElementById("grease").innerHTML = "DC: " + dc;
  }
  
  function ensnare() {
    var dc = 7 + Math.floor(level/5 + intelligence/5);
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
    var health = 7 + Math.floor(intelligence/3);
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
    var health = 3 + Math.floor(intelligence/3);
    document.getElementById("protectiveBarrier").innerHTML = "Health: " + health;
  }

  function illusion() {
    var bonus = -6 + Math.floor(level/5 + intelligence/3);
    if (bonus < 0) {
      document.getElementById("illusion").innerHTML = "d20 - " + (-bonus);
    }
    else {
      document.getElementById("illusion").innerHTML = "d20 + " + bonus;
    }
  }

  function alterMemory() {
    var dc = 15 + Math.floor(level/5 + intelligence/4);
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
    bonus = Math.floor(((level + intelligence)%12)/4) + alter;
  
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

      case 5: dice = "3d6";
      break;
      
      default: dice = "4d6";
      break;
    }
    bonus = Math.floor(((level + intelligence)%6 + 1)/4) + alter;
  
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
    var dc = 10 + Math.floor(level/10 + intelligence/4);
    var dice;
    var bonus;
    var alter;
    var diceNum = Math.floor((level + intelligence)/9);
    switch (diceNum) {
      case 0: dice = "d4";
      alter = 1;
      break;

      case 1: dice = "d6";
      alter = 2;
      break;
      
      case 2: dice = "d8";
      alter = 3;
      break;

      case 3: dice = "d10";
      alter = 4;
      break;

      case 4: dice = "2d6";
      alter = 5;
      break;
      
      default: dice = "3d6";
      alter = 4;
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
    var dc = 6 + Math.floor(level/10 + intelligence/7);
    var penalty = Math.floor(level/10 + intelligence/9);
    var dice;
    var bonus;
    var alter;
    var diceNum = Math.floor((level + (intelligence*0.75))/9);
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
    bonus = Math.floor(((level + (intelligence*0.75))%9)/3) + alter;
    
    if (bonus < 0) {
      document.getElementById("coneOfCold").innerHTML = "DC: " + dc + "<br/>" +
      dice + " - " + -bonus + "<br/>Penalty: -" + penalty;
		}
		else {
      document.getElementById("coneOfCold").innerHTML = "DC: " + dc + "<br/>" +
      dice + " + " + bonus + "<br/>Penalty: -" + penalty;
    }
  }

  function dragonsBreath() {
    var dice;
    var bonus;
    var alter;
    var diceNum = Math.floor((level + (intelligence*.9))/9);
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
      alter = 3;
      break;
      
      default: dice = "3d6";
      alter = 2;
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

  function noxiousCloud() {
    var dc = 8 + Math.floor(level/10 + intelligence/7);
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
      alter = 2;
      break;
    }
    bonus = Math.floor(((level + intelligence)%12)/4) + alter;
    
    if (bonus < 0) {
			document.getElementById("noxiousCloud").innerHTML = "DC: " + dc + "<br/>" + dice + " - " + -bonus;
		}
		else {
      document.getElementById("noxiousCloud").innerHTML = "DC: " + dc + "<br/>" + dice + " + " + bonus;
    }
  }

  function telekinesis() {
    var size = 3 + Math.floor(level/5 + intelligence/5);
    var distance = Math.floor(level/4 + intelligence/4) * 5;
    document.getElementById("telekinesis").innerHTML = "Size: " + size +
      " pounds<br/>Distance: " + distance + " feet";
  }

  function mindShatter() {
    var dc = 8 + Math.floor(level/10 + intelligence/5);
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
			document.getElementById("mindShatter").innerHTML = "DC: " + dc + "<br/>" + dice + " - " + -bonus;
		}
		else {
      document.getElementById("mindShatter").innerHTML = "DC: " + dc + "<br/>" + dice + " + " + bonus;
    }
  }

  function earthquake() {
    var bonus = -4 + Math.floor(level/5 + intelligence/6);
    if (bonus < 0) {
      document.getElementById("earthquake").innerHTML = "d20 - " + (-bonus);
    }
    else {
      document.getElementById("earthquake").innerHTML = "d20 + " + bonus;
    }
  }

  function meteorStrike() {
    var dice;
    var bonus;
    var diceNum = Math.floor((level + intelligence)/6);
    switch (diceNum) {
      case 0: dice = "d8";
      break;

      case 1: dice = "d10";
      break;
      
      case 2: dice = "2d6";
      break;

      case 3: dice = "3d6";
      break;

      case 4: dice = "4d6";
      break;

      case 5: dice = "5d6";
      break;
      
      default: dice = "6d6";
      break;
    }
    bonus = Math.floor(((level + intelligence)%6)/4) + 2;
  
    if (bonus < 0) {
      document.getElementById("meteorStrike").innerHTML = dice + " - " + -bonus;
    }
    else {
      document.getElementById("meteorStrike").innerHTML = dice + " + " + bonus;
    }
  }

}

function abilitySort() {
  var x = document.getElementById("abilities");
  var classAbs = x.elements[1].value;
  var allAbs = document.getElementsByClassName("ability");

  if (classAbs === "barbarian") {
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
  else if (classAbs === "fighter") {
    for (var i = 0; i < allAbs.length; i++) {
      if (!(allAbs[i].classList.contains("fighter"))
		  && !(allAbs[i].classList.contains("all"))) { 
        allAbs[i].style.display = "none";
      }
      else {
        allAbs[i].style.display = "table-row";
      }
    }
  }
  else if (classAbs === "rogue") {
    for (var i = 0; i < allAbs.length; i++) {
      if (!(allAbs[i].classList.contains("rogue"))
		  && !(allAbs[i].classList.contains("all"))) { 
        allAbs[i].style.display = "none";
      }
      else {
        allAbs[i].style.display = "table-row";
      }
    }
  }
  else if (classAbs === "ranger") {
    for (var i = 0; i < allAbs.length; i++) {
      if (!(allAbs[i].classList.contains("ranger"))
		  && !(allAbs[i].classList.contains("all"))) { 
        allAbs[i].style.display = "none";
      }
      else {
        allAbs[i].style.display = "table-row";
      }
    }
  }
  else {
    for (var i = 0; i < allAbs.length; i++) {
      allAbs[i].style.display = "table-row";
    }
  }
}


// Abilities
function abilities() {
  var x = document.getElementById("abilities");
  var level = Number(x.elements[0].value);

  focus();
  inspire();
  favoredEnemy();
  camouflage();
  volley();
  rage();
  recklessAttack();
  turtleStance();
  grapple();
  secondWind();
  piercingShot();
  counterattack();
  thiefTraits();
  stunningBlow();
  battleCry();
  bully();
  cleave();
  groupFighter();
  wary();
  nimble();
  battleTrained();

  function focus() {
    var hit = 1 + Math.floor((level+1)/2);
    var damage = 1 + Math.floor(level*1.25);
    document.getElementById("focus").innerHTML = "Hit: +" + hit +
      "<br/>Damage: +" + damage;
  }

  function inspire() {
    var resist = level + 2;
    var hit = 1 + Math.floor(level/2);
    document.getElementById("inspire").innerHTML = "Hit: +" + hit +
      "<br/>Resist: +" + resist;
  }

  function favoredEnemy() {
    var d20 = Math.floor((level+1)/2);
    var damage = level;
    document.getElementById("favoredEnemy").innerHTML = "(d20 Bonus: +" + d20 +
      " | Damage: +" + damage + ")";
  }

  function camouflage() {
    var bonus = 2 + Math.floor(level/2);
    document.getElementById("camouflage").innerHTML = "+" + bonus;
  }

  function volley() {
    var penalty = 3;// - Math.floor(level/2);
    document.getElementById("volley").innerHTML = "Penalty: -" + penalty;
  }

  function rage() {
    var penalty = -4;// + Math.floor(level/3);
    var d20 = 1 + Math.floor(level/2);
    var damage = Math.floor(level);
    document.getElementById("rage").innerHTML = "Penalty: " + penalty +
    "<br/>d20 Bonus: +" + d20 + "<br/>Damage: +" + damage;
  }

  function recklessAttack() {
    var bonus = 3 + Math.floor(level/2);
    var enemyBonus = 2;
    document.getElementById("recklessAttack").innerHTML = "Bonus: " + bonus +
    "<br/>Enemy Bonus: " + enemyBonus;
  }

  function turtleStance() {
    var acBonus = 1 + Math.floor(level/3);
    var fortitude = 1 + Math.floor(level/2);
    document.getElementById("turtleStance").innerHTML = "AC Bonus: " + acBonus +
    "<br/>Fortitude Bonus: " + fortitude;
  }

  function grapple() {
    var damage;
    var dc = 10 + Math.floor(level/2);
    switch (level) {
      case 2: damage = "d4";
      break;

      case 3: damage = "d6";
      break;

      case 4: damage = "d6 + 1";
      break;

      case 5: damage = "d8";
      break;

      case 6: damage = "d8 + 1";
      break;

      case 7: damage = "d10";
      break;
      
      default: damage = "-";
      break;
    }
    document.getElementById("grapple").innerHTML = "Damage: " + damage +
    "<br/>DC: " + dc;
  }

  function secondWind() {
    var heal;
    switch (level) {
      case 3: heal = "d6 + 1";
      break;

      case 4: heal = "d6 + 2";
      break;

      case 5: heal = "d8 + 1";
      break;

      case 6: heal = "d8 + 2";
      break;

      case 7: heal = "d10 + 1";
      break;
      
      default: heal = "-";
      break;
    }
    document.getElementById("secondWind").innerHTML = "Heal: " + heal;
  }

  function piercingShot() {
    var damage;
    switch (level) {
      case 2: damage = "d4";
      break;

      case 3: damage = "d4 + 1";
      break;

      case 4: damage = "d6";
      break;

      case 5: damage = "d6 + 1";
      break;

      case 6: damage = "d8";
      break;

      case 7: damage = "d8 + 1";
      break;
      
      default: damage = "-";
      break;
    }
    document.getElementById("piercingShot").innerHTML = "Damage: " + damage;
  }

  function counterattack() {
    var penalty = 5 - Math.floor(level/2);
    document.getElementById("counterattack").innerHTML = "Penalty: -" + penalty;
  }

  function thiefTraits() {
    var d20 = -1 + Math.floor(level/2);
    var bonus = level;
    if (d20 < 0) {
      document.getElementById("thiefTraits").innerHTML = "(d20 - " + -d20 + ")";
    }
    else {
      document.getElementById("thiefTraits").innerHTML = "(d20 + " + d20 + ")";
    }
    document.getElementById("pickpocket").innerHTML = "+" + bonus;
  }

  function stunningBlow() {
    var dc = 10 + level;
    document.getElementById("stunningBlow").innerHTML = "DC: " + dc;
  }

  function battleCry() {
    var dc = 6 + Math.floor(level/3);
    document.getElementById("battleCry").innerHTML = "DC: " + dc;
  }

  function bully() {
    var bonus = 2 + Math.floor(level/2);
    document.getElementById("bully").innerHTML = "+" + bonus;
  }

  function cleave() {
    var penalty = 3;// - Math.floor(level/3);
    document.getElementById("cleave").innerHTML = "Penalty: -" + penalty;
  }

  function groupFighter() {
    var bonus = 1 + Math.floor(level/3);
    document.getElementById("groupFighter").innerHTML = "+" + bonus;
  }

  function wary() {
    var bonus = 1 + Math.floor((level-1)/2);
    document.getElementById("wary").innerHTML = "+" + bonus;
  }

  function nimble() {
    var bonus = 2 + Math.floor(level/2);
    document.getElementById("nimble").innerHTML = "(+" + bonus + ")";
  }

  function battleTrained() {
    var bonus = 1 + Math.floor(level/2);
    document.getElementById("battleTrained").innerHTML = "(+" + bonus + ")";
  }

}

// Races
function races() {
  var x = document.getElementById("races");
  var level = Number(x.elements[0].value);

  breathWeapon();
  metalWorking();

  function breathWeapon() {
    var damage;
    switch (level) {
      case 1: damage = "d6 + 1";
      break;

      case 2: damage = "d8";
      break;

      case 3: damage = "d8 + 1";
      break;

      case 4: damage = "d10";
      break;

      case 5: damage = "2d6";
      break;

      case 6: damage = "2d6 + 2";
      break;
      
      case 7: damage = "3d6";
      break;

      default: damage = "-";
      break;
    }
    document.getElementById("breathWeapon").innerHTML = damage;
    document.getElementById("dwargonBreathWeapon").innerHTML = damage;
  }

  function metalWorking() {
    var d20 = -2 + Math.floor(level/2);
    if (d20 < 0) {
      document.getElementById("metalWorking").innerHTML = "(d20 - " + -d20 + ")";
    }
    else {
      document.getElementById("metalWorking").innerHTML = "(d20 + " + d20 + ")";
    }
  }
}