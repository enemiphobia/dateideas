const scriptURL = 'https://script.google.com/macros/s/AKfycbwotKcTNMCSBSAf681tCDDwc9uH2pYPjAilOX0t6BosrlYLDZ2yDC7Cx19BBx9ENF70Cw/exec';

const form = document.forms['date-form'];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { redirect: "follow", method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you!!!!! :3"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})