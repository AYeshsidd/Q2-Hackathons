const form = document.getElementById('MYform') as HTMLFormElement;
const displayForm = document.getElementById('form_display') as HTMLDivElement;
const shareable = document.getElementById('linking') as HTMLDivElement;
    
    const share = document.getElementById('share-link') as HTMLAnchorElement;
    const PdfButton = document.getElementById('as-pdf') as HTMLButtonElement;

form.addEventListener('submit',(event:Event)=>{
    event.preventDefault();

const name =(document.getElementById('name')as HTMLInputElement).value
const gender =(document.getElementById('gender')as HTMLInputElement).value
const gmail =(document.getElementById('mail')as HTMLInputElement).value
const phone =(document.getElementById('phone')as HTMLInputElement).value
const education =(document.getElementById('education')as HTMLInputElement).value
const experience =(document.getElementById('experience')as HTMLInputElement).value
const skills =(document.getElementById('skills')as HTMLInputElement).value

// Save form data in localStorage with the username as the key
const resumeData = {
    name,
    gender,
    gmail,
    phone,
    education,
    skills,
    experience
    };
    localStorage.setItem(name, JSON.stringify(resumeData)); // Saving the data locally
    

const htmlDynamic=`
    <h2><b>Your-Editable-Resume</b></h2>
    <br>
   
    <h3>Personal Information</h3>
    
    
    <p><b>Name:</b><span contenteditable ="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable ="true">${gmail}</span></p>
    <p><b>Phone:</b><span contenteditable ="true">${phone}</span></p>
    <p><b>gender:</b><span contenteditable ="true">${gender}</span></p>
    <br>
    
   
    
    <h3>Education</h3>
    <p contenteditable ="true">${education}</p>
    <br>
    <h3>Experience</h3>
    <p contenteditable ="true">${experience}</p>
     <br>
    <h3>Skills</h3>
    <p contenteditable ="true">${skills}</p>
    `;
    // Display the generated resume
form.innerHTML =htmlDynamic;
// Generate a shareable URL with the username only
const shareableURL =
`${window.location.origin}?name=${encodeURIComponent(name)}`;
// Display the shareable link
shareable.style.display = 'block';
share.href = shareableURL;
share.textContent = shareableURL;
});
// downloading work

PdfButton.addEventListener('click', () => {
window.print(); // This will open the print dialog and allow the user to save as PDF

});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('name');
if (username) {

// Autofill form if data is found in localStorage
const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
const resumeData = JSON.parse(savedResumeData);
(document.getElementById('name') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('email') as HTMLInputElement).value =
resumeData.email;
(document.getElementById('phone') as HTMLInputElement).value =
resumeData.phone;
(document.getElementById('education') as HTMLTextAreaElement).value =
resumeData.education;
(document.getElementById('exp') as HTMLTextAreaElement).value
= resumeData.experience;
(document.getElementById('skill') as HTMLTextAreaElement).value =
resumeData.skills;
}
}
});
