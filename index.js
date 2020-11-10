console,console.log("nk");
shownotes();
let btn = document.getElementById("btn");
btn.addEventListener("click",function(){
  let inpText = document.getElementById("InpText");
  let notes = localStorage.getItem("text");
  if(notes == null){
      notesObj = [];
  }
  else{
      notesObj = JSON.parse(notes);
  }
   notesObj.push(inpText.value);
   localStorage.setItem("text",JSON.stringify(notesObj));
   inpText.value="";
//   console.log(notesObj);
    shownotes();
});

function shownotes(){
    let notes = localStorage.getItem("text");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element , index){
       html += `<div class="card my-3 p-2 mx-3"  id="Card" style="width: 18rem;">
       <div class=" noteCard card-body">
       <h4>Note :${index + 1}</h4>
         <p class="card-text">${element}</p>
         <button id="${index}" onclick = deleteBtn(this.id) class="btn btn-primary bg-dark my-2" >Delete</button>
       </div>
     </div>`;
    });
    let notesEle  = document.getElementById('Allnotes');
    if(notesObj.length !=0){
        notesEle.innerHTML = html;
    }
    else{
        notesEle.innerHTML = "Enetr your first note , Using above area."
    }
    
};

function deleteBtn(index){
    // console.log(index);
    let notes = localStorage.getItem("text");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
     notesObj.splice(index,1);
    localStorage.setItem("text",JSON.stringify(notesObj));
    shownotes();
}


        // serch area

let search = document.getElementById("searchTxt");
search.addEventListener('input',function(){
    let inputVal = search.value;
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
             let cardTxt = element.getElementsByTagName("p")[0].innerHTML;
             if(cardTxt.includes(inputVal)){
                 element.style.display = "block";
             }
             else{
                 element.style.display ="none";
             }
    });

});

// let checkBox = document.getElementById("checkBox");
// checkBox.addEventListener("click",function(){
//     let Card = document.getElementById("Card");
//       if(checkBox.value == "on"){
//             Card.style.backgroundColor = "rgba(0,0,0,0.7)";
//             Card.style.color = "white";
//       }
//       else{
//         Card.style.backgroundColor = "white";
//         Card.style.color = "black";
//       }

// });