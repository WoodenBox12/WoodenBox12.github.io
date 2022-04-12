function ifEasy() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    if (params.mode == "easy") {

        alert("it seemingly works")

        
    }
}

var currentBox = 1;
var currentLetter;

document.addEventListener("keypress", function (event) {

    if (event.code == "Enter") { // enter
        alert('Enter');
    }

    else {
        currentLetter = (event.code).charAt(3);

        document.getElementById(`box${currentBox}`).innerHTML = currentLetter;
        currentBox += 1;
    }

});

window.onload = ifEasy();