const form = document.getElementById("titles");
  const body = document.getElementById("copy").querySelector("tbody");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("names").value;
    const age = document.getElementById("ages").value;
    const degre = document.getElementById("Degree").value;
    const email = document.getElementById("emails").value;
    const branchs=document.getElementById("branch").value;
    const cell=document.getElementById("cell").value;
    const gender = document.getElementById("gender").value;

    // Create a new row
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${degre}</td>
        <td>${branchs}</td>
        <td>${cell}</td>
        <td>${email}</td>
        <td><button onclick="del(event)"id="delete">Delete</button></td>
      `;
      //selecting td
    body.appendChild(row);

    // Reset the form
    form.reset();
  });
   const save=document.getElementById("saves");
   save.addEventListener('mousedown', () => {
    save.style.backgroundColor = 'green';
  });

  save.addEventListener('mouseup', () => {
    save.style.backgroundColor = '';
  });

  // Also reset if mouse leaves the button while pressed
  save.addEventListener('mouseleave', () => {
    save.style.backgroundColor = 'rgb(32, 167, 32)';
   })
  let delbtn=document.getElementById("delete")
  function del(event) {
    // Remove entire row
    event.target.parentElement.parentElement.remove();
  }
  //select popup 
  let pop=document.querySelector(".popup");
  function reviews(event){
    pop.style.display="block"
  }
