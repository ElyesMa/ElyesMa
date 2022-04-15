function ChangeSrc() {
    let text =document.getElementById("logo").src;
    let position =text.search(/logo2/i);
    if(position>0){
       document.getElementById("logo").src ="/Images/Station/logo.png";
    
    }
    else if(position<0){
       document.getElementById("logo").src ="/Images/Station/logo2.png";
    }
    
 }
 
 function validateForm() {
    var Name = document.ContactForm.Name.value
    var FamilyName = document.ContactForm.FamilyName.value
    var Adress = document.ContactForm.Adress.value
    var PhoneNumber = document.ContactForm.PhoneNumber.value
    var mail = document.ContactForm.Email.value 
    var Carnumber = document.ContactForm.Carregistrationnumber.value 
    var Visitedate = document.ContactForm.Visitedate.value 
    var maintenancefields = document.ContactForm.maintenancefields.value 
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
    if (Carnumber.length==0)
    return alert(`Car registration number is required`)
    if (Visitedate.length==0)
    return alert(`Viiste date is required`)
    if (maintenancefields.localeCompare("--Select--")==0)
    return alert(`maintenance tyoe required`)
    ChangeSrc();
    document.getElementById("Welcome").innerHTML="Mr/Mme "+Name+" "+FamilyName+" See you on "+Visitedate + " for " + maintenancefields;
    }