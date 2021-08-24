var clicks = 0;

function runFunction(){
    document.getElementById('judul-kiri').style.color = 'blue';
    document.getElementById('paragraf-kiri').style.color = 'red';
    clicks += 1;

    const gambar = document.getElementById('gambar');

    gambar.classList.toggle('pindah');

    document.getElementById('clicks').innerHTML = 'Button di klik ' +clicks+ ' kali';
}