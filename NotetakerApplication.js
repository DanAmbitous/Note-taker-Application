const noteInput = document.getElementById('note-input');
const addNote = document.getElementById('add');
const removeAllNote = document.getElementById('remove-all');
const notePlace = document.getElementById('notes');
const inputTitle = document.getElementById('note-title');

let noteList = [];
let newNoteList = [];

let containerDiv;
let noteDiv;
let noteheader;
let buttonsDiv;
let noteButtonRemove;
let noteExpandButton;

document.addEventListener('click', (event) => {
  if (event.target.matches('#add')) {    
    containerDiv = document.createElement('div');
    containerDiv.setAttribute('class', 'container-div');
    
    noteDiv = document.createElement('div');
    noteDiv.setAttribute('class', 'note-div');
    noteheader = document.createElement('h3');
    noteheader.innerHTML = inputTitle.value; 
    noteheader.style.textAlign = "center";
    noteheader.setAttribute('contenteditable', true);
    noteP = document.createElement('p');
    noteP.innerHTML = noteInput.value;
    noteP.setAttribute('contenteditable', true);

    buttonsDiv = document.createElement('div');
    buttonsDiv.setAttribute('class', 'buttons-div');
    noteButtonRemove = document.createElement('button');
    noteButtonRemove.innerHTML = "Remove Note";
    noteButtonRemove.setAttribute('class', 'remove-note btn btn-danger');
    noteExpandButton = document.createElement('button');
    noteExpandButton.innerHTML = "+";
    noteExpandButton.setAttribute('class', 'expand-button btn btn-primary');

    if (noteInput.value.length > 0 && inputTitle.value.length > 0) {
      noteDiv.appendChild(noteheader);
      noteDiv.appendChild(noteP);   
      buttonsDiv.appendChild(noteButtonRemove);    
      buttonsDiv.appendChild(noteExpandButton);      
      containerDiv.appendChild(noteDiv);
      containerDiv.appendChild(buttonsDiv);
      notePlace.appendChild(containerDiv);

      noteList.push(containerDiv);

      containerDiv.style.width = "25vw";
      containerDiv.style.height = "25vh";
      containerDiv.style.margin = "1vw"
      noteDiv.style.width = "25vw";
      noteDiv.style.height = "25vh";
      noteDiv.style.margin = "1vw";

      noteInput.value = "";
      inputTitle.value = "";
    } else {
      alert('Please fill in all the input fields');
    }
  }
  if (event.target.matches('#remove-all')) {
    notePlace.innerHTML = "";

    noteList.splice(0, noteList.length);
  }

  if (event.target.matches('.remove-note')) {    
    let divContainer = event.target.parentElement.parentElement;

    divContainer.remove();

    noteList = noteList.filter(note => note !== divContainer);

    noteList.forEach(note => {
      note.style.display = "inline-block";
    })
  }

  if (event.target.matches('.expand-button')) {    
    newNoteList = noteList.filter(note => note.lastChild.lastChild !== event.target);
  
    newNoteList.forEach((note) => {
      note.style.display = "none";
    })

    let divContainer = event.target.parentElement.parentElement;
    let divNote = event.target.parentElement.parentElement.firstChild;
    let buttons = event.target.parentElement;

    event.target.style.display = "none";
    let minifyButton = document.createElement('button');
    minifyButton.setAttribute('class', 'minify-button btn btn-primary');
    minifyButton.innerText = "-"; 
    buttons.appendChild(minifyButton);

    divContainer.style.width = "50vw";
    divContainer.style.height = "50vh";
    divNote.style.width = "50vw";
    divNote.style.height = "50vh";
    divNote.style.overflowY = "scroll";
    buttons.style.textAlign = "center";
  }

  if (event.target.matches('.minify-button')) {
    noteList.forEach((note) => {
      note.style.display = "inline-block";

      let noteDiv = note.firstChild;

      note.style.width = "25vw";
      note.style.height = "25vh";
      note.style.margin = "1vw"
      noteDiv.style.width = "25vw";
      noteDiv.style.height = "25vh";
      noteDiv.style.margin = "1vw";
    })   

    event.target.parentElement.parentElement.firstChild.style.overflowY = "";

    let noteButton = event.target.parentElement;

    event.target.style.display = "none";
    let noteExpandButton = document.createElement('button');
    noteExpandButton.setAttribute('class', 'expand-button btn btn-primary');
    noteExpandButton.innerText = "+"; 

    noteButton.appendChild(noteExpandButton);
  }
})