const circle = document.querySelector(".circle")
// const  = document.querySelector(".circle")
 
const nums = document.querySelectorAll(".nums > *");
const numsEl = document.querySelectorAll(".num > span");
var numOfDots = 30;

for (let i = 0; i < numOfDots; i++) {

    var dotEl = document.createElement('div')
    dotEl.setAttribute("class", "dots");
    dotEl.style.transform = `translateX(-50%) rotate(${i * 6}deg)`;
    if(i % 7.5 === 0){
        dotEl.classList.add('bigdot')
    }
    circle.appendChild(dotEl);
};

nums.forEach((item, idx) => {
  item.style.transform = `translate(-50%, -50%) rotate(${idx * 30}deg)`;
});
numsEl.forEach((item, idx) => {
  item.style.transform = `rotate(${-1 * (idx * 30)}deg)`;
  item.style.color = `hsl(${idx * 7 + 120}, 100%, 50%)`;
});

setInterval(() => {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  document.documentElement.style.setProperty("--hour", hour);
  document.documentElement.style.setProperty("--min", min);
  document.documentElement.style.setProperty("--sec", sec);
  console.log(new Date().getSeconds());
}, 1000);
