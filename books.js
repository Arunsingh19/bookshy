var popup_overlay = document.querySelector(".popup-overlay")
var popup_box = document.querySelector(".popup-box")

var add_popup_button = document.getElementById("add-popup-button")

add_popup_button.addEventListener("click",function(){
    popup_overlay.style.display = "block"
    popup_box.style.display = "block"
})

var cancel_popup = document.getElementById("cancel-popup")

cancel_popup.addEventListener("click",function(){
    event.preventDefault()
    popup_overlay.style.display = "none"
    popup_box.style.display = "none"
})

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var book_title = document.getElementById("book-title-input")
var book_author = document.getElementById("book-author-input")
var book_description = document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${book_title.value}</h2>
    <h5>${book_author.value}</h5>
    <p>${book_description.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popup_overlay.style.display = "none"
    popup_box.style.display = "none"
})

function deletebook(event){
    event.target.parentElement.remove()
}
