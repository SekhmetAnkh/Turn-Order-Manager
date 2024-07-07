// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to add a name to the list
function addName() {
    var input = document.getElementById("nameInput");
    var name = input.value.trim();

    // Check if the name is empty or exceeds 16 characters
    if (name === "" || name.length > 16) {
        // Flash animation for input field
        input.classList.add("invalid-input");
        
        // Reset animation after 1 second
        setTimeout(function() {
            input.classList.remove("invalid-input");
        }, 1000);
        
        // Clear the input field and return
        input.value = "";
        input.focus();
        return;
    }

    // Capitalize the first letter of the name
    var capitalized = capitalizeFirstLetter(name);

    var ul = document.getElementById("nameList");
    
    // Check if the name already exists
    var existingNames = ul.getElementsByClassName("name");
    for (var i = 0; i < existingNames.length; i++) {
        if (existingNames[i].textContent.toLowerCase() === capitalized.toLowerCase()) {
            // Flash animation for input field
            input.classList.add("duplicate-input");
            
            // Reset animation after 1 second
            setTimeout(function() {
                input.classList.remove("duplicate-input");
            }, 1000);
            
            // Clear the input field and return
            input.value = "";
            input.focus();
            return;
        }
    }

    // If name does not exist and is valid, proceed to add it
    var li = document.createElement("li");
    li.classList.add("name-container");

    var nameSpan = document.createElement("span");
    nameSpan.textContent = capitalized; // Use capitalized name
    nameSpan.classList.add("name");
    nameSpan.contentEditable = true; // Allow editing name
    nameSpan.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function() {
        ul.removeChild(li);
    };

    li.appendChild(nameSpan);
    li.appendChild(deleteButton);

    ul.appendChild(li);
    input.value = ""; // Clear the input field
    input.focus(); // Keep the input field focused
}

// Function to handle Enter key press event
function handleKeyPress(event) {
    if (event.key === "Enter") {
        addName();
    }
}

// Function to clear the entire list
function clearList() {
    var ul = document.getElementById("nameList");
    ul.innerHTML = ""; // Clear all list items
}

// Event listeners
document.getElementById("nameInput").addEventListener("keypress", handleKeyPress);
document.getElementById("addButton").addEventListener("click", addName);
document.getElementById("clearButton").addEventListener("click", clearList);
