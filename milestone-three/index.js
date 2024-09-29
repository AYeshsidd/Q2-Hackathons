var submit = document.getElementById('generate');
var display = document.getElementById('form_display');
submit.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var gender = document.getElementById('gender').value;
    var email = document.getElementById('mail').value;
    var number = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skill').value;
    var experience = document.getElementById('exp').value;
    var time = document.getElementById('submissiondate').value;
    var display_Form = "<h2>Form Submitted</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Gender:</strong> ").concat(gender, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(number, "</p>\n        <p><strong>Skills:</strong> ").concat(skills, "</p>\n        <p><strong>Experience:</strong> ").concat(experience, "</p>\n        <p><strong>Date of Submission:</strong> ").concat(time, "</p>;\n    ");
    if (display) {
        display.innerHTML = display_Form;
    }
    else {
        console.error('no file founded jahil');
    }
});
