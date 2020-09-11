let regButton = document.getElementById("regButton");
regButton.addEventListener("click", onClick);

function onClick() {
    let nameInput = document.getElementById("nameInput");
    if(nameInput.value != "")
    {
        alert("send");
    }
    else
    {
        alert("error");
    }
}