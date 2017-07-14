var enclosChant = $('#chant');
var enclosBeat = $('#beat');



var chantBlanche = new Howl({
  src: ['./sounds/chantBlanche.ogg'],
  loop: true,
  mute:true
});
var chantMarron = new Howl({
  src: ['./sounds/chantMarron.ogg'],
  loop: true,
  mute:true
});
var chantGrise = new Howl({
  src: ['./sounds/chantGrise.ogg'],
  loop: true,
  mute:true
});

var beatBlanche = new Howl({
  src: ['./sounds/beatBlanche.ogg'],
  loop: true,
  mute:true
});
var beatMarron = new Howl({
  src: ['./sounds/beatMarron.ogg'],
  loop: true,
  mute:true
});
var beatGrise = new Howl({
  src: ['./sounds/beatGrise.ogg'],
  loop: true,
  mute:true
});

chantBlanche.play();
chantGrise.play();
chantMarron.play();
beatBlanche.play();
beatGrise.play();
beatMarron.play();

var blanche = $('#blanche');
var marron = $('#marron');
var grise = $('#grise');
var blanche2 = $('#blanche2');
var marron2 = $('#marron2');
var grise2 = $('#grise2');



  blanche.draggable({
    cursor:'move'
  });
  marron.draggable({
    cursor:'move'
  });
  grise.draggable({
    cursor:'move'
  });
  blanche2.draggable({
    cursor:'move'
  });
  marron2.draggable({
    cursor:'move'
  });
  grise2.draggable({
    cursor:'move'
  });

  enclosChant.droppable({
      drop : DropChant,
      over : UndropChant
  });

  function DropChant(event, ui) {
    var draggableId = ui.draggable.attr("id");
    var droppableId = $(this).attr("id");
    if (draggableId.includes("2")) {
      draggableIdMod = draggableId.substring(0, draggableId.length - 1);
      $('#'+draggableId).attr("src","./img/"+draggableIdMod+".gif");
    }else{
      $('#'+draggableId).attr("src","./img/"+draggableId+".gif");
    }
    //cot.play();
    if (draggableId=="blanche"||draggableId=="blanche2") {
      chantBlanche.mute(false);
    } else if (draggableId=="marron"||draggableId=="marron2"){
      chantMarron.mute(false);
    } else if (draggableId=="grise"||draggableId=="grise2"){
      chantGrise.mute(false);
    }

  }

  function UndropChant(event, ui){
    var draggableId = ui.draggable.attr("id");
    var droppableId = $(this).attr("id");
    if (draggableId.includes("2")) {
      draggableIdMod = draggableId.substring(0, draggableId.length - 1);
      $('#'+draggableId).attr("src","./img/"+draggableIdMod+".png");
    }else{
      $('#'+draggableId).attr("src","./img/"+draggableId+".png");
    }

    if (draggableId=="blanche"||draggableId=="blanche2") {
      chantBlanche.mute(true);
    } else if (draggableId=="marron"||draggableId=="marron2"){
      chantMarron.mute(true);
    } else if (draggableId=="grise"||draggableId=="grise2"){
      chantGrise.mute(true);
    }
  }






  enclosBeat.droppable({
      drop : DropBeat,
      over : UndropBeat
  });

  function DropBeat(event, ui) {
    var draggableId = ui.draggable.attr("id");
    var droppableId = $(this).attr("id");
    if (draggableId.includes("2")) {
      draggableIdMod = draggableId.substring(0, draggableId.length - 1);
      $('#'+draggableId).attr("src","./img/"+draggableIdMod+".gif");
    }else{
      $('#'+draggableId).attr("src","./img/"+draggableId+".gif");
    }

    //cot.play();
    if (draggableId=="blanche"||draggableId=="blanche2") {
      beatBlanche.mute(false);
    } else if (draggableId=="marron"||draggableId=="marron2"){
      beatMarron.mute(false);
    } else if (draggableId=="grise"||draggableId=="grise2"){
      beatGrise.mute(false);
    }

  }

  function UndropBeat(event, ui){
    var draggableId = ui.draggable.attr("id");
    var droppableId = $(this).attr("id");
    if (draggableId.includes("2")) {
      draggableIdMod = draggableId.substring(0, draggableId.length - 1);
      $('#'+draggableId).attr("src","./img/"+draggableIdMod+".png");
    }else{
      $('#'+draggableId).attr("src","./img/"+draggableId+".png");
    }

    if (draggableId=="blanche"||draggableId=="blanche2") {
      beatBlanche.mute(true);
    } else if (draggableId=="marron"||draggableId=="marron2"){
      beatMarron.mute(true);
    } else if (draggableId=="grise"||draggableId=="grise2"){
      beatGrise.mute(true);
    }
  }
