let newNote = document.getElementById("notesContainer");
let notesArray = JSON.parse(localStorage.getItem("notes")) || [];

window.onload = function () {
  notesArray.forEach((note,index) => CreatingNoteElemnet(note, index))
};

document.getElementById("addNoteBtn").addEventListener("click", () => {
  let date = new Date();
  let d = date.toLocaleString();
  CreatingNoteElemnet({ content: "", date: d }, null);
});

function CreatingNoteElemnet(noteobj, index) {
  let div = document.createElement("div");
  div.className = "note";
  div.innerHTML = `
        <div class="note-content ${noteobj.content ? "" : "hidden"}">${noteobj.content}</div>
        <textarea class="noteInput ${noteobj.content ? "hidden" : ""}" placeholder="Write your note here..."></textarea>
        <div class="date">
            <p>${noteobj.date}</p>
        </div>

        <div class="note-actions">
          <button class="edit-btn">Save</button>
          <button class="delete-btn">Delete</button>
        </div>`;
  newNote.append(div);
  const editBtn = div.querySelector(".edit-btn");
  const noteContent = div.querySelector(".note-content");
  const noteInput = div.querySelector(".noteInput");
  const delInput = div.querySelector(".delete-btn");

  delInput.addEventListener("click", () => {
    div.remove();
    if (index !== null) {
      notesArray.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesArray));
    }
  });
  editBtn.addEventListener("click", () => {
    if (editBtn.textContent !== "Save") {
      editBtn.textContent = "Save";
    } else {
      editBtn.textContent = "Edit";
      noteContent.textContent = noteInput.value;
      if (noteInput.value !== "") {
        let noteObject = {
          content: noteInput.value,
          date: noteobj.date,
        };
        if (index !== null) {
          notesArray[index] = noteObject;
        } else {
          notesArray.push(noteObject);
          index = notesArray.length - 1;
        }
      } else {
        alert("Invalid Note nothing Chnaged In your Database");
        editBtn.textContent = "Save";
        noteContent.classList.toggle("hidden");
        noteInput.classList.toggle("hidden");
      }
      localStorage.setItem("notes", JSON.stringify(notesArray));
    }
    noteContent.classList.toggle("hidden");
    noteInput.classList.toggle("hidden");
  });
}
