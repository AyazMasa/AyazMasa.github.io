document.getElementById("submitButton").addEventListener("click", () => {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const question1 = parseInt(document.getElementById("question1").value);
    const question2 = parseInt(document.getElementById("question2").value);
    const question3 = parseInt(document.getElementById("question3").value);
    const question4 = parseInt(document.getElementById("question4").value);
    const question5 = parseInt(document.getElementById("question5").value);

    // Validate email, phone, and address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9\s\-]+$/;

    if (!emailRegex.test(email)) {
        alert("Invalid email format.");
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert("Invalid phone number.");
        return;
    }

    if (!address.trim()) {
        alert("Address cannot be empty.");
        return;
    }

    // Create the object
    const formData = {
        firstName,
        lastName,
        email,
        phone,
        address: address.trim(),
        ratings: [question1, question2, question3, question4, question5]
    };

    // Log the object in the console
    console.log(formData);

    // Calculate the average rating
    const average = formData.ratings.reduce((sum, value) => sum + value, 0) / formData.ratings.length;

    // Display results on the website
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <p>First Name: ${formData.firstName}</p>
        <p>Last Name: ${formData.lastName}</p>
        <p>Email: ${formData.email}</p>
        <p>Phone: ${formData.phone}</p>
        <p>Address: ${formData.address}</p>
        <p class="average-result" style="color: ${getAverageColor(average)};">
            ${formData.firstName} ${formData.lastName} (${formData.email}): ${average.toFixed(1)}
        </p>
    `;
});

// Function to determine the color of the average result
function getAverageColor(average) {
    if (average <= 3.4) return "red";
    if (average <= 7.1) return "orange";
    return "green";
}
