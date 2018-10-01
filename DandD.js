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
  var will = -4 + Math.floor(intelligence/3 + constitution/10);
  var fortitude = -4 + Math.floor(constitution/4 + strength/8);

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
  "Mana: " + mana + "<br/>" + 
  "Will: " + will + "<br/>" + 
  "Fortitude: " + fortitude + "<br/>" + 
  "Hit:<br/>" + 
  "Damage:<br/>" 
  ;
}