// //TODO: Convert all functions and any other possible elements to ES6

// /**
//  * Update the output text as you type in the textarea
//  */
// function updateText() {

//     let text = document.getElementById('text-input').value;
//     document.getElementById('text-output').innerText = text;

// }

// /**
//  * Toggle the bold class for the output text
//  */
// function makeBold(elem) {

//     elem.classList.toggle('active');
//     document.getElementById('text-output').classList.toggle('bold')

// }

// /**
//  * Toggle the italic class for the output text
//  */
// function makeItalic(elem) {
//     elem.classList.toggle('active');
//     document.getElementById('text-output').classList.toggle('italic')

// }

// /**
//  * Toggle the underline class for the output text
//  */
// function makeUnderline(elem) {
//   elem.classList.toggle('active');
//   let formatedText = document.getElementById('text-output');

//   if(formatedText.classList.contains('underline')){
//     formatedText.classList.remove('underline');
//   }
//   else{
//     formatedText.classList.add('underline');
//   }

// }

// /**
//  * Toggle the style textAlign attribute
//  * Toggle the active state for the align butttons
//  */
// function alignText(elem, alignType) {

//     document.getElementById("text-output").style.textAlign = alignType;
//     let buttonList = document.getElementsByClassName("align");
//     for(let i=0;i<buttonList.length;i++){
//         buttonList[i].classList.remove('active');
//     }
//     elem.classList.add('active');

// }
// // ===//===//===//==//===//===//===//===//==//===//===//===//===//==//===//

let updateText = () => {
  let text = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText = text;
};

let makeBold = (elem) => {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("bold");
};

let makeItalic = (elem) => {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("italic");
};

let makeUnderline = (elem) => {
  elem.classList.toggle("active");
  let formatedText = document.getElementById("text-output");
  formatedText.classList.contains("underline")
    ? formatedText.classList.remove("underline")
    : formatedText.classList.add("underline");
};

let alignText = (elem, alignType) => {
  document.getElementById("text-output").style.textAlign = alignType;
  let buttonList = document.getElementsByClassName("align");

  for(let button of buttonList) {
    button.classList.remove("active");
  }
  elem.classList.add("active");
};
