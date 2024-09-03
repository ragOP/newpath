const formatDate = (today) => {
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  return dd + '/' + mm + '/' + yyyy;
}

const formatTime = (today) => {


  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  
  m = checkTime(m);
  s = checkTime(s);
  return h + ":" + m + ":" + s;

}



const isNumericInput = (event) => {
   const key = event.keyCode;
   return ((key >= 48 && key <= 57) || // Allow number line
   (key >= 96 && key <= 105) // Allow number pad
   );
};
const isModifierKey = (event) => {
   const key = event.keyCode;
   return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
   (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
   (key > 36 && key < 41) || // Allow left, up, right, down
   (
   // Allow Ctrl/Command + A,C,V,X,Z
   (event.ctrlKey === true || event.metaKey === true) &&
   (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
   )
};


function validateEmail(emailField){
           var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
           if (reg.test(emailField) == false) 
           {
             return false;
           }
           return true;
         }

         
const enforceFormat = (event) => {
   // Input must be of a valid number format or a modifier key, and not longer than ten digits
   if(!isNumericInput(event) && !isModifierKey(event)){
    event.preventDefault();
 }
};


const enforceFormatPhone = (event) => {
   if (event.key === 'Enter') {
      event.preventDefault();
      return;
   }
   // Input must be of a valid number format or a modifier key, and not longer than ten digits
   if(!isNumericInput(event) && !isModifierKey(event)){
    event.preventDefault();
 }
   if(event.target.value.length == 16){
      event.target.value = event.target.value.substring(0,15)
   }
};

const enforceFormatDOB = (event) => {
   if (event.key === 'Enter') {
      event.preventDefault();
      return;
   }
   // Input must be of a valid number format or a modifier key, and not longer than ten digits
   if(!isNumericInput(event) && !isModifierKey(event)){
    event.preventDefault();
 }
   if(event.target.value.length == 10){
      event.target.value = event.target.value.substring(0,9)
   }
};

const enforceFormatSSN = (event) => {
   
   // Input must be of a valid number format or a modifier key, and not longer than ten digits
   if(!isNumericInput(event) && !isModifierKey(event)){
    event.preventDefault();
 }
   if(event.target.value.length >= 12){
      event.target.value = event.target.value.substring(0,11)
   }
};






const formatToPhone = (event) => {
   if (event.key === 'Enter') {
      return;
   }
   if(isModifierKey(event)) {
      return;
   }
 // I am lazy and don't like to type things more than once
 const target = event.target;
 const input = event.target.value.replace(/\D/g,'').substring(0,10);
 // First ten digits of input only
 const zip = input.substring(0,3);
 const middle = input.substring(3,6);
 const last = input.substring(6,10);
 if(input.length > 6){
    target.value = `(${zip}) ${middle} - ${last}`;
 }
 else if(input.length > 3){
    target.value = `(${zip}) ${middle}`;
 }
 else if(input.length > 0){
    target.value = `(${zip}`;
 }
};


const formatToDOB = (event) => {
   if (event.key === 'Enter') {
      return;
   }
   if(isModifierKey(event)) {
     return;
   }
   // I am lazy and don't like to type things more than once
   const target = event.target;
   const input = event.target.value.replace(/\D/g,'').substring(0,10);
   // First ten digits of input only
   const zip = input.substring(0,2);
   const middle = input.substring(2,4);
   const last = input.substring(4,8);
   if(input.length > 4){
     target.value = `${zip}/${middle}/${last}`;
   }
   else if(input.length > 2){
     target.value = `${zip}/${middle}`;
   }
   else if(input.length > 0){
     target.value = `${zip}`;
   }
};



const formatToSSN = (event) => {
   if(isModifierKey(event)) {
     return;
   }
   // I am lazy and don't like to type things more than once
   const target = event.target;
   const input = event.target.value.replace(/\D/g,'').substring(0,9);
      // First ten digits of input only
   const a = input.substring(0,3);
   const g = input.substring(3,5);
   const s = input.substring(5,9);

     

      
   if(input.length > 5){
     target.value = `${a}-${g}-${s}`;
   }
   else if(input.length > 3){
     target.value = `${a}-${g}`;
   }
  else if(input.length > 0){
     target.value = `${a}`;
  }
}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



const addSpecialRangeFormatterToElement = (element, textElement, value) => {
   element.value = value

   if(value == element.getAttribute("min")){
      textElement.innerText = "Less than $"+numberWithCommas(value)   
   } else if(value == element.getAttribute("max")){
      textElement.innerText = "More than $"+numberWithCommas(value)   
   }else {
      textElement.innerText = "$"+numberWithCommas(value)   
   }
   
   element.addEventListener("input",(event)=>{
      
      if(event.target.value == element.getAttribute("min")){
         textElement.innerText = "Less than $"+numberWithCommas(event.target.value)   
      } else if(event.target.value == element.getAttribute("max")){
         textElement.innerText = "More than $"+numberWithCommas(event.target.value)   
      }else {
         textElement.innerText = "$"+numberWithCommas(event.target.value)   
      }


      
   })
}

const addRangeFormatterToElement = (element, textElement, value) => {
   element.value = value
   textElement.innerText = "$"+numberWithCommas(value)
   element.addEventListener("input",(event)=>{
      textElement.innerText = "$"+numberWithCommas(event.target.value)
   })
}




const addPhoneFormatterToElement = (element) => {
  element.addEventListener('keydown',enforceFormatPhone);
  element.addEventListener('keyup',formatToPhone);
  element.addEventListener('input',formatToPhone);
}

const addSSNFormatterToElement = (element) => {
  element.addEventListener('keydown',enforceFormatSSN);
  element.addEventListener('keyup',formatToSSN);
  element.addEventListener('input',formatToSSN);
}


const addDOBFormatterToElement = (element) => {
  element.addEventListener('keydown',enforceFormatDOB);
  element.addEventListener('keyup',formatToDOB);
  element.addEventListener('input',formatToDOB);
}








const addLandbotPhoneFormatterToElement = (element) => {
  element.addEventListener('keydown',enforceFormatPhone);
  element.addEventListener('keyup',formatToPhone);
}




const addLandbotDOBFormatterToElement = (element) => {
  element.addEventListener('keydown',enforceFormatDOB);
  element.addEventListener('keyup',formatToDOB);
}





const addLandbotSSNFormatterToElement = (element) => {
  element.addEventListener('keydown',enforceFormatSSN);
  element.addEventListener('keyup',formatToSSN);

  
}










const checkDOBFormat = (text) => {


   if(/^([0-9]{2}\/[0-9]{2}\/[0-9]{4}$)/.test(text)){

      tmp = text.split("/")
           
      m = parseInt(tmp[0])
      d = parseInt(tmp[1])
      y = parseInt(tmp[2])

      let a  = new Date(y,m-1,d)

     

      if((m<1 || m>12) || (d<1 || d>31) ||(y<1900 || y>(new Date().getFullYear()-1)) || (a.getDate() != d) || (a.getMonth()+1 != m) || (a.getFullYear() != y)){
         return false      
      } else {
         return true
      }
   } else {
      return false
   }
   


}

const checkPhoneFormat = (text) => {
   return /^(\([0-9]{3}\) [0-9]{3} - [0-9]{4}$)/.test(text) || /^(\([0-9]{3}\) [0-9]{3}-[0-9]{4}$)/.test(text)
}

const getPhoneDigits = (text) => {
   let tmp = text
   return tmp.replace(/\D/g, "")
}


const checkSSNFormat = (text) => {
   return /^([0-9]{3}-[0-9]{2}-[0-9]{4}$)/.test(text)
}