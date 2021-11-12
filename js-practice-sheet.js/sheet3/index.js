const copyBtn = document.getElementById("btn-copy")

copyBtn.addEventListener("click", async() => {
    const content = document.getElementById("content-copy").textContent
    await navigator.clipboard.writeText(content)
    const copied = await navigator.clipboard.readText()
    console.log(copied);
})