import Dice from './nature.png';
function addImage(){
    const img = document.createElement('img');
    img.alt = 'Dice';
    img.width= 300;
    img.src = Dice;

    const body= document.querySelector('body');
    body.appendChild(img);
}

export default addImage; 