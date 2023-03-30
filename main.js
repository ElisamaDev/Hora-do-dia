function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes();

  msg.innerHTML = `Agora são ${hora}:${minutos} horas.`;
  if (hora >= 0 && hora < 12) {
    //BOM DIA !
    img.src = "fotomanha.jpg";
    document.body.style.background = "#cbac6df5";
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE !
    img.src = "fototarde.jpg";
    document.body.style.background = "#905c6a";
  } else {
    //BOA NOITE !
    img.src = "fotonoite.jpg";
    document.body.style.background = "#245680";
  }
}
