const resetPassForm = document.getElementById('resetPassForm')

resetPassForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(resetPassForm)
    const obj = {}

    data.forEach((value, key) => (obj[key] = value))

    fetch('/api/sessions/continueRecovery', {
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