function ChangeSrc(i) {

   if(i=="option1"){
      document.getElementById("Video").src ="/Media/MDP.mp4";
      }
   else  if(i=="option2"){
      document.getElementById("option1").classList.remove("active");
      document.getElementById("Video").src ="/Media/MGA.mp4";
   }
   console.log(i);
}
