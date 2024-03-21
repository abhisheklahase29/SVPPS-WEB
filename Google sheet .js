const scriptURL = 'https://script.google.com/macros/s/AKfycbxf9Sz0gxD68cuqZmXZ8hED_zndQ6GS1yzafbVtV5zIN-PVd6jn4EfN4AFMAaj2xyir/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})