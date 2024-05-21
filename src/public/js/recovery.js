const recoveryForm = document.getElementById('recoveryForm')

recoveryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(recoveryForm)
    const obj = {}

    data.forEach((value, key) => (obj[key] = value))

    fetch('/api/sessions/recovery', {
        headers: {
            'Content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(obj),
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

})