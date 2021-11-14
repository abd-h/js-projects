const myLeads = []
const inputBtn = document.getElementById("input-el")
const ulEl = document.getElementById("el-el")
const saveTab = document.getElementById("save-tab")
const deleteBtn = document.getElementById("delete-el")

let myLeadsFromLocalStorage = localStorage.setItem(JSON.stringify("myLeads", "myLeads"))

if(localStorage){
    myLeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    leads.map(a => listItems += `<li><a href="${a}">${a}</a></li>`)
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", () => {
    myLeads.push(ulEl.value)
    ulEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify("myLeads"))
    render(myLeads)
})

saveTab.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true},(currentTab) =>{
        currentTab[0].url
    })
    localStorage.setItem("myLeads", JSON.stringify("myLeads"))
    render(myLeads)
})

