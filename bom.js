function handleSubmit(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const nameError = document.getElementById("nameError").value;
    if(name.length < 3){
        nameError.style.display = 'block';
        nameError.innerHTML = '<b>It should contain minimum 3 letters';
    }

    const email = document.getElementById("email").value;
    const emaileError = document.getElementById("emailError").value;
    if(email.length < 3){
        emailError.style.display = 'block';
        emailError.innerHTML = '<b>Email is invaild';
    }

    const subject = document.getElementById("subject").value;
    const subjectError = document.getElementById("subjectError").value;
    if(subject.length < 3){
        subjectError.style.display = 'block';
        subjectError.innerHTML = '<b>It should contain minimum 5 letters';
    }

    const message = document.getElementById("message").value;
    const messageError = document.getElementById("messageError").value;
    if(message.length < 3){
        messageError.style.display = 'block';
        messageError.innerHTML = '<b>It should contain minimum 10 letters';
    }

    console.log("Form Submitted");
}