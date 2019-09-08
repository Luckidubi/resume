
const validate = () => {

    const form = document.querySelector('#myForm');
    const name = form.username;
    const email = form.email;
    const title = form.title;
    const message = form.message;
    const button = form.submit;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const nameRegex = /^[A-Za-z ]+$/;



    if ((name.value == "") || (email.value == "") || (title.value == "") || (message.value == "")) {
        alert("You are required to fill your details");
        return false;
    }

    if (name.value.length < 4) {
        alert('Your name should not be less than four letters');
        name.focus();

        return false;
    }

    if (nameRegex.test(name.value) === false) {
        alert('Your Name Should Only Contain Alphabets');
        name.focus();

        return false;
    }

    if (message.value.length < 20) {
        alert("Your message Should not be below 20 characters");
        message.focus();

        return false;
    }

    if (regex.test(email.value) === false) {
        alert("Invalid Email Address");
        email.focus();
        return false;
    }

    alert("Thanks for reaching out! Expect a reply soon");
    return true;
    ;
}

