let clicks = 0;
let custompopup = document.getElementById('customPopUp');

function runFunction(){
    document.getElementById('judul-kiri').style.color = 'blue';
    document.getElementById('paragraf-kiri').style.color = 'red';
    clicks += 1;

    const gambar = document.getElementById('gambar');

    gambar.classList.toggle('pindah');

    document.getElementById('clicks').innerHTML = 'Button di klik ' +clicks+ ' kali';

}

let modal = document.getElementById("PopUpModal");

let btn = document.getElementById("btnPopUp");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}