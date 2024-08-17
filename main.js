// let texth1 = document.querySelector(".textClass")
// let texth2 = document.querySelector("#textId")

// texth1.textContent = "Hellooooooooo"

// texth1.style.color = "black"
// texth1.style.backgroundColor = "yellow"
// texth1.style.fontSize = "55px"
// texth1.style.textAlign = "center"
// texth1.style.border = "solid 5px black"

// texth2.textContent = "Hello world"
// texth2.style.textAlign = "center"

// console.log(texth1);
// console.log(texth2);


// let a = prompt("Ismingizni kiriting")
// let b = prompt("Hohlagan color kiriting")
// let c = prompt("Hohlagan text colorni yozing")

// let first = document.querySelector(".firstClass")
// first.textContent = `${a}`

// first.style.backgroundColor = `${b}`
// first.style.color = `${c}`
// first.style.textAlign = "center"

// let img = document.querySelector(".img")
// img.setAttribute("src", "https://avatars.mds.yandex.net/i?id=6e0dee3dc366e493d0d0049fb4008bb1542caad7-4575688-images-thumbs&n=13")

let num1 = document.querySelector(".numRa");
let box = document.querySelector(".box");
let randomNum = Math.floor(Math.random() * 100) + 1;
num1.textContent = randomNum;
num1.style.color = "red";
box.style.fontSize = "100px";
box.style.backgroundColor = "black";
box.style.marginTop = "150px";
box.style.display = "flex";
box.style.justifyContent = "center";