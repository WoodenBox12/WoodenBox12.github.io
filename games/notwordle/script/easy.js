function ifEasy() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    if (params.mode == "easy") {

        alert("easy mode selected")

        document.addEventListener("keydown", function (event) {

            if (finishedRow == true) {

            }

            else if (event.code === "Backspace" || event.code === "Delete") {
                document.getElementById(`box${--currentBox}`).innerHTML = "";
            }

            else if (event.code == "Enter") { // enter

                for (let i = 1; i <= 5; i++) {

                    document.getElementById(`box${i}`).style.backgroundColor = "green"
                }
            }

            else if (currentBox != 6) {

                currentLetter = (event.code).charAt(3);

                document.getElementById(`box${currentBox}`).innerHTML = currentLetter;
                currentBox += 1;

            }
        });
    }
}

var currentBox = 1;
var currentLetter;
var finishedRow = false;

window.onload = ifEasy();