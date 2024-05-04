var i = 0;
var txt = "//Full Stack Developer";
var speed = 70; 

function typeWriter() {

  if (i < txt.length) {
    document.getElementById("hi").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


typeWriter();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }

    })
})

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));