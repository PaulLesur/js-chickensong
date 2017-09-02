/*
 * Variables pour le cas de test !
 */

 //Poules
var poules = {};

var p1 = new Poule("blanche");
p1.ajouterPoule();
var p2 = new Poule("marron");
p2.ajouterPoule();
var p3 = new Poule("grise");
p3.ajouterPoule();

poules[p1.id] = p1;
poules[p2.id] = p2;
poules[p3.id] = p3;

for (var poule in poules) {
  if (poules.hasOwnProperty(poule)) {
    (poules[poule]).chant1.play();
    (poules[poule]).chant2.play();
  }
}


//Enclos
var enclos = {};

var enclosMelodies = new Enclos(1, "Mélodies");
enclosMelodies.ajouter();
var enclosBeats = new Enclos(2, "Fond Sonore");
enclosBeats.ajouter();
var poubelle = new Enclos("guillotine", "Guillotine");
poubelle.ajouter();


enclos[enclosMelodies.id] = enclosMelodies;
enclos[enclosBeats.id] = enclosBeats;
enclos[poubelle.id] = poubelle;
