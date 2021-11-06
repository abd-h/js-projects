/* Create two variables: 
        1. inputBtn --> should be assign to an empty array  
        2. inputEl --> should be assaign to the text input      */ 

let myLeads = []
const   inputEl = document.querySelector("#input-el")
const   inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")
console.log(ulEl);
inputBtn.addEventListener("click", () => {
  myLeads.push( inputEl.value)
  inputEl.value = ""
  renderMyLead()
})

function renderMyLead() {
    //   const li = document.createElement('li')
    let listItems = ""
  for (let i = 0; i < myLeads.length; i++) {
    listItems = `<li> 
                                <a href= "${myLeads[i]}" target="_blank">
                                            ${myLeads[i]}
                                </a>
                      </li>`
    //   li.textContent = myLeads[i]
    //     ulEl.append(li)
    }
    ulEl.innerHTML += listItems
}

localStorage.setItem("Notes", "www.apple.com")
console.log(localStorage.getItem("Notes"));
localStorage.clear()
console.log(localStorage.getItem("Notes"));