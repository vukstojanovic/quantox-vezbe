
const $email = document.getElementById('email-mobile');
const $warning = document.getElementById('warning-mobile');
const $form = document.getElementById('form-mobile');

const $emailTablet = document.getElementById('email-tablet');
const $warningTablet = document.getElementById('warning-tablet');
const $formTablet = document.getElementById('form-tablet');

$form.addEventListener("submit", (e) => {

    e.preventDefault();

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!$email.value) {
        $warning.innerHTML = "Oops! Please add your email";
    } else if (!$email.value.match(pattern)) {
        $warning.innerHTML = "Oops! Please check your email";
    } else {
        $warning.innerHTML = "&nbsp;";
    }
});


$formTablet.addEventListener("submit", (e) => {

    e.preventDefault();

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!$emailTablet.value) {
        $warningTablet.innerHTML = "Oops! Please add your email";
    } else if (!$emailTablet.value.match(pattern)) {
        $warningTablet.innerHTML = "Oops! Please check your email";
    } else {
        $warningTablet.innerHTML = "&nbsp;";
    }
});







