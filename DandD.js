function stats() {
  var x = document.getElementById("stats");
  var dexterity = x.elements[0].value;
  var constitution = x.elements[1].value;
  var intelligence = x.elements[2].value;
  var strength = x.elements[3].value;
  var weapon = x.elements[4].value;

  var health = 10 + Math.floor(1.5 * constitution);
  var armorClass = 10 + Math.floor(dexterity/5 + constitution/4);
  var speed = 4 + Math.floor(dexterity/10);
  var sneak = -5 + Math.floor(dexterity/3);
  var athletics = -4 + Math.floor(dexterity/8 + strength/4);
  var finesse = -4 + Math.floor(dexterity/4 + intelligence/7);
  var charisma = -4 + Math.floor(intelligence/4);
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
  var will = -4 + Math.floor(intelligence/3 + constitution/10);
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
			hitRoll1 = -4 + Math.floor(intStr/3 + intDex/3);
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