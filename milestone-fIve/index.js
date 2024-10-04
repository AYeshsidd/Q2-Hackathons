var form = document.getElementById('MYform');
var displayForm = document.getElementById('form_display');
var shareable = document.getElementById('linking');
var share = document.getElementById('share-link');
var PdfButton = document.getElementById('as-pdf');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var gender = document.getElementById('gender').value;
    var gmail = document.getElementById('mail').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        gender: gender,
        gmail: gmail,
        phone: phone,
        education: education,
        skills: skills,
        experience: experience
    };
    localStorage.setItem(name, JSON.stringify(resumeData)); // Saving the data locally
    var htmlDynamic = "\n    <h2><b>Your-Editable-Resume</b></h2>\n    <br>\n   \n    <h3>Personal Information</h3>\n    \n    \n    <p><b>Name:</b><span contenteditable =\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable =\"true\">").concat(gmail, "</span></p>\n    <p><b>Phone:</b><span contenteditable =\"true\">").concat(phone, "</span></p>\n    <p><b>gender:</b><span contenteditable =\"true\">").concat(gender, "</span></p>\n    <br>\n    \n   \n    \n    <h3>Education</h3>\n    <p contenteditable =\"true\">").concat(education, "</p>\n    <br>\n    <h3>Experience</h3>\n    <p contenteditable =\"true\">").concat(experience, "</p>\n     <br>\n    <h3>Skills</h3>\n    <p contenteditable =\"true\">").concat(skills, "</p>\n    ");
    // Display the generated resume
    form.innerHTML = htmlDynamic;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?name=").concat(encodeURIComponent(name));
    // Display the shareable link
    shareable.style.display = 'block';
    share.href = shareableURL;
    share.textContent = shareableURL;
});
// downloading work
PdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('name');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('exp').value
                = resumeData.experience;
            document.getElementById('skill').value =
                resumeData.skills;
        }
    }
});
