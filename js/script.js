
// creo il mio array di email  
const emailListone= [
  'sonic@gmail.com',
  'ash@gmail.com',
  'crash@gmail.com',
  'mario@gmail.com',
  'luigi@gmail.com',
  'solidsnake@gmail.com',
  'cloudstrife@gmail.com',
  'pacman@gmail.com',
  'kratos@gmail.com'
];

//
const messaggio = document.getElementById('output-email')
console.log("priam");
console.log(messaggio.innerHTML);
console.log("dopo");
const accesso =   document.getElementById('accedi');


accesso.addEventListener('click', function(){
  const emailInput = document.getElementById('email').value;

  let emailPresente = false;
  // faccio un check su ogni elemento dellalista
  for(let i = 0; i < emailListone.length; i++){
    //controllo se la mail inserto fa parte dellalista..
    if(emailInput == emailListone[i]){
      // qui entro solo se l'email corrisponde e quindi setto il flag a true
      emailPresente = true;
    }

  }
    if(!emailPresente){
      messaggio.innerHTML = "Email inserita è errata";
    
    }else{
      messaggio.innerHTML = "Email inserita valida"; 
    
    }
});




