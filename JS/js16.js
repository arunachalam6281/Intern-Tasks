const button = document.getElementById("addButton");
const list = document.getElementById("list");
button.addEventListener("click",function() {
    // const items = list.querySelectorAll("li");
    // items.forEach(a => a.remove());
    // list.style.display = "none";
    // list.textContent = "";
    list.remove();
    console.log(list);
    console.log(document.getElementById("list"));
})
for(let i = 0;i < 5;i++)
{
        const item = document.createElement("li");
        item.textContent = "Item : " + (i + 1);
        list.appendChild(item);
}