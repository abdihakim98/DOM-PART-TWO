//1 Resize Event

const funImage = document.querySelector(".funbus-img")
window.addEventListener("resize", () => {
    funImage.src = "https://www.universetoday.com/wp-content/uploads/2014/09/640px-Uranus2-e1440522974666.jpg"
})

//2 dblclick Event


const changeIma = document.querySelector(".image-con")

changeIma.addEventListener("dblclick", () => {
  changeIma.src = "https://www.universetoday.com/wp-content/uploads/2014/09/640px-Uranus2-e1440522974666.jpg"
})


3//scroll event

window.addEventListener('scroll', () => {
    console.log('scrolled!');

})

4// change color/Titles

//const Titles = document.querySelectorAll("h2")

//Titles.forEach(function(item) {

  //item.addEventListener("click", (event) => {
    //event.target.style.backgroundColor = "green"
 // })

//})

5// event propagation/bubbling

const Title = document.querySelector("h2")

Title.addEventListener("click", (event) => {
  Title.style.backgroundColor = "green"
})

const bodyu =document.querySelector(".intro")

bodyu.addEventListener("click", function() {

  bodyu.style.backgroundColor = "lightblue"
})

let mainbody = document.querySelector("body")

mainbody.addEventListener("click", function() {
  mainbody.style.backgroundColor = "lightyellow"
  
})


6// preventDefault()

const homebutton = document.querySelector(".nav")
homebutton.addEventListener("click", function(event) {
  
 event.preventDefault()

})
