

let count = 0;

function increment() {
 
count+=1;
document.getElementById('count-el').innerText = count;


}

function save() {
    countStr =count + "-" ;
    document.getElementById('save-el').innerText += countStr ;
  
}




function ageInDays(){
   var birthYear = prompt('when were you born');
   var ages = (2019 - birthYear) * 365;
   var h1 = document.createElement('h1');
   var textAnswer = document.createTextNode('you are :' + ages + 'days old') ;
   h1.setAttribute('id' ,'ages');
   h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1)
}



function start(){
  document.getElementById('ages').remove();
    }

   
function gencat() {
var image = document.createElement('img');
var div = document.getElementById("pic-gen");
image.src="pictures/cat.jpg";
div.appendChild(image);
}


















