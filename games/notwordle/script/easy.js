function ifEasy() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    if (params.mode == "easy") {

        alert("easy mode selected")

        
    }
}

var currentBox = 1;
var currentLetter;
var finished = false;

document.addEventListener("keypress", function (event) {

    if (finished == true) {

    }

    else if (event.code == "Enter") { // enter

        alert('Enter');

        for (let i = 1; i <= 5 ; i++) {
            document.getElementById(`box${i}`).style.backgroundColor = "green"
        }
    }

    else if (currentBox <= 5) {
        currentLetter = (event.code).charAt(3);

        document.getElementById(`box${currentBox}`).innerHTML = currentLetter;
        currentBox += 1;
    }

});

window.onload = ifEasy();