function showfunction(){
document.getElementById("cart").classList.toggle("show-cart");
}


function likefunction(i){
    if (document.getElementById("like"+i).style.filter=="grayscale(0%)"){
        document.getElementById("like"+i).style.filter="grayscale(100%)";
    }
    else{
    document.getElementById("like"+i).style.filter="grayscale(0%)";
    }
}


function itemNB(event) {
var AlrCreat=false;
var i = event.target.id;
var title = document.getElementById('itemtitle'+i).innerHTML
var price = document.getElementById('itemprice'+i).innerHTML
var i=parseInt(document.getElementById("itemsnumber").innerHTML);

    if(i>0){
    for(var j=1;j<=i;j++){    
    if(document.getElementById('titre'+j)!=null){
        if(document.getElementById('titre'+j).innerHTML==title)
        {
            AlrCreat=true;
        }
    }
    }
    }

    if(AlrCreat==false){
        document.getElementById("itemsnumber").innerHTML=parseInt(document.getElementById("itemsnumber").innerHTML)+1;
        document.getElementById("itemsnumber").style.backgroundColor="red";
        document.getElementById("itemsnumber").style.color="white";
        document.getElementById("itemsnumber").style.borderRadius="50%";
        addElement(title,price);
        Total();
    }
    else
    {
        alert("you have already added this item to your shopcart!"); 
    }

    document.getElementById("Paybutton").setAttribute("class","btn btn-success");
}



function addElement (title,price) {
    var newDiv = document.createElement("div");
    var i= parseInt(document.getElementById("itemsnumber").innerHTML);
    newDiv.setAttribute('id','Element'+i);

    img = document.createElement('img');
    img.src ="/images/Logoshopcart.jpg";
    img.setAttribute('width','35px');
    img.setAttribute('height','35px');
    newDiv.appendChild(img);
    
    titre = document.createElement('titre');
    titre.setAttribute('class','containeritems');
    titre.setAttribute('id','titre'+i);
    titre.setAttribute('overflow','hidden');
    titre.innerHTML=title;
    newDiv.appendChild(titre);

    texte = document.createElement('texte');
    texte.setAttribute('class','containeritems');
    texte.innerHTML=": ";
    newDiv.appendChild(texte);

    prix = document.createElement('prix');
    prix.setAttribute('class','containeritems');
    prix.setAttribute('id','prix'+i);
    prix.innerHTML=price;
    newDiv.appendChild(prix);

    texte = document.createElement('texte');
    texte.setAttribute('class','containeritems');
    texte.innerHTML="TND";
    newDiv.appendChild(texte);
    
    texte = document.createElement('texte');
    texte.setAttribute('class','containeritems');
    texte.innerHTML="/Qté : ";
    newDiv.appendChild(texte);

    Qté = document.createElement('Qté');
    Qté.setAttribute('class','containeritems');
    Qté.setAttribute('id','Qté'+i);
    Qté.innerHTML=1;
    newDiv.appendChild(Qté);

    texte = document.createElement('texte');
    texte.setAttribute('class','containeritems');
    texte.innerHTML=" ";
    newDiv.appendChild(texte);
    

    button = document.createElement('button');        
    button.setAttribute('id',i);
    button.setAttribute('onclick',"SubtractQte(event)");
    button.innerHTML="-";
    button.setAttribute('width','100px');
    newDiv.appendChild(button);
    
    button = document.createElement('button');   
    button.setAttribute('id',i);     
    button.setAttribute('onclick',"AddQte(event)");
    button.setAttribute('width','100px');
    button.innerHTML="+";
    newDiv.appendChild(button);

    img = document.createElement('img');
    img.src ="/images/delete.png";
    img.setAttribute('width','20px');
    img.setAttribute('height','20px');
    img.setAttribute('id',i);     
    img.setAttribute('onclick',"RemoveElement(event)");
    newDiv.appendChild(img);





    var currentDiv = document.getElementById('container');
    currentDiv.appendChild(newDiv);


    
}

