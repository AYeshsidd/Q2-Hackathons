var submit = document.getElementById('generate');
var display = document.getElementById('form_display');
submit.addEventListener('click', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var gender = document.getElementById('gender').value;
    var email = document.getElementById('mail').value;
    var number = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skill').value;
    var experience = document.getElementById('exp').value;
    var time = document.getElementById('submissiondate').value;
    var display_Form = "\n<h2 style=\"color: rgb(66, 132, 187);\"><b>YOUR RESUME:-</b></h2>\n        <p><b>Name:</b><span contenditable = \"true\"> ".concat(name, "</p>\n        <p><b>Gender:</b><span contenditable = \"true\"> ").concat(gender, "</p>\n        <p><b>Email:</b><span contenditable = \"true\"> ").concat(email, "</p>\n        <p><b>Mobile Number:</b><span contenditable = \"true\"> ").concat(number, "</p>\n        <p><b>Qualification:</b><span contenditable = \"true\"> ").concat(education, "</p>\n        <p><b>Skills:</b><span contenditable = \"true\"> ").concat(skills, "</p>\n        <p><b>Experience:</b><span contenditable = \"true\"> ").concat(experience, "</p>\n        <p><b>Date of Submission:</b><span contenditable = \"true\"> ").concat(time, "</p>\n    ");
    if (display) {
        display.innerHTML = display_Form;
    }
    else {
        console.error('no file founded jahil');
    }
});
