const datetimeInput = document.getElementById("date");
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
datetimeInput.value = `${year}-${month}-${day}T${hours}:${minutes}`;

var showed=false;
function openNav() {
  
  showed=!showed
  if (showed) {
    document.getElementById("navbar").style.height = "fit-content";
  }
  else if (!showed) {
    document.getElementById("navbar").style.height = "0";
  }
}

function closeNav() {
  document.getElementById(".").style.width = "0%";
}

console.log('Hello World!');
var image= document.querySelector('.style_images');

function setSrc(src) {
  image.src=src;
}
document.querySelector