let stars = document.querySelector("#stars")
let shoot = document.querySelector("#shoot")

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    stars.style.left = -100 + value * 0.09 + "px";
    stars.style.top = value * 0.01 + "px";

    shoot.style.left = value * 1.5 + "px"
})




function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

 

  