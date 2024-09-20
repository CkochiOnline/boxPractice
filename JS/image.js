// Change image.


let on = 0;  // 1 = true, 0 = false


function changeImage() {

    if (on == 0) {
        document.getElementById('imageChange').src = 'JS/IMG/pixel.art.monkey.jpg';
        on = 1;
    }
    else if (on == 1) {
        document.getElementById('imageChange').src = 'JS/IMG/pixel.art.panda.jpg';
        on = 0;
    }
}
