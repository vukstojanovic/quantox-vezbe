
const $btn = document.querySelector("button");
const $inputs = document.querySelectorAll("input");

const data = {
    "firstName": "First Name",
    "lastName": "Last Name",
    "email": "Email",
    "password": "Password",
}

$btn.addEventListener("click", (e) => {

    e.preventDefault();

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    $inputs.forEach(input => {
        const $inputContainer = input.parentElement;
        const $warning = $inputContainer.querySelector("p");
        if (!input.value) {
            $inputContainer.classList.add("js-error");
            input.placeholder = "";
            $warning.textContent = `${data[input.id]} cannot be empty`;
        } else if (input.id === "email" && !input.value.match(pattern)) {
            $inputContainer.classList.add("js-error");
            input.placeholder = "";
            $warning.textContent = `Looks like this is not an email`;
        } else {
            $inputContainer.classList.remove("js-error");
        }
    });

});















