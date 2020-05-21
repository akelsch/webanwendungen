/* eslint-env browser */
const form = document.getElementById('form')
const response = document.getElementById('response')

form.onsubmit = event => {
  event.preventDefault()

  const url = new URL(event.target.action)
  const queryParams = new URLSearchParams(new FormData(event.target))
  url.search = queryParams

  fetch(url)
    .then(response => response.json())
    .then(data => {
      response.textContent = '\n' + JSON.stringify(data, null, 2)
    })
}
