document.getElementById("verifyBtn").addEventListener("click", function () {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    const messageElement = document.getElementById("message");

    // Remove any existing images
    const existingImage = document.getElementById("dolphinMeme");
    if (existingImage) {
        existingImage.remove();
    }

    if (userInput === "human") {
        messageElement.textContent = "No Humans Allowed, please transform to a Dolphin First";
        
        // Create and show the dolphin meme image
        const memeImage = document.createElement("img");
        memeImage.src = "th.jfif"; // Ensure the path to the meme image is correct
        memeImage.id = "dolphinMeme"; // Set an ID for the image
        memeImage.alt = "Dolphin Meme"; // Alt text for accessibility
        memeImage.className = "floating-image"; // Add the floating class
        memeImage.style.width = "300px"; // Adjust size as needed
        document.querySelector(".container").appendChild(memeImage);
    } else if (userInput === "dolphin") {
        messageElement.innerHTML = '<span style="font-size: 100px;">✅</span>'; // Check icon
        setTimeout(() => {
            window.location.href = "video.html"; // Redirect to video page
        }, 2000); // Redirect after 2 seconds
    } else {
        messageElement.textContent = "Please enter either 'human' or 'dolphin'.";
    }
});

