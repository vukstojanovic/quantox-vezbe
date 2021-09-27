
const $emailMobile = document.getElementById('email-mobile');
const $warningMobile = document.getElementById('warning-mobile');
const $formMobile = document.getElementById('form-mobile');

const $emailTablet = document.getElementById('email-tablet');
const $warningTablet = document.getElementById('warning-tablet');
const $formTablet = document.getElementById('form-tablet');

<<<<<<< HEAD
$formMobile.addEventListener("submit", (e) => {
=======
$form.addEventListener("submit", (e) => {
>>>>>>> a5e337aa1c781fc3aaa3cd3c3270e31316dab02b

    e.preventDefault();

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!$emailMobile.value) {
        $warningMobile.innerHTML = "Oops! Please add your email";
    } else if (!$emailMobile.value.match(pattern)) {
        $warningMobile.innerHTML = "Oops! Please check your email";
    } else {
        $warningMobile.innerHTML = "&nbsp;";
    }
});


$formTablet.addEventListener("submit", (e) => {

    e.preventDefault();

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
<<<<<<< HEAD

    if (!$emailTablet.value) {
        $warningTablet.innerHTML = "Oops! Please add your email";
    } else if (!$emailTablet.value.match(pattern)) {
        $warningTablet.innerHTML = "Oops! Please check your email";
    } else {
        $warningTablet.innerHTML = "&nbsp;";
    }
});

document.body.addEventListener('click', (e) => {
    console.log(e.target);
    if (!(e.target === $emailTablet)) {
        $warningTablet.innerHTML = "&nbsp;";
    }
    
});





=======
>>>>>>> a5e337aa1c781fc3aaa3cd3c3270e31316dab02b

    if (!$emailTablet.value) {
        $warningTablet.innerHTML = "Oops! Please add your email";
    } else if (!$emailTablet.value.match(pattern)) {
        $warningTablet.innerHTML = "Oops! Please check your email";
    } else {
        $warningTablet.innerHTML = "&nbsp;";
    }
});







