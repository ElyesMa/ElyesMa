function ChangeSrc() {
   let text =document.getElementById("logo").src;
   let position =text.search(/logo2/i);
   if(position>0){
      document.getElementById("logo").src ="/Images/Menu/Logo.png";
   
   }
   else if(position<0){
      document.getElementById("logo").src ="/Images/Menu/Logo2.png";
   }
   
}

function playAudio() { 
   myAudio.loop = true;
   myAudio.volume = 0.07;
   myAudio.playbackRate=1.5;
   myAudio.play(); 

   
 } 

 function PauseAudio() { 
   myAudio.pause(); 
 } 

 
function dragElement(i) {

   
   document.getElementById(i).classList.toggle("bubble-Move");

   myAudio.pause(); 

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0 ;
   
    if (document.getElementById(i)) {
      document.getElementById(i).onmousedown = dragMouseDown;
    }
    else {
  
     document.getElementById(i).onmousedown = dragMouseDown;
   }
   
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.getElementById(i).onmouseup = closeDragElement;
      document.getElementById(i).onmousemove = elementDrag;
  
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.getElementById(i).style.top = (document.getElementById(i).offsetTop - pos2) + "px";
      document.getElementById(i).style.left = (document.getElementById(i).offsetLeft - pos1) + "px";
    
    }
  
    function closeDragElement() {
      document.getElementById(i).onmouseup = null;
      document.getElementById(i).onmousemove = null;
   
     
      Checkforpos();
  
  
    }
  
  }

function Move(i) {
   document.getElementById(i).classList.toggle("bubble-fix");
 

  x=parseInt(i.substring(4,5));
  T=document.getElementById("Lien1").offsetTop;
  L=document.getElementById("Lien1").offsetLeft;

 
  for (var  i=1 ;i<4 ; i++){
       document.getElementById("Lien"+i).style.top=document.getElementById("Lien"+(i+1)).offsetTop+"px";
       document.getElementById("Lien"+i).style.left=document.getElementById("Lien"+(i+1)).offsetLeft+"px";
       
    }

    document.getElementById("Lien"+4).style.top=T+"px";
    document.getElementById("Lien"+4).style.left=L+"px"; 

}

function Checkforpos(){
   var j=0;
   var x=0;
   for (var  i=1 ;i<4 ; i++){
      x=i+1;
   if(document.getElementById("Lien"+i).offsetLeft < document.getElementById("Lien"+x).offsetLeft){
      j=j+1;
      }

  
} 
console.log(j);
if (j==3){
myAudio2.volume = 0.5;
myAudio2.play(); 
alert("WELL DONE , LINKS ARE ACTIVATED");

document.getElementById("About US").href="/About US.html";
document.getElementById("About US").style.color="green";
document.getElementById("Shop").href="/Shop.html";
document.getElementById("Shop").style.color="green";
document.getElementById("Station").href="/Station.html";
document.getElementById("Station").style.color="green";
document.getElementById("Contact Us").href="/Contacts.html";
document.getElementById("Contact Us").style.color="green";
document.getElementById("logo").src ="/Images/Menu/Logo2.png";

document.getElementById("Lien1").removeAttribute("onmousedown");
document.getElementById("Lien2").removeAttribute("onmousedown");
document.getElementById("Lien3").removeAttribute("onmousedown");
document.getElementById("Lien4").removeAttribute("onmousedown");

}
else{
   Move("Lien1");   
}

}

