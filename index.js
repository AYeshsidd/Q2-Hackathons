// making button
var resume_button = document.getElementById('toggle-button');
var my_Skills = document.getElementById('skills');
// Eventlistner is a function used to detect an event like (click,hover,press)
resume_button.addEventListener('click', function () {
    if (my_Skills.style.display === 'none') {
        my_Skills.style.display = 'block';
    }
    else {
        my_Skills.style.display = 'none';
    }
});
