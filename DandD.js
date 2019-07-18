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
  // GENERAL STATS
  var x = document.getElementById("stats");
  var race = x.elements[0].value;
  var charClass = x.elements[1].value;
  var level = Number(x.elements[2].value);
  var weapon = x.elements[7].value;
  var weapon2 = x.elements[8].value;
  var dexterity = finalDex;
  var constitution = finalCon;
  var intelligence = finalInt;
  var strength = finalStr;
  

  var health = 10 + Math.floor(1.5 * constitution);
  var armorClass = 10 + Math.floor(dexterity/5 + constitution/3);
  var speed = 4 + Math.floor(dexterity/8);
  var sneak = -2 + Math.floor(dexterity/3);
  var athletics = -2 + Math.floor(dexterity/8 + strength/3);
  var finesse = -2 + Math.floor(dexterity/3 + intelligence/7);
  var charisma = -2 + Math.floor(intelligence/3);
  var perception = -2 + Math.floor(intelligence/3 + dexterity/10);
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
  var will = -2 + Math.floor(intelligence/3 + constitution/8);
  var fortitude = -2 + Math.floor(constitution/3 + strength/8);
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
			hitRoll1 = -4 + Math.floor(intStr/3.5 + intDex/3.5);
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
			damageRoll = damageRollMedium(intStr/5 + intDex*.9);
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
      
      return returned;
    }
  }

  // final stats display

  statsHeader = "Stats";
  statsHeaderBold = statsHeader.bold();
  if (!(weapon2 === "select") && !(charClass === "Cleric") 
      && !(charClass === "Conjurer") && !(charClass === "Sorcerer")) {
    document.getElementById("statSheetStats").innerHTML =
    statsHeaderBold + "<br/>" +
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
    document.getElementById("statSheetStats").innerHTML =
    statsHeaderBold + "<br/>" +
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

  // Race traits display
  var raceHeader = "Race Traits";
  var raceHeaderBold = raceHeader.bold();
  if (race === "Human") {
    document.getElementById("statSheetRace").innerHTML = raceHeaderBold + "<br/>Human characters have two more stat "
    + "points to spend at Level 1.";
  }
  else if (race === "Elf") {
    document.getElementById("statSheetRace").innerHTML = raceHeaderBold + "<br/>Darkvision: Can see in very dim " +
    "lighting.<br/>Trance: Only need 4 hours of sleep each day.<br/>Insightful: +1 bonus to " +
    "perception."
  }
  else if (race === "Dwarf") {
    document.getElementById("statSheetRace").innerHTML = raceHeaderBold + "<br/>Darkvision: Can see in very dim " +
    "lighting.<br/>Poison Resistance: +2 bonus to Fortitude checks against poison and " +
    "disease.<br/>Metalworking: Has a " + metalWorkingFunc(level) + " check to pick " +
    "locks and set and disarm traps."
  }
  else if (race === "Halfling") {
    document.getElementById("statSheetRace").innerHTML = raceHeaderBold + "<br/>Small Stature: +1 bonus to " +
    "sneak.<br/>Lucky: If you roll a 1 using the d20, reroll it and take the new roll. " +
    "<br/>Wily: Can move through squares occupied by Large size or larger units.";
  }
  else if (race === "Half-Orc") {
    document.getElementById("statSheetRace").innerHTML = raceHeaderBold + "<br/>Fearless: +3 bonus to Will " +
    "saves against being frightened.<br/>Aggressive: +3 bonus to Charisma checks being " +
    "used to intimidate.";
  }
  else if (race === "Dragonborn") {
    document.getElementById("statSheetRace").innerHTML = raceHeaderBold + "<br/>Breath Weapon: Deal " +
    breathWeaponFunc(level) + " damage to units in a 25 foot line.";
  }
  else if (race === "Gnome") {
    document.getElementById("statSheetRace").innerHTML = raceHeaderBold + "<br/>Small Stature: +1 bonus to " +
    "sneak.<br/>Boundless Energy: +1 max mana.";
  }
  else if (race === "Dwargon") {
    document.getElementById("statSheetRace").innerHTML = raceHeaderBold + "<br/>Darkvision: Can see in very dim " +
    "lighting.<br/>Abomination: -1 to Charisma checks.<br/>Breath Weapon: Deal " +
    breathWeaponFunc(level) + " damage to units in a 25 foot line.";
  }
  else {
    document.getElementById("statSheetRace").innerHTML = raceHeaderBold + "<br/>Pick a race."
  }

  // --- Class abilities display ---
  // bolds/italics
  var display = "";
  var level1, level2, level3, level4, level5, level6;
  var classHeader = "Class Traits and Abilities";
  var classHeaderBold = classHeader.bold();
  var classTraitsReg = "-Traits-";
  var classTraitsItal = classTraitsReg.italics();
  var abilitiesReg = "-Abilities-";
  var abilitiesItal = abilitiesReg.italics();
  var spells = "Spells";
  var spellsLink = spells.link("#spellList")
  var dwpReg = "Dual Weapon Proficiency: ";
  var dwpBold = dwpReg.bold();
  var battleTrainedReg = "Battle Trained: ";
  var battleTrainedBold = battleTrainedReg.bold();
  var groupFighterReg = "Group Fighter: ";
  var groupFighterBold = groupFighterReg.bold();
  var chargeReg = "Charge: ";
  var chargeBold = chargeReg.bold();
  var focusReg = "Focus: ";
  var focusBold = focusReg.bold();
  var grappleReg = "Grapple: ";
  var grappleBold = grappleReg.bold();
  var stalwartDefenseReg = "Stalwart Defense: ";
  var stalwartDefenseBold = stalwartDefenseReg.bold();
  var turtleStanceReg = "Turtle Stance: ";
  var turtleStanceBold = turtleStanceReg.bold();
  var inspireReg = "Inspire: ";
  var inspireBold = inspireReg.bold();
  var stunningBlowReg = "Stunning Blow: ";
  var stunningBlowBold = stunningBlowReg.bold();
  var secondWindReg = "Second Wind: ";
  var secondWindBold = secondWindReg.bold();
  var trueMasteryReg = "True Mastery: ";
  var trueMasteryBold = trueMasteryReg.bold();
  var battleReadyReg = "Battle Ready: ";
  var battleReadyBold = battleReadyReg.bold();
  var bullyReg = "Bully: ";
  var bullyBold = bullyReg.bold();
  var rageReg = "Rage: ";
  var rageBold = rageReg.bold();
  var recklessAttackReg = "Reckless Attack: ";
  var recklessAttackBold = recklessAttackReg.bold();
  var battleCryReg = "Battle Cry: ";
  var battleCryBold = battleCryReg.bold();
  var cleaveReg = "Cleave: ";
  var cleaveBold = cleaveReg.bold();
  var brutalStrikeReg = "Brutal Strike: ";
  var brutalStrikeBold = brutalStrikeReg.bold();
  var bottomlessEnduranceReg = "Bottomless Endurance: ";
  var bottomlessEnduranceBold = bottomlessEnduranceReg.bold();
  var blindSenseReg = "Blind Sense: ";
  var blindSenseBold = blindSenseReg.bold();
  var thiefTraitsReg = "Thief Traits: ";
  var thiefTraitsBold = thiefTraitsReg.bold();
  var waryReg = "Wary: ";
  var waryBold = waryReg.bold();
  var uncannyDodgeReg = "Uncanny Dodge: ";
  var uncannyDodgeBold = uncannyDodgeReg.bold();
  var surgeonReg = "Surgeon: ";
  var surgeonBold = surgeonReg.bold();
  var counterAttackReg = "Counter Attack: ";
  var counterAttackBold = counterAttackReg.bold();
  var deftMovementsReg = "Deft Movements: ";
  var deftMovementsBold = deftMovementsReg.bold();
  var rapidStrikeReg = "Rapid Strike: ";
  var rapidStrikeBold = rapidStrikeReg.bold();
  var camouflageReg = "Camouflage: ";
  var camouflageBold = camouflageReg.bold();
  var favoredEnemyReg = "Favored Enemy: ";
  var favoredEnemyBold = favoredEnemyReg.bold();
  var nimbleReg = "Nimble: ";
  var nimbleBold = nimbleReg.bold();
  var carefulAimReg = "Careful Aim: ";
  var carefulAimBold = carefulAimReg.bold();
  var volleyReg = "Volley: ";
  var volleyBold = volleyReg.bold();
  var piercingShotReg = "Piercing Shot: ";
  var piercingShotBold = piercingShotReg.bold();
  var strongMindReg = "Strong Mind: ";
  var strongMindBold = strongMindReg.bold();
  var unbrokenFocusReg = "Unbroken Focus: ";
  var unbrokenFocusBold = unbrokenFocusReg.bold();

  // Fighter display
  if (charClass === "Fighter") {
    // function runs
    var focusArray = focusFunc(level);
    var battleTrained = battleTrainedFunc(level);
    var groupFighter = groupFighterFunc(level);
    var grappleArray = grappleFunc(level);
    var turtleStanceArray = turtleStanceFunc(level);
    var inspireArray = inspireFunc(level);
    var stunningBlow = stunningBlowFunc(level);
    var secondWind = secondWindFunc(level);
    // level 1 abilities
    level1 = classTraitsItal + "<br/>" + dwpBold + "Can wield two weapon types.<br/>" + 
    battleTrainedBold + "+" + battleTrained + " bonus against being stunned or " +
    "frightened in combat.<br/>" + groupFighterBold + "When attacking the same target " +
    "as another melee character, gain a +" + groupFighter + " bonus to hit.<br/>" +
    abilitiesItal + "<br/>" + chargeBold + "Bonus action, 1 mana. The character's " + 
    "movement is doubled this turn.<br/>" + focusBold + "Secondary action, " + 
    "1 mana. Increase hit and damage for the next attack. Hit: +" + focusArray[0] + 
    ",  Damage: +" + focusArray[1] + "<br/>";
    // level 2 abilities
    level2 = grappleBold + "Primary Action. User grapples an enemy, dealing damage " + 
    "and preventing the enemy's next action until the grapple is released or they " +
    "pass an Athletics check. Attacks made against the grappling and grappled " +
    "characters gain a +5 bonus to hit. If the grappling character takes damage, the " +
    "grapple is broken. DC: " + grappleArray[0] + ", Damage: " + grappleArray[1] + 
    "<br/>" + stalwartDefenseBold + "Secondary Action, 1 mana. User takes the damage " +
    "for targeted attacks that hit a chosen adjacent ally until the user's next " +
    "action or target leaves range.<br/>";
    // level 3 abilities
    level3 = turtleStanceBold + "Bonus action, 1 mana. User has increased Armor " +
    "Class and a bonus to Fortitude checks until their next movement. AC bonus: +" +
    turtleStanceArray[0] + ", Fortitude bonus: +" + turtleStanceArray[1] + "<br/>";
    // level 4 abilities
    level4 = inspireBold + "Bonus action, 1 mana. Allied units within 15 feet of " +
    "the character gain a bonus to hit and resist being frightened until leaving " +
    "range. Hit: +" + inspireArray[0] + ",  Resist: +" + inspireArray[1] + "<br/>" +
    stunningBlowBold + "Bonus Action, 1 mana. The user's next hit this turn will stun " +
    "the target if it hits unless the target passes a Fortitude check. DC: " +
    stunningBlow + "<br/>";
    // level 5 abilities
    level5 = secondWindBold + "The character heals for a small amount. Heal: " +
    secondWind + "<br/>";
    // level 6 abilities
    level6 = trueMasteryBold + "The character critical hits for rolls of 19 and 20.";
  }
  // Barbarian display
  else if (charClass === "Barbarian") {
    // function runs
    var bully = bullyFunc(level);
    var rage = rageFunc(level);
    var grappleArray = grappleFunc(level);
    var inspireArray = inspireFunc(level);
    var stunningBlow = stunningBlowFunc(level);
    var recklessAttack = recklessAttackFunc(level);
    var battleCry = battleCryFunc(level);
    var cleave = cleaveFunc(level);
    var inspireArray = inspireFunc(level);
    var stunningBlow = stunningBlowFunc(level);
    
    // level 1 abilities
    level1 = classTraitsItal + "<br/>" + dwpBold + "Can wield two weapon types.<br/>" + 
    battleReadyBold + "Surprise attacks against barbarians do not gain a bonus.<br/>" +
    bullyBold + "Gain a bonus to charisma checks being used to intimidate. Bonus: +" +
    bully + "<br/>" + abilitiesItal + "<br/>" + chargeBold + "Bonus action, 1 mana. " +
    "The character's movement is doubled this turn.<br/>" + rageBold + "Bonus Action. "
    + "Gain a bonus to Athletics, Fortitude, Will checks against being frightened, and " +
    "damage rolls but a penalty to Will. User cannot use other abilities or exit Rage " +
    "until encounter ends. Check Bonus: +" + rage[0] + ",  Damage: +" + rage[1] +
    ",  Will Penalty: " + rage[2] + "<br/>";
    // level 2 abilities
    level2 = grappleBold + "Primary Action. User grapples an enemy, dealing damage " + 
    "and preventing the enemy's next action until the grapple is released or they " +
    "pass an Athletics check. Attacks made against the grappling and grappled " +
    "characters gain a +5 bonus to hit. If the grappling character takes damage, the " +
    "grapple is broken. DC: " + grappleArray[0] + ", Damage: " + grappleArray[1] + 
    "<br/>" + recklessAttackBold + "Gain a bonus to hit, but for the following turn " +
    "enemy attacks against your character also gain a small bonus to hit. Bonus: +" +
    recklessAttack[0] + ", Enemy Bonus: +" + recklessAttack[1] + "<br/>";
    // level 3 abilities
    level3 = battleCryBold + "Bonus Action, 1 mana. Enemy units within 2 spaces must " +
    "roll a Will check or be Terrified during their next action. DC: " + battleCry +
    "<br/>" + cleaveBold + "Primary Action. Roll with a penalty to hit all adjacent " +
    "units. Penalty: -" + cleave + "<br/>";
    // level 4 abilities
    level4 = inspireBold + "Bonus action, 1 mana. Allied units within 15 feet of " +
    "the character gain a bonus to hit and resist being frightened until leaving " +
    "range. Hit: +" + inspireArray[0] + ",  Resist: +" + inspireArray[1] + "<br/>" +
    stunningBlowBold + "Bonus Action, 1 mana. The user's next hit this turn will stun " +
    "the target if it hits unless the target passes a Fortitude check. DC: " +
    stunningBlow + "<br/>";
    // level 5 abilities
    level5 = brutalStrikeBold + "Passive. Instead of doing max damage on critical hits, roll " +
    "normally and then double it. If max damage is higher, then use that.<br/>";
    // level 6 abilities
    level6 = bottomlessEnduranceBold + "Passive. The first hit in an encounter that would " +
    "otherwise kill the character instead reduces them to 1 health. This effect " +
    "can only occur once between long rests.";
  }
  // Caster classes
  else if (charClass === "Cleric") {
    level1 = "See " + spellsLink;
    level2 = "";
    level3 = "";
    level4 = "";
    level5 = "";
    level6 = "";
  }
  else if (charClass === "Conjurer") {
    level1 = "See " + spellsLink;
    level2 = "";
    level3 = "";
    level4 = "";
    level5 = "";
    level6 = "";
  }
  else if (charClass === "Sorcerer") {
    level1 = "See " + spellsLink;
    level2 = "";
    level3 = "";
    level4 = "";
    level5 = "";
    level6 = "";
  }
  // Rogue display
  else if (charClass === "Rogue") {
    // function runs
    var focusArray = focusFunc(level);
    var thiefTraits = thiefTraitsFunc(level);
    var wary = waryFunc(level);
    var counterAttack = counterattackFunc(level);
    // level 1 abilities
    level1 = classTraitsItal + "<br/>" + dwpBold + "Can wield two weapon types.<br/>" + 
    blindSenseBold + "Able to sense unseen creatures within 5 feet.<br/>" +
    thiefTraitsBold + "Can attempt to pick locks and set and disarm traps, " +
    "and also gains a bonus to Finesse rolls used to pickpocket. Roll: " +
    thiefTraits[0] + ", Pickpocket bonus: " + thiefTraits[1] + "<br/>" +
    waryBold + "Gain a bonus to perception rolls. Bonus: " + wary + "<br/>" +
    abilitiesItal + "<br/>" + chargeBold + "Bonus action, 1 mana. The character's " + 
    "movement is doubled this turn.<br/>" + focusBold + "Secondary action, " + 
    "1 mana. Increase hit and damage for the next attack. Hit: +" + focusArray[0] + 
    ",  Damage: +" + focusArray[1] + "<br/>";
    // level 2 abilities
    level2 = uncannyDodgeBold + "Instant action, 1 mana. Use while being attacked " +
    "to take only half damage if hit.<br/>";
    // level 3 abilities
    level3 = surgeonBold + "Passive. Deal extra damage equal to half (rounded down) of the hit " +
    "modifier.<br/>";
    // level 4 abilities
    level4 = counterAttackBold + "Bonus action, 1 mana. For the next turn if " +
    "an enemy misses their targeted melee attack and is in range, you may make " +
    "a free attack back with a penalty to hit. Penalty: " + counterAttack + "<br/>";
    // level 5 abilities
    level5 = deftMovementsBold + "Passive. Can perform an additional secondary action each turn.<br/>";
    // level6 abilities
    level6 = rapidStrikeBold + "Bonus action, 1 mana. Can perform an additional primary " +
    "action this turn.<br/>"
  }
  // Ranger display
  else if (charClass === "Ranger") {
    // function runs
    var focusArray = focusFunc(level);
    var camouflage = camouflageFunc(level);
    var favoredEnemy = favoredEnemyFunc(level);
    var nimble = nimbleFunc(level);
    var volley = volleyFunc(level);
    var piercingShot = piercingShotFunc(level);
    // level 1 abilities
    level1 = classTraitsItal + "<br/>" + dwpBold + "Can wield two weapon types.<br/>" + 
    camouflageBold + "Gain a bonus to Sneak while in the wild. Bonus: +" + camouflage +
    "<br/>" + favoredEnemyBold + "Gain a bonus to combat rolls against your favored " +
    "enemy type. Hit: +" + favoredEnemy[0] + ", Damage: +" + favoredEnemy[1] + "<br/>" +
    nimbleBold + "Gain a bonus to climbing and crossing rough terrain. Bonus: +" + nimble +
    "<br/>" + abilitiesItal + "<br/>" + chargeBold + "Bonus action, 1 mana. The character's " + 
    "movement is doubled this turn.<br/>" + focusBold + "Secondary action, " + 
    "1 mana. Increase hit and damage for the next attack. Hit: +" + focusArray[0] + 
    ",  Damage: +" + focusArray[1] + "<br/>";
    // level 2 abilities
    level2 = uncannyDodgeBold + "Instant action, 1 mana. Use while being attacked " +
    "to take only half damage if hit.<br/>" + carefulAimBold + "(Ranged) Primary action. " +
    "The character's next attack on the selected target is a guaranteed hit. This " +
    "ability does not work if the target cannot be sensed or line of sight to the " +
    "target is obstructed.<br/>";
    // level 3 abilities
    level3 = volleyBold + "(Ranged) Primary action, 1 mana. The character takes two rapid " +
    "shots with their bow with a penalty to hit. Penalty: -" + volley + "<br/>";
    // level 4 abilities
    level4 = piercingShotBold + "(Ranged) Primary action, 1 mana. The next attack is " +
    "strengthened, increasing the damage of the attack and allowing it to hit a unit behind " +
    "the initial target. Damage increase: " + piercingShot + "<br/>";
    // level 5 abilities
    level5 = strongMindBold + "Passive. The character is prevented from being stunned or " +
    "having their hit bonus reduced by non-physical means passes all Will saves in battle.<br/>"
    // level 6 abilities
    level6 = unbrokenFocusBold + "Passive. Consecutive attacks against the same enemy gain +1 " +
    "hit for each turn in a row it's targeted by an attack. Careful Aim preserves this bonus if " +
    "used on the same target."
  }
  else {
    level1 = "Pick a class."
    level2 = "";
    level3 = "";
    level4 = "";
    level5 = "";
    level6 = "";
  }
 display = classHeaderBold + "<br/>" + level1;
 if (level > 1) {
   display = display + level2;
 }
 if (level > 2) {
   display = display + level3;
 }
 if (level > 3) {
   display = display + level4;
 }
 if (level > 4) {
   display = display + level5;
 }
 if (level > 5) {
   display = display + level6;
 }
 document.getElementById("statSheetClass").innerHTML = display;

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
    var bonus = 1 + Math.floor(level/5 + intelligence/6);
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


// ABILITIES SECTION DISPLAY
function abilities() {
  var x = document.getElementById("abilities");
  var level = Number(x.elements[0].value);

  // Battle Trained
  var battleTrained = battleTrainedFunc(level);
  document.getElementById("battleTrained").innerHTML = "(+" + battleTrained + ")";
  // Group Fighter
  var groupFighter = groupFighterFunc(level);
  document.getElementById("groupFighter").innerHTML = "+" + groupFighter;
  // Focus
  var focus = focusFunc(level);
  document.getElementById("focus").innerHTML = "Hit: +" + focus[0] + "<br/>Damage: +" + focus[1];
  // Grapple
  var grapple = grappleFunc(level);
  document.getElementById("grapple").innerHTML = "DC: " + grapple[0] +
  "<br/>Damage: " + grapple[1];
  // Turtle Stance
  var turtleStance = turtleStanceFunc(level);
  document.getElementById("turtleStance").innerHTML = "AC Bonus: " + turtleStance[0] +
  "<br/>Fortitude Bonus: " + turtleStance[1];
  // Inspire
  var inspire = inspireFunc(level);
  document.getElementById("inspire").innerHTML = "Hit: +" + inspire[0] +
      "<br/>Resist: +" + inspire[1];
  // Stunning Blow
  var stunningBlow = stunningBlowFunc(level);
  document.getElementById("stunningBlow").innerHTML = "DC: " + stunningBlow;
  // Second Wind
  var secondWind = secondWindFunc(level);
  document.getElementById("secondWind").innerHTML = "Heal: " + secondWind;
  // Bully
  var bully = bullyFunc(level);
  document.getElementById("bully").innerHTML = "+" + bully;
  // Rage
  var rage = rageFunc(level);
  document.getElementById("rage").innerHTML = "Check Bonus: +" + rage[0] + "<br/>Damage: +"
  + rage[1] + "<br/>Will Penalty: " + rage[2];
  // Reckless Attack
  var recklessAttack = recklessAttackFunc(level);
  document.getElementById("recklessAttack").innerHTML = "Bonus: +" + recklessAttack[0] +
  "<br/>Enemy Bonus: +" + recklessAttack[1];
  // Battle Cry
  var battleCry = battleCryFunc(level);
  document.getElementById("battleCry").innerHTML = "DC: " + battleCry;
  // Cleave
  var cleave = cleaveFunc(level);
  document.getElementById("cleave").innerHTML = "Penalty: -" + cleave;
  // Thief Traits
  var thiefTraits = thiefTraitsFunc(level);
  document.getElementById("thiefTraits").innerHTML = "(" + thiefTraits[0] + ")";
  document.getElementById("pickpocket").innerHTML = "+" + thiefTraits[1];
  // Wary
  var wary = waryFunc(level);
  document.getElementById("wary").innerHTML = "+" + wary;
  // Counter Attack
  var counterAttack = counterattackFunc(level);
  document.getElementById("counterattack").innerHTML = "Penalty: " + counterAttack;
  // Camouflage
  var camouflage = camouflageFunc(level);
  document.getElementById("camouflage").innerHTML = "+" + camouflage;
  // Favored Enemy
  var favoredEnemy = favoredEnemyFunc(level);
  document.getElementById("favoredEnemy").innerHTML = "(d20 Bonus: +" + favoredEnemy[0] +
    " | Damage: +" + favoredEnemy[1] + ")";
  // Nimble
  var nimble = nimbleFunc(level);
  document.getElementById("nimble").innerHTML = "(+" + nimble + ")";
  // Volley
  var volley = volleyFunc(level);
  document.getElementById("volley").innerHTML = "Penalty: -" + volley;
  // Piercing Shot
  var piercingShot = piercingShotFunc(level);
  document.getElementById("piercingShot").innerHTML = "Damage: " + piercingShot;
}

// ABILITY FUNCTION DEFINITIONS
function battleTrainedFunc(level) {
  var bonus = 1 + Math.floor(level/2);
  return bonus;
}

function groupFighterFunc(level) {
  var bonus = 1 + Math.floor(level/3);
  return bonus;
}

function focusFunc(level) {
  var hit = 1 + Math.floor((level+1)/2);
  var damage = 1 + Math.floor(level/2);
  return [hit, damage];
}

function grappleFunc(level) {
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
  return [dc, damage];
}

function turtleStanceFunc(level) {
  var acBonus = 1 + Math.floor(level/3);
  var fortitude = 1 + Math.floor(level/2);
  return [acBonus, fortitude];
}

function inspireFunc(level) {
  var resist = level + 2;
  var hit = Math.floor(level/3);
  return [hit, resist];
}

function stunningBlowFunc(level) {
  var dc = 10 + level;
  return dc;
}

function secondWindFunc(level) {
  var heal;
  switch (level) {
    case 5: heal = "d8 + 1";
    break;

    case 6: heal = "d8 + 2";
    break;

    case 7: heal = "d10 + 2";
    break;
    
    default: heal = "-";
    break;
  }
  return heal;
}

function bullyFunc(level) {
  var bonus = 2 + Math.floor(level/2);
  return bonus;
}

function rageFunc(level) {
  var penalty = -4;// + Math.floor(level/3);
  var d20 = 1 + Math.floor(level/2);
  var damage = Math.floor(level);
  return [d20, damage, penalty];
}

function recklessAttackFunc(level) {
  var bonus = 3 + Math.floor(level/2);
  var enemyBonus = 2;
  return [bonus, enemyBonus];
}

function battleCryFunc(level) {
  var dc = 4 + Math.floor(level/3);
  return dc;
}

function cleaveFunc(level) {
  var penalty = 3;// - Math.floor(level/3);
  return penalty;
}

function thiefTraitsFunc(level) {
  var d20;
  var d20Num = -1 + Math.floor(level/2);
  if (d20Num < 0) {
    d20 = "d20 - " + -d20Num;
  }
  else {
    d20 = "d20 + " + d20Num;
  }
  var bonus = 1 + Math.floor(level/2);
  return [d20, bonus];
}

function waryFunc(level) {
  var bonus = 1 + Math.floor((level-1)/2);
  return bonus;
}

function counterattackFunc(level) {
  var penalty = -5 + Math.floor(level/2);
  return penalty;
}

function camouflageFunc(level) {
  var bonus = 2 + Math.floor(level/2);
  return bonus;
}

function favoredEnemyFunc(level) {
  var d20 = Math.floor((level+1)/2);
  var damage = 1 + Math.floor(level/2);
  return [d20, damage];
}

function nimbleFunc(level) {
  var bonus = 2 + Math.floor(level/2);
  return bonus;
}

function volleyFunc(level) {
  var penalty = 3;// - Math.floor(level/2);
  return penalty;
}

function piercingShotFunc(level) {
  var damage;
  switch (level) {
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
  return damage;
}

// Race Functions
function races() {
  var x = document.getElementById("races");
  var level = Number(x.elements[0].value);
  var metalWorking = metalWorkingFunc(level);
  var breathWeapon = breathWeaponFunc(level);

  document.getElementById("metalWorking").innerHTML = "(" + metalWorking + ")";
  document.getElementById("breathWeapon").innerHTML = breathWeapon;
  document.getElementById("dwargonBreathWeapon").innerHTML = breathWeapon;
}

function breathWeaponFunc(level) {
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

    default: damage = "d6 + 1";
    break;
  }
  return damage;
}

function metalWorkingFunc(level) {
  var metalWorking;
  var metalWorkingNum = -2 + Math.floor(level/2);

  if (metalWorkingNum < 0) {
    metalWorking = "d20 - " + -metalWorkingNum;
  }
  else {
    metalWorking = "d20 + " + metalWorkingNum;
  }
  return metalWorking;
}