function RemoveElement(event){
    var i = event.target.id;
    element = document.getElementById("Element"+i);
    element.remove(); 
    document.getElementById("itemsnumber").innerHTML=parseInt(document.getElementById("itemsnumber").innerHTML)-1;
    Total();

    if(parseInt(document.getElementById("itemsnumber").innerHTML)==0){
        document.getElementById("itemsnumber").style.backgroundColor="transparent";
        document.getElementById("itemsnumber").style.color="transparent";
        document.getElementById("Paybutton").setAttribute("class","btn btn-secondary");

    }

}


function Removeall(){

    for(i=0;i<=8;i++){
    element = document.getElementById("Element"+i);
    if(element!=null){
    element.remove(); 
    }

    }
    document.getElementById("itemsnumber").innerHTML=0;
    document.getElementById("Total").innerHTML=0;
    document.getElementById("itemsnumber").style.backgroundColor="transparent";
    document.getElementById("itemsnumber").style.color="transparent";

    document.getElementById("Paybutton").setAttribute("class","btn btn-secondary");

}


function Total(){
var somme=0;
for (var  i=1 ;i<=8 ; i++){
    if(document.getElementById('prix'+i)!=null){
    somme+=parseInt(document.getElementById('prix'+i).innerHTML)*parseInt(document.getElementById('Qté'+i).innerHTML);
    }
 
}

document.getElementById("Total").innerHTML=somme;
}

function AddQte(event){
var i = event.target.id;
document.getElementById("Qté"+i).innerHTML=parseInt(document.getElementById('Qté'+i).innerHTML)+1;
Total()

}

function SubtractQte(event){
    var i = event.target.id;
    if(document.getElementById("Qté"+i).innerHTML>1){
    document.getElementById("Qté"+i).innerHTML=parseInt(document.getElementById('Qté'+i).innerHTML)-1;
    Total()
    }
    }


function PayShow(){
if(document.getElementById("itemsnumber").innerHTML>0){
document.getElementById("payment").style.display = "block";
}

}

function PayHide(){
document.getElementById("payment").style.display = "none";

}

function validateForm() {
    var Name = document.PayForm.Name.value
    var FamilyName = document.PayForm.FamilyName.value
    var Adress = document.PayForm.Adress.value
    var PhoneNumber = document.PayForm.PhoneNumber.value
    var mail = document.PayForm.Email.value
  
   if (Name.length==0)
    return alert(`Name is required`)
    if (FamilyName.length==0)
    return alert(`FamilyName is required`)
    if (Adress.length==0)
    return alert(`Adress is required`)
    if (PhoneNumber.length==0)
    return alert(`PhoneNumber is required`)
    if (mail.length==0)
    return alert(`Email is required`)

    sendEmail(Name,FamilyName,mail);
   }


  
   function sendEmail(Name,FamilyName,mail) {
    var message1=Name+" "+FamilyName+" "+"Items purshased : ";

        for (var i=1 ; i<=document.getElementById("itemsnumber").innerHTML;i++){
        message1=message1+"<br>"+i+"-"+document.getElementById('titre'+i).innerHTML+"/Prix: "+document.getElementById('prix'+i).innerHTML+"/Qté: "+document.getElementById('Qté'+i).innerHTML ;
        }
        message1=message1+"<br>"+"Total purshase : "+document.getElementById("Total").innerHTML+" TND"+"<br>"+"Thank you for your interest, one of our agents will contact you as soon as possible"
        Email.send({
        Host : "smtp.gmail.com",
        Username : "gomycode2022@gmail.com",
        Password : "Azerty12345+",
        To : mail,
        From : "gomycode2022@gmail.com",
        Subject : "Confirmation email",
        Body : message1,
    }).then(
      message => alert(Name+" "+FamilyName+" "+"your purchase is validated , you will receive a confirmation Email immediately")
    );
    Removeall();
    PayHide();
    showfunction();
    alert("Sending MAIL to "+mail+" in progress");
    }
