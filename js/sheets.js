const scriptURL = 'https://script.google.com/macros/s/AKfycbwfEyPZod0drFELsPq7uPONzu_2XVHKp8vJI3wdZ7sw9XFLOxCPOUNvM1UQlsm37__oRA/exec';

const form = document.forms['date-form'];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you!!!!! :3"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})