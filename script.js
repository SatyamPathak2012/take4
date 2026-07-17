

let btn = document.querySelector(".submitbtn");

btn.addEventListener("click", function () {

    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#phone").value;
    let email = document.querySelector("#email").value;
    let guests = document.querySelector("#guests").value;
    let date = document.querySelector("#date").value;
    let time = document.querySelector("#time").value;
    let request = document.querySelector("#request").value;

    let booking = {
        name: name,
        phone: phone,
        email: email,
        guests: guests,
        date: date,
        time: time,
        request: request
    };

    // let a = 1;

    localStorage.setItem("booking", JSON.stringify(booking));
    // localStorage.setItem("a", JSON.stringify(booking-a));

    window.location.href = "mybookings.html";
});