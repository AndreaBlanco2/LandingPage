const closebtn = document.querySelector('.x-btn');
const modalform = document.querySelector('.msg-container');
const msgbtn =  document.querySelector('.send-msg');

console.log(modalform.innerHTML);
closebtn.addEventListener('click', () => {

    modalform.style.display = "none";

});

msgbtn.addEventListener('click', () => {

    modalform.style.display = "block";

});