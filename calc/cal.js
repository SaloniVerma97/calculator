// let input = document.getElementsById('inputBox')
// let buttons = document.querySelectorAll('button')

// let string = "";
// let arr=Array.from(buttons);
// arr.forEach(button=>{
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML=='='){
//             string=eval(string)
//             input.value=string;
//         }
//         else if(e.target.innerHTML=='AC'){
//             string="";
//             input.value=string;

//         }
//         else if(e.target.innerHTML=='DEL'){
//             string=string.substring(0,string.length-1);
//             input.value=string;

//         }
//         else{
//             string += e.target.innerHTML; 
//         input.value=string;
//         }

//     })
// })


let screen = document.getElementById("display");
buttons = document.querySelectorAll('button');
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "*") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "AC") {
      screenValue = "";
      screen.value = screenValue;
    } 
    else if(buttonText== "C"){
       
            screenValue = screenValue.substring(0 , screenValue.length-1);
    
        screen.value = screenValue;
      }
    else if (buttonText == "=") {
      var result;
      try {
        result = eval(screenValue);
      } catch (error) {
        result = "Expression error";
      }
      screen.value = result;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
