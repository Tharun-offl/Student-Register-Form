const form = document.getElementById("titles");
const body = document.getElementById("copy").querySelector("tbody");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("names").value;
    const age = document.getElementById("ages").value;
    const degre = document.getElementById("Degree").value;
    const email = document.getElementById("emails").value;
    const branchs = document.getElementById("branch").value;
    const cell = document.getElementById("cell").value;
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
const save = document.getElementById("saves");
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
let delbtn = document.getElementById("delete")

function del(event) {
    // Remove entire row
    event.target.parentElement.parentElement.remove();
}
//select popup 
let pop = document.querySelector(".popup");
let head = document.querySelector("h1");
let review = document.getElementById("review");

function reviews(event) {

    if (pop.style.display === "block") {
        // If popup is visible, hide popup and table, reset button text
        pop.style.display = "none";
        head.style.display = "none";
        document.getElementById("copy").style.display = "none";
        review.innerText = "Review";
    } else {
        // If popup is hidden, show popup and table, change button text to back
        pop.style.display = "block";
        head.style.display = "block";
        document.getElementById("copy").style.display = "table"; // display table
        review.innerText = "Go Back";
    }
}
