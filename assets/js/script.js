// changer l'image au survol de celle-ci par la deuxième pour les 5 images en 1 seule fonction
// Ici nous allons chercher la deuxième image
function changeImage(img){
  document.getElementById(img).src ='assets/images/' + img + '_2.jpg';
}
// et ici nous allons récupérer la première image
function resetImage(img){
  document.getElementById(img).src ='assets/images/' + img + '.jpg';
}
