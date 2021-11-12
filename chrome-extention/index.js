  /* Create two variables: 
        1. inputBtn --> should be assign to an empty array  
        2. inputEl --> should be assaign to the text input      */ 

  let myLeads = []
  const   inputEl = document.querySelector("#input-el")
  const   inputBtn = document.querySelector("#input-btn")
  const ulEl = document.querySelector("#ul-el")
  const deleteBtn = document.querySelector("#delete-btn")
  const saveTab = document.getElementById("save-tab")
  console.log(deleteBtn);
  console.log(ulEl);

  const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
  console.log(leadsFromLocalStorage)

  if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
  }

  saveTab.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          myLeads.push(tabs[0].url)
          localStorage.setItem("myLeads", JSON.stringify(myLeads))
          render(myLeads)
    })
  })

  function render(leads) {
    //   const li = document.createElement('li')
    let listItems = ""
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li> 
                                <a href= "${leads[i]}" target="_blank">
                                            ${leads[i]}
                                </a>
                      </li>`
    //   li.textContent = myLeads[i]
    //     ulEl.append(li)
    }
    ulEl.innerHTML = listItems
  }

  // const tabs = {url: "https://github.com/MarkVed17/learn-javascript-scrimba/tree/master/5.%20Build%20a%20Chrome%20Extension"}
  // const tab = `<li>${tabs.url}</li>`
  

  deleteBtn.addEventListener("dblclick", () => {
    
    localStorage.clear()
    myLeads = []
    render(myLeads)
  })

  inputBtn.addEventListener("click", () => {
  myLeads.push( inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
  })

  // localStorage.setItem("Notes", "www.apple.com")
  // console.log(localStorage.getItem("Notes"));
  // localStorage.clear()
  // console.log(localStorage.getItem("Notes"));