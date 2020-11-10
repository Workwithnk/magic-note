// console,console.log("nk");
shownotes();
let btn = document.getElementById("btn");
btn.addEventListener("click",function(){
  let inpText = document.getElementById("InpText");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("text");
  if(notes == null){
      notesObj = [];
  }
  else{
      notesObj = JSON.parse(notes);
  }
  let myObj ={
      title : addTitle.value,
      text : inpText.value
  }
   notesObj.push(myObj);
   localStorage.setItem("text",JSON.stringify(notesObj));
   inpText.value="";
   addTitle.value = "";
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
       <h4>${element.title}</h4>
         <p style="color:gray;" class="card-text">${element.text}</p>
         <button id="${index}" onclick = deleteBtn(this.id) class="btn btn-primary bg-dark my-2" >Delete</button>
       </div>
     </div>`;
    });
    let notesEle  = document.getElementById('Allnotes');
    if(notesObj.length !=0){
        notesEle.innerHTML = html;
    }
    else{
        notesEle.innerHTML = `<h3>Let's start with our first note..</h3>`;
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
             let cardTitle = element.getElementsByTagName("h4")[0].innerHTML;
             if(cardTxt.includes(inputVal)){
                 element.style.display = "block";
             }
             else{
                 element.style.display ="none";
             }
             if(cardTitle.includes(inputVal)){
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
