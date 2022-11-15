// VLIBRAS
document.getElementById("vlibras").setAttribute("vw","vw");
document.getElementById("vlibras-b").setAttribute("vw-access-button","vw-access-button");
document.getElementById("vlibras-w").setAttribute("vw-plugin-wrapper","vw-plugin-wrapper");
//abrir botao
$("small").click(function () {
  $("ul").toggleClass("open");
 
});
//fechar o botao
$("span").click(function () {
  $("ul").removeClass("open");
 
});

//fontes 
var $btnAumentar = $("#aumentar");
var $btnReset = $("#resertar");
var $btnDiminuir = $("#diminuir");
var $elemento = $("body").find("*");
var fonts = [];
var reset = [];

(function obterTamanhoFonte() {
  for (var i = 0; i < $elemento.length; i++) {
    fonts.push(parseFloat($elemento.eq(i).css('font-size')));
    reset.push(parseFloat($elemento.eq(i).css('font-size')));
  }
})()

$btnAumentar.on('click', function() {
  for (var i = 0; i < $elemento.length; i++) {
    ++fonts[i];
    $elemento.eq(i).css('font-size', fonts[i]);
  }
});

$btnDiminuir.on('click', function() {
  for (var i = 0; i < $elemento.length; i++) {
    --fonts[i];
    $elemento.eq(i).css('font-size', fonts[i]);
  }
});

$btnReset.on('click', function() {
  for (var i = 0; i < $elemento.length; i++) {
    $elemento.eq(i).css('font-size', reset[i]);
    fonts[i] = reset[i];
  }
});

// pegar os cookies  w3schools
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
 // contraste

 (function () {
  var Contrast = {
      storage: 'contrastState',
      cssClass: 'contrast',
      currentState: null,
      check: checkContrast,
      getState: getContrastState,
      setState: setContrastState,
      toogle: toogleContrast,
      updateView: updateViewContrast
  };

  window.toggleContrast = function () { Contrast.toogle(); };

  Contrast.check();

  function checkContrast() {
      this.updateView();
  }

  function getContrastState() {
      return localStorage.getItem(this.storage) === 'true';
  }

  function setContrastState(state) {
      localStorage.setItem(this.storage, '' + state);
      this.currentState = state;
      this.updateView();
  }

  function updateViewContrast() {
      var body = document.body;
      
      if (!body) return;

      if (this.currentState === null)
          this.currentState = this.getState();

      if (this.currentState)
          body.classList.add(this.cssClass);
      else
          body.classList.remove(this.cssClass);
  }

  function toogleContrast() {
      this.setState(!this.currentState);
  }
})();

var reply_click = function()
{
  window.toggleContrast()
}

var reply_click2 = function()
{
  window.toggleContrast()
}

document.getElementById('to-high-contrast').onclick = reply_click;
document.getElementById('to-high-contrast').onkeydown = reply_click2;
