// L'instruction switch évalue une expression et, selon le résultat obtenu et le cas associé, exécute les instructions correspondantes.
function changeimage(n) {
switch (n) {
case 1:
document.getElementById("image1").src="assets/img/image1_2.jpg";
break;
case 2:
document.getElementById("image2").src="assets/img/image2_2.jpg";
break;
case 3:
document.getElementById("image3").src="assets/img/image3_2.jpg";
break;
case 4:
document.getElementById("image4").src="assets/img/image4_2.jpg";
break;
case 5:
document.getElementById("image5").src="assets/img/image5_2.jpg";
break;
}
}
function remettreimage(n) {
switch (n) {
case 1:
document.getElementById("image1").src="assets/img/image1.jpg";
break;
case 2:
document.getElementById("image2").src="assets/img/image2.jpg";
break;
case 3:
document.getElementById("image3").src="assets/img/image3.jpg";
break;
case 4:
document.getElementById("image4").src="assets/img/image4.jpg";
break;
case 5:
document.getElementById("image5").src="assets/img/image5.jpg";
break;
}
}
