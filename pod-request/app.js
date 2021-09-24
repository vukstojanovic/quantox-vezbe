
const $email = document.getElementById('email-mobile');
const $warning = document.getElementById('warning-mobile');
const $form = document.getElementById('form-mobile');

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










