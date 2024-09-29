const submit = document.getElementById('generate') as HTMLFormElement;
const display = document.getElementById('form_display') as HTMLDivElement;

submit.addEventListener('submit',(event:Event)=>{

    event.preventDefault();

    const name = (document.getElementById('name')as HTMLInputElement).value
    const gender = (document.getElementById('gender')as HTMLInputElement).value
    const email = (document.getElementById('mail')as HTMLInputElement).value
    const number = (document.getElementById('phone')as HTMLInputElement).value
    const education = (document.getElementById('education')as HTMLInputElement).value
    const skills = (document.getElementById('skill')as HTMLInputElement).value
    const experience = (document.getElementById('exp')as HTMLInputElement).value
    const time = (document.getElementById('submissiondate')as HTMLInputElement).value
   
    

const display_Form = `<h2><b>Your-Resume</b></h2>\n\
<br>\n\
<h3>Personal Information</h3>\n\
<ul>\n\
    <li><p><b>Name:</b>" + name + "</p></li>\n\
    <li><p><b>Email:</b>" + email + "</p></li>\n\
    <li><p><b>Phone:</b>" + number + "</p></li>\n\
    <li><p><b>Socials:</b>" + social + "</p></ul></li>\n\
<br>\n\
<h3>Education</h3>\n\
<p>" + education + "</p>\n\
<br>\n\
<h3>Experience</h3>\n\
<p>" + experience + "</p>\n\
<br>\n\
<h3>Skills</h3>\n\
<p>" + skills + "</p>"`

    if(display){
        display.innerHTML=display_Form
    }
    else {
        console.error('no file founded jahil');
    }

}
);