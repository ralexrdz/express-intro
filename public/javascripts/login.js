function login () {
  // e.preventDefault()
  var formElements = document.forms['login-form'].getElementsByTagName("input")
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: formElements.email.value,
      password: formElements.password.value
    }),
  }, (res) => {
    console.log(res)
  })
  return false
}
