const submit = document.getElementById('generate') as HTMLFormElement;
const display = document.getElementById('form_display') as HTMLDivElement;

submit.addEventListener('click',(event:Event)=>{

    event.preventDefault();

    const name = (document.getElementById('name')as HTMLInputElement).value
    
    const gender = (document.getElementById('gender')as HTMLInputElement).value
    
    const email = (document.getElementById('mail')as HTMLInputElement).value
    
    const number = (document.getElementById('phone')as HTMLInputElement).value
    
    const education = (document.getElementById('education')as HTMLInputElement).value
    
    const skills = (document.getElementById('skill')as HTMLInputElement).value
    
    const experience = (document.getElementById('exp')as HTMLInputElement).value
    
    const time = (document.getElementById('submissiondate')as HTMLInputElement).value
   
    

const display_Form = `
<h2 style="color: rgb(66, 132, 187);"><b>YOUR RESUME:-</b></h2>
        <p><b>Name:</b><span contenteditable = "true"> ${name}</p>
        <p><b>Gender:</b><span contenteditable = "true"> ${gender}</p>
        <p><b>Email:</b><span contenteditable = "true"> ${email}</p>
        <p><b>Mobile Number:</b><span contenteditable = "true"> ${number}</p>
        <p><b>Qualification:</b><span contenteditable = "true"> ${education}</p>
        <p><b>Skills:</b><span contenditable = "true"> ${skills}</p>
        <p><b>Experience:</b><span contenteditable = "true"> ${experience}</p>
        <p><b>Date of Submission:</b><span contenteditable = "true"> ${time}</p>
    `;

    if(display){
        display.innerHTML=display_Form
    }
    else {
        console.error('no file founded jahil');
    }

}
);
