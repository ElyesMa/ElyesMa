//afficher le contenu du panier
function showfunction(){
    document.getElementById("cart").classList.toggle("show-cart");
    }
    
    //Aimer un produit
    function likefunction(i){
        if (document.getElementById("like"+i).style.filter=="grayscale(0%)"){
            document.getElementById("like"+i).style.filter="grayscale(100%)";
        }
        else{
        document.getElementById("like"+i).style.filter="grayscale(0%)";
        }
    }
    
    //Nombre des articles dans le panier
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
            addElementcart(title,price);
            Total();
        }
        else
        {
            alert("you have already added this item to your shopcart!"); 
        }
    
        document.getElementById("Paybutton").setAttribute("class","btn btn-success");
    }
    
    
    //Ajouter un Article au panier
    function addElementcart (title,price) {
        var newDiv = document.createElement("div");
        var i= parseInt(document.getElementById("itemsnumber").innerHTML);
        newDiv.setAttribute('id','Element'+i);
    
        img = document.createElement('img');
        img.src ="/Images/Shop/Logoshopcart.jpg";
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
        button.setAttribute('id',parseInt(-i));
        button.setAttribute('onclick',"ChangQte(event)");
        button.innerHTML="-";
        button.setAttribute('width','100px');
        newDiv.appendChild(button);
        
        button = document.createElement('button');   
        button.setAttribute('id',i);     
        button.setAttribute('onclick',"ChangQte(event)");
        button.setAttribute('width','100px');
        button.innerHTML="+";
        newDiv.appendChild(button);
    
        img = document.createElement('img');
        img.src ="/Images/Shop/delete.png";
        img.setAttribute('width','20px');
        img.setAttribute('height','20px');
        img.setAttribute('id',i);     
        img.setAttribute('onclick',"RemoveElement(event)");
        newDiv.appendChild(img);
    
    
    
    
    
        var currentDiv = document.getElementById('container');
        currentDiv.appendChild(newDiv);
    
    
        
    }
    
    //Retirer un artile du panier
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
    
    //vider le panier
    function Removeall(Element){
    
        for(i=0;i<=8;i++){
        element = document.getElementById(Element+i);
        if(element!=null){
        element.remove(); 
        }
    
        }
        if(Element=="Element"){
        document.getElementById("itemsnumber").innerHTML=0;
        document.getElementById("Total").innerHTML=0;
        document.getElementById("itemsnumber").style.backgroundColor="transparent";
        document.getElementById("itemsnumber").style.color="transparent";  
        document.getElementById("Paybutton").setAttribute("class","btn btn-secondary");
        }
        else if(Element=="Product"){
        document.getElementById('Productsnumber').innerHTML=0;
        }
    }
    
    //Total a payer
    function Total(){
    var somme=0;
    for (var  i=1 ;i<=8 ; i++){
        if(document.getElementById('prix'+i)!=null){
        somme+=parseInt(document.getElementById('prix'+i).innerHTML)*parseInt(document.getElementById('Qté'+i).innerHTML);
        }
     
    }
    
    document.getElementById("Total").innerHTML=somme;
    }
    
    //ajouter ou soustraire Qté de l'article a acheter
    function ChangQte(event){
        var i = Math.abs(event.target.id);
        if(parseInt(document.getElementById('Qté'+i).innerHTML)+parseInt(event.target.id)/Math.abs(parseInt(event.target.id))>=1){
        document.getElementById("Qté"+i).innerHTML=parseInt(document.getElementById('Qté'+i).innerHTML)+parseInt(event.target.id)/Math.abs(parseInt(event.target.id));
        Total()
        }
        }
    
    //Activation du boutton pay (le panier doit contenir au moins un article)
    function PayShow(){
    if(document.getElementById("itemsnumber").innerHTML>0){
    document.getElementById("payment").style.display = "block";
    }
    
    }
    //Désactivation du boutton pay (Si le panier est vide)
    function PayHide(){
    document.getElementById("payment").style.display = "none";
    
    }
    
    //verifivcation de la saisie du menu de paie
    function validateForm() {
        var Name = document.PayForm.Name.value
        var FamilyName = document.PayForm.FamilyName.value
        var Adress = document.PayForm.Adress.value
        var PhoneNumber = document.PayForm.PhoneNumber.value
        var mail = document.PayForm.Email.value 
        var atposition=mail.indexOf("@");  
        var dotposition=mail.lastIndexOf(".");  
      
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
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=mail.length)
        return alert("Please enter a valid e-mail address")
    
        sendEmail(Name,FamilyName,mail);
       }
    
    
       //l'envoi de l'EMAIL 
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
    
        function myFunction(){
            var ModelfieldsSelectedValue = Modelfields.options[Modelfields.selectedIndex].value;
			if (ModelfieldsSelectedValue=='MERCEDES')
            {				
				Type.options.length=0;
				Type.options[0] = new Option('--Select--', '');
                Type.options[1] = new Option('Mercedes 1017 ( De 1975 à 2002 )', 'Mercedes 1017 ( De 1975 à 2002 )');
                Type.options[2] = new Option('Mercedes 170 ( Jusqu en 1979 )', 'Mercedes 170 ( Jusqu en 1979 )');
                Type.options[3] = new Option('Mercedes 180 ( Jusqu en 1979 )', 'Mercedes 180 ( Jusqu en 1979 )');
                Type.options[4] = new Option('Mercedes 190 ( De 1950 à 1993 )', 'Mercedes 190 ( De 1950 à 1993 )');
                Type.options[5] = new Option('Mercedes 200 ( De 1977 à 1993 )', 'Mercedes 200 ( De 1977 à 1993 )');
                Type.options[6] = new Option('Mercedes 220 ( De 1956 à 1996 )', 'Mercedes 220 ( De 1956 à 1996 )');
                Type.options[7] = new Option('Mercedes 230 ( De 1965 à 1992 )', 'Mercedes 230 ( De 1965 à 1992 )');
                Type.options[8] = new Option('Mercedes 240 ( De 1975 à 1985 )', 'Mercedes 240 ( De 1975 à 1985 )');
                Type.options[9] = new Option('Mercedes 250 ( De 1960 à 1993 )', 'Mercedes 250 ( De 1960 à 1993 )');
                Type.options[10] = new Option('Mercedes 260 ( De 1986 à 1992 )', 'Mercedes 260 ( De 1986 à 1992 )');
                Type.options[11] = new Option('Mercedes 280 ( Jusqu en 1993 )', 'Mercedes 280 ( Jusqu en 1993 )');
                Type.options[12] = new Option('Mercedes 300 ( De 1954 à 2000 )', 'Mercedes 300 ( De 1954 à 2000 )');
                Type.options[13] = new Option('Mercedes 319 ( De 1960 à 1970 )', 'Mercedes 319 ( De 1960 à 1970 )');
                Type.options[14] = new Option('Mercedes 320 ( De 1992 à 1993 )', 'Mercedes 320 ( De 1992 à 1993 )');
                Type.options[15] = new Option('Mercedes 350 ( De 1975 à 1985 )', 'Mercedes 350 ( De 1975 à 1985 )');
                Type.options[16] = new Option('Mercedes 380 ( De 1975 à 1985 )', 'Mercedes 380 ( De 1975 à 1985 )');
                Type.options[17] = new Option('Mercedes 400 ( De 1992 à 1993 )', 'Mercedes 400 ( De 1992 à 1993 )');
                Type.options[18] = new Option('Mercedes 408 ( De 1985 à 1997 )', 'Mercedes 408 ( De 1985 à 1997 )');
                Type.options[19] = new Option('Mercedes 409 ( De 1977 à 1995 )', 'Mercedes 409 ( De 1977 à 1995 )');
                Type.options[20] = new Option('Mercedes 420 ( De 1975 à 1985 )', 'Mercedes 420 ( De 1975 à 1985 )');
                Type.options[21] = new Option('Mercedes 450 ( De 1975 à 1985 )', 'Mercedes 450 ( De 1975 à 1985 )');
                Type.options[22] = new Option('Mercedes 500 ( De 1982 à 1993 )', 'Mercedes 500 ( De 1982 à 1993 )');
                Type.options[23] = new Option('Mercedes 508 ( De 1980 à 1991 )', 'Mercedes 508 ( De 1980 à 1991 )');
                Type.options[24] = new Option('Mercedes 560 ( De 1985 à 1992 )', 'Mercedes 560 ( De 1985 à 1992 )');
                Type.options[25] = new Option('Mercedes 600 ( De 1991 à 1993 )', 'Mercedes 600 ( De 1991 à 1993 )');
                Type.options[26] = new Option('Mercedes 709 ( Depuis 1985 )', 'Mercedes 709 ( Depuis 1985 )');
                Type.options[27] = new Option('Mercedes Actros ( De 1995 à 2010 )', 'Mercedes Actros ( De 1995 à 2010 )');
                Type.options[28] = new Option('Mercedes Antos ( Depuis 2010 )', 'Mercedes Antos ( Depuis 2010 )');
                Type.options[29] = new Option('Mercedes Atego ( Depuis 1995 )', 'Mercedes Atego ( Depuis 1995 )');
                Type.options[30] = new Option('Mercedes Axor ( De 1995 à 2010 )', 'Mercedes Axor ( De 1995 à 2010 )');
                Type.options[31] = new Option('Mercedes Citan ( Depuis 2012 )', 'Mercedes Citan ( Depuis 2012 )');
                Type.options[32] = new Option('Mercedes Cl ( De 1992 à 2014 )', 'Mercedes Cl ( De 1992 à 2014 )');
                Type.options[33] = new Option('Mercedes Cla ( Depuis 2013 )', 'Mercedes Cla ( Depuis 2013 )');
                Type.options[34] = new Option('Mercedes Classe A ( Depuis 1997 )', 'Mercedes Classe A ( Depuis 1997 )');
                Type.options[35] = new Option('Mercedes Classe B ( Depuis 2005 )', 'Mercedes Classe B ( Depuis 2005 )');
                Type.options[36] = new Option('Mercedes Classe C ( Depuis 1993 )', 'Mercedes Classe C ( Depuis 1993 )');
                Type.options[37] = new Option('Mercedes Classe Clc ( De 2008 à 2011 )', 'Mercedes Classe Clc ( De 2008 à 2011 )');
                Type.options[38] = new Option('Mercedes Classe Cls ( Depuis 2004 )', 'Mercedes Classe Cls ( Depuis 2004 )');
                Type.options[39] = new Option('Mercedes Classe E ( Depuis 1992 )', 'Mercedes Classe E ( Depuis 1992 )');
                Type.options[40] = new Option('Mercedes Classe G ( Depuis 1979 )', 'Mercedes Classe G ( Depuis 1979 )');
                Type.options[41] = new Option('Mercedes Classe Gl ( De 2006 à 2015 )', 'Mercedes Classe Gl ( De 2006 à 2015 )');
                Type.options[42] = new Option('Mercedes Classe Glk ( De 2008 à 2015 )', 'Mercedes Classe Glk ( De 2008 à 2015 )');
                Type.options[43] = new Option('Mercedes Classe M ( De 1998 à 2015 )', 'Mercedes Classe M ( De 1998 à 2015 )');
                Type.options[44] = new Option('Mercedes Classe R ( De 2006 à 2013 )', 'Mercedes Classe R ( De 2006 à 2013 )');
                Type.options[45] = new Option('Mercedes Classe S ( Depuis 1959 )', 'Mercedes Classe S ( Depuis 1959 )');
                Type.options[46] = new Option('Mercedes Classe T ( Depuis 2021 )', 'Mercedes Classe T ( Depuis 2021 )');
                Type.options[47] = new Option('Mercedes Classe V ( Depuis 1996 )', 'Mercedes Classe V ( Depuis 1996 )');
                Type.options[48] = new Option('Mercedes Classe X ( Depuis 2017 )', 'Mercedes Classe X ( Depuis 2017 )');
                Type.options[49] = new Option('Mercedes Clk ( De 1997 à 2012 )', 'Mercedes Clk ( De 1997 à 2012 )');
                Type.options[50] = new Option('Mercedes Eqa ( Depuis 2021 )', 'Mercedes Eqa ( Depuis 2021 )');
                Type.options[51] = new Option('Mercedes Eqb ( Depuis 2021 )', 'Mercedes Eqb ( Depuis 2021 )');
                Type.options[52] = new Option('Mercedes Eqe ( Depuis 2022 )', 'Mercedes Eqe ( Depuis 2022 )');
                Type.options[53] = new Option('Mercedes Eqs ( Depuis 2021 )', 'Mercedes Eqs ( Depuis 2021 )');
                Type.options[54] = new Option('Mercedes Eqt ( Depuis 2021 )', 'Mercedes Eqt ( Depuis 2021 )');
                Type.options[55] = new Option('Mercedes Eqv ( Depuis 2020 )', 'Mercedes Eqv ( Depuis 2020 )');
                Type.options[56] = new Option('Mercedes Gamme T1 ( De 1988 à 1995 )', 'Mercedes Gamme T1 ( De 1988 à 1995 )');
                Type.options[57] = new Option('Mercedes Gla ( Depuis 2013 )', 'Mercedes Gla ( Depuis 2013 )');
                Type.options[58] = new Option('Mercedes Glb ( Depuis 2019 )', 'Mercedes Glb ( Depuis 2019 )');
                Type.options[59] = new Option('Mercedes Glc ( Depuis 2015 )', 'Mercedes Glc ( Depuis 2015 )');
                Type.options[60] = new Option('Mercedes Glc Coupe ( Depuis 2016 )', 'Mercedes Glc Coupe ( Depuis 2016 )');
                Type.options[61] = new Option('Mercedes Gle ( Depuis 2015 )', 'Mercedes Gle ( Depuis 2015 )');
                Type.options[62] = new Option('Mercedes Gle Coupe ( Depuis 2015 )', 'Mercedes Gle Coupe ( Depuis 2015 )');
                Type.options[63] = new Option('Mercedes Gls ( Depuis 2015 )', 'Mercedes Gls ( Depuis 2015 )');
                Type.options[64] = new Option('Mercedes Marco Polo ( Depuis 2016 )', 'Mercedes Marco Polo ( Depuis 2016 )');
                Type.options[65] = new Option('Mercedes Sl ( Depuis 1963 )', 'Mercedes Sl ( Depuis 1963 )');
                Type.options[66] = new Option('Mercedes Slc ( Depuis 2016 )', 'Mercedes Slc ( Depuis 2016 )');
                Type.options[67] = new Option('Mercedes Slk ( De 1996 à 2016 )', 'Mercedes Slk ( De 1996 à 2016 )');
                Type.options[68] = new Option('Mercedes Slr ( De 2003 à 2008 )', 'Mercedes Slr ( De 2003 à 2008 )');
                Type.options[69] = new Option('Mercedes Sls ( De 2009 à 2018 )', 'Mercedes Sls ( De 2009 à 2018 )');
                Type.options[70] = new Option('Mercedes Sprinter ( Depuis 1990 )', 'Mercedes Sprinter ( Depuis 1990 )');
                Type.options[71] = new Option('Mercedes Unimog ( De 1950 à 2012 )', 'Mercedes Unimog ( De 1950 à 2012 )');
                Type.options[72] = new Option('Mercedes Vaneo ( De 2001 à 2012 )', 'Mercedes Vaneo ( De 2001 à 2012 )');
                Type.options[73] = new Option('Mercedes Viano ( De 2003 à 2014 )', 'Mercedes Viano ( De 2003 à 2014 )');
                Type.options[74] = new Option('Mercedes Vito ( De 1996 à 2026 )', 'Mercedes Vito ( De 1996 à 2026 )');
                
                
			}
            else if (ModelfieldsSelectedValue=='BMW')
            {				
				Type.options.length=0;
				Type.options[0] = new Option('--Select--', '');
                Type.options[1] = new Option('Bmw Serie 1 ( Depuis 2004 )', 'Bmw Serie 1 ( Depuis 2004 )');
                Type.options[2] = new Option('Bmw Serie 2 ( Depuis 2013 )', 'Bmw Serie 2 ( Depuis 2013 )');
                Type.options[3] = new Option('Bmw Serie 3 ( Depuis 1975 )', 'Bmw Serie 3 ( Depuis 1975 )');
                Type.options[4] = new Option('Bmw Serie 4 ( Depuis 2013 )', 'Bmw Serie 4 ( Depuis 2013 )');
                Type.options[5] = new Option('Bmw Serie 5 ( Depuis 1974 )', 'Bmw Serie 5 ( Depuis 1974 )');
                Type.options[6] = new Option('Bmw Serie 6 ( Depuis 1976 )', 'Bmw Serie 6 ( Depuis 1976 )');
                Type.options[7] = new Option('Bmw Serie 7 ( Depuis 1979 )', 'Bmw Serie 7 ( Depuis 1979 )');
                Type.options[8] = new Option('Bmw Serie 8 ( Depuis 1990 )', 'Bmw Serie 8 ( Depuis 1990 )');
                Type.options[9] = new Option('Bmw Serie 8 Gran Coupe ( Depuis 2019 )', 'Bmw Serie 8 Gran Coupe ( Depuis 2019 )');
                Type.options[10] = new Option('Bmw I3 ( Depuis 2013 )', 'Bmw I3 ( Depuis 2013 )');
                Type.options[11] = new Option('Bmw I3s ( De 2017 à 2022 )', 'Bmw I3s ( De 2017 à 2022 )');
                Type.options[12] = new Option('Bmw I4 ( Depuis 2021 )', 'Bmw I4 ( Depuis 2021 )');
                Type.options[13] = new Option('Bmw I8 ( Depuis 2014 )', 'Bmw I8 ( Depuis 2014 )');
                Type.options[14] = new Option('Bmw Ix ( Depuis 2021 )', 'Bmw Ix ( Depuis 2021 )');
                Type.options[15] = new Option('Bmw Ix3 ( Depuis 2020 )', 'Bmw Ix3 ( Depuis 2020 )');
                Type.options[16] = new Option('Bmw X1 ( Depuis 2009 )', 'Bmw X1 ( Depuis 2009 )');
                Type.options[17] = new Option('Bmw X2 ( Depuis 2017 )', 'Bmw X2 ( Depuis 2017 )');
                Type.options[18] = new Option('Bmw X3 ( Depuis 2003 )', 'Bmw X3 ( Depuis 2003 )');
                Type.options[19] = new Option('Bmw X4 ( Depuis 2014 )', 'Bmw X4 ( Depuis 2014 )');
                Type.options[20] = new Option('Bmw X5 ( Depuis 2000 )', 'Bmw X5 ( Depuis 2000 )');
                Type.options[21] = new Option('Bmw X6 ( Depuis 2008 )', 'Bmw X6 ( Depuis 2008 )');
                Type.options[22] = new Option('Bmw X7 ( Depuis 2018 )', 'Bmw X7 ( Depuis 2018 )');
                Type.options[23] = new Option('Bmw Z4 ( Depuis 2003 )', 'Bmw Z4 ( Depuis 2003 )');
                
			}
          
     
    }
   


    function addElement() {

        Removeall("Product");      
        var PartsfieldsSelectedValue = Partsfields.options[Partsfields.selectedIndex].value;
        var ModelfieldsSelectedValue = Modelfields.options[Modelfields.selectedIndex].value;
        if (ModelfieldsSelectedValue!="--Select--"){
        for (var  i=1 ;i<=4 ; i++){
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id','Product'+i);
        newDiv.setAttribute('class','items col-lg-2 col-md-3 col-sm-4');

        img = document.createElement('img');
        img.src ="/Images/Shop/Products/"+PartsfieldsSelectedValue+"/"+ModelfieldsSelectedValue+"/"+i+".png";
        img.setAttribute('width','190px');
        img.setAttribute('height','200px');
        newDiv.appendChild(img);
        
        titre = document.createElement('titre');
        titre.setAttribute('class','h1');
        titre.setAttribute('id','itemtitle'+i);
        titre.setAttribute('overflow','hidden');
        titre.innerHTML=i+"-"+PartsfieldsSelectedValue;
        newDiv.appendChild(titre);
    
        texte = document.createElement('texte');
        texte.setAttribute('class','etiquette p');
        texte.innerHTML="Price";
        newDiv.appendChild(texte);

        prix = document.createElement('prix');
        prix.setAttribute('class','etiquette p');
        prix.setAttribute('id','itemprice'+i);
        prix.innerHTML=15*i/3 +" TND";
        newDiv.appendChild(prix);               
    
        
        button = document.createElement('button');        
        button.setAttribute('id',parseInt(i));
        button.setAttribute('class','etiquette btn btn-warning');
        button.setAttribute('onclick',"itemNB(event)");
        button.innerHTML="buy";
        newDiv.appendChild(button);    

        var currentDiv = document.getElementById('items');
        currentDiv.appendChild(newDiv);
        }
        document.getElementById('Productsnumber').innerHTML=i;
    }
    else{
        alert("Please indicate the Car model")
    }
}
    