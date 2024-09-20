// making button

const resume_button = document.getElementById('toggle-button') as HTMLButtonElement;
const my_Skills = document.getElementById('skills') as HTMLButtonElement;

// Eventlistner is a function used to detect an event like (click,hover,press)
resume_button.addEventListener('click',
    () => {
        if (my_Skills.style.display === 'none') { my_Skills.style.display = 'block' }

        else { my_Skills.style.display = 'none' }

    })