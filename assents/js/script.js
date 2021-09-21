function msenhalog(){
    let msenhal = document.getElementById("senhalog");
    if(msenhal.type == "password"){
        msenhal.type= "text";
    } else{
        msenhal.type = "password";
    }
}
function msenhacad1(){
    let msenhac1 = document.getElementById("senhacad1");
    if(msenhac1.type == "password"){
        msenhac1.type = "text";
    } else{
        msenhac1.type = "password";
    }
}
function msenhacad2(){
    let msenhac2 = document.getElementById("senhacad2");
    if(msenhac2.type == "password"){
        msenhac2.type = "text";
    } else{
        msenhac2.type = "password";
    }
}

var password = document.getElementById("senhacad1")
  , senhacad2 = document.getElementById("senhacad2");

function validatePassword(){
  if(senhacad1.value != senhacad2.value) {
    senhacad2.setCustomValidity("Senhas diferentes!");
  } else {
    senhacad2.setCustomValidity('');
  }
}

senhacad1.onchange = validatePassword;
senhacad2.onkeyup = validatePassword;