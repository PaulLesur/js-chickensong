/*
 * Classe Poule qui définit une poule selon plusieurs caractéristiques.
 */
class Poule {
  /*
   * Constructeur de poule (autre qu'un oeuf).
   * @param {String} couleur : Couleur de la poule
   */
  constructor(couleur) {
    this.couleur = couleur;
    this.id = this.couleur+Math.floor((Math.random() * 1000000) + 1);
    this.chant1 = new Howl({
      src: ['./sounds/'+this.couleur+'1.ogg'],
      loop: true,
      mute:true
    });
    this.chant2 = new Howl({
      src: ['./sounds/'+this.couleur+'2.ogg'],
      loop: true,
      mute:true
    });
  }

  /*
   * Fonction qui retourne le code HTML de la poule. C'est une balise <img/> ayant pour ID l'ID de la poule.
   */
  getHTMLCode(){
    return '<img class="poule" id="'+this.id+'" src="./img/'+this.couleur+'.png" alt="poule"/>';
  }

  /*
   * Fonction qui permet d'ajouter la poule au DOM dans l'enclos neutre.
   */
  ajouterPoule(){
    $(this.getHTMLCode()).appendTo("#enclosNeutre");
  }

  /*
   * Méthode qui permet de changer l'image de la poule selon l'extension qu'on lui passe en paramètre.
   * @param {String} extension : extension de l'image.
   */
  animer(extension) {
    $("#"+this.id).attr("src", "./img/"+this.couleur+extension);
  }

  /*
   * Méthode qui permet de faire chanter la poule, on lui passe en paramètre le numéro du chant à chanter.
   * @param {Number} numChant : numéro du chant à chanter.
   */
  chanter(numChant){
    if (numChant==1) {
      //this.chant1.play();
      this.chant1.mute(false);
    } else if (numChant==2) {
      this.chant2.mute(false);
    }
  }

  getPosition(){
    return $("#"+this.id).position();
  }
}

class Enclos {
  constructor(id, texte) {
    this.height = 374;
    this.width = 361;
    this.id = id;
    this.texte = texte;
  }

  getHTMLCode(){
    return '<div id="'+this.id+'" class="enclos">\n<h1 class="big">'+this.texte+'</h1>\n</div>';
  }

  getPosition(){
    return $("#"+this.id).position();
  }

  ajouter(){
    $(this.getHTMLCode()).appendTo("#enclosDivers");
  }

  verifPoule(poule){
    var xPoule = poule.getPosition().left;
    var yPoule = poule.getPosition().top;
    if(xPoule>=this.getPosition().left &&
      xPoule<=(this.getPosition().left+this.width) &&
      yPoule>=this.getPosition().top &&
      yPoule<=(this.getPosition().top+this.height)){
      return true;
    } else {
      return false;
    }
  }
}



/*
 * Définition des propriétés de la classe poule
 */
interact('.poule')
  .draggable({
    inertia: true,
    restrict: {
      restriction: {
        left: 0,
        right: 666666666, // TODO Changer pour correspondre à la tailler de l'écran.
        top: 0,
        bottom: 666666666
      },
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    autoScroll: false,
    onmove: dragMoveListener,
    onend: function (event) {
      var poule = poules[event.target.getAttribute("id")];

      for (var enc in enclos) {
        if (enclos.hasOwnProperty(enc)) {
          if (enclos[enc].verifPoule(poule)) {
            poule.chanter(enclos[enc].id);
            poule.animer(".gif");
          }
        }
      }

    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);

    var poule = poules[event.target.getAttribute("id")];
    poule.animer(".png");
    poule.chant1.mute(true);
    poule.chant2.mute(true);
  }



/*
 * Variables pour le cas de test !
 */

 //Poules
var poules = {};

var p1 = new Poule("blanche");
p1.ajouterPoule();
var p2 = new Poule("marron")
p2.ajouterPoule();

poules[p1.id] = p1;
poules[p2.id] = p2;

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

enclos[enclosMelodies.id] = enclosMelodies;
enclos[enclosBeats.id] = enclosBeats;
