function send() {
let name = document.getElementById('name').value;
let message = document.getElementById('message').value;

if (message =='' || name =='') {
    document.getElementById('errorMessage').innerText = 'Ошибка. Поле обязательно для заполнения.';
}
else {
    document.getElementById('result').innerText =`${name} : ${message}`;
    document.getElementById('errorMessage').innerText = '';
    document.getElementById('message').value = '';
}
}
