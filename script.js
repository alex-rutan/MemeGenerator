window.onload = function() {

    function deleteMeme(event) {
        event.target.parentNode.remove();
    }

    let memeForm = document.getElementById("memeForm");

    memeForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let container = document.querySelector(".meme-container");

        let newDiv = document.createElement("div");
        newDiv.className = "meme";

        let newImg = document.createElement("img");
        newImg.src = document.getElementById("imgURL").value;
        newImg.className = "image";

        let topText = document.createElement("div");
        topText.innerText = document.getElementById("topTextInput").value.toUpperCase();
        topText.className = "topText";

        let bottomText = document.createElement("div");
        bottomText.innerText = document.getElementById("bottomTextInput").value.toUpperCase();
        bottomText.className = "bottomText";

        let newDeleteButton = document.createElement("button");
        newDeleteButton.innerText = "Delete Meme";
        newDeleteButton.className = "deleteButton";
        newDeleteButton.addEventListener("click", deleteMeme);

        container.appendChild(newDiv);
        newDiv.appendChild(newImg);
        newDiv.appendChild(topText);
        newDiv.appendChild(bottomText);
        newDiv.appendChild(newDeleteButton);

        memeForm.reset();
    });
}
