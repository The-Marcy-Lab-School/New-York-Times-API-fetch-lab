document.addEventListener("DOMContentLoaded", (e) => {
  console.log("The DOM has loaded. The top stories should be fetched now!")
})

document.querySelector("#search-form").addEventListener("submit", (e) => {
  e.preventDefault()
  const searchTerm = e.target[0].value
  console.log(`The Search Stories form has been submitted with search term: "${searchTerm}"`)
})

document.querySelector("#most-popular-form").addEventListener("submit", (e) => {
  e.preventDefault()
  const criteria = e.target[0].value
  const period = e.target[1].value
  console.log(`The Most Popular Stories form has been submitted with criteria: "${criteria}" and period: "${period}"`)
})