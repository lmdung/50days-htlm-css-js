const toggle = document.querySelector('.toggle');
const needleHour = document.querySelector('.hour');
const needleMinute = document.querySelector('.minute');
const needleSecond = document.querySelector('.second');
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const listBtn = document.querySelectorAll('.toggle');

const  days= ["Monday", "Tuesday", "Wednesday", "Thursday",
"Friday", "Saturday", "Sunday" ];
const mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerText = 'Dark Mode'

  } else {
    html.classList.add('dark');
    e.target.innerText = 'Light Mode'
  }

  const topEl = e.clientY - e.target.offsetTop;
  const leftEl = e.clientX - e.target.offsetLeft;
  const spanEl = document.createElement('span');
  spanEl.classList.add('click')
  spanEl.style.top = topEl + 'px';
  spanEl.style.left = leftEl + 'px';
  toggle.appendChild(spanEl)
})

// listBtn.forEach(btn => {
//   btn.addEventListener('click', e => {
//     const topEl = e.clientY - e.target.offsetTop;
//     const leftEl = e.clientX - e.target.offsetLeft;
//     const spanEl = document.createElement('span');
//     spanEl.classList.add('click')
//     spanEl.style.top = topEl + 'px';
//     spanEl.style.left = leftEl + 'px';
//     btn.appendChild(spanEl)
//   })
// })
// function setTime() {
//   const date = new Date();
//   const minute = date.getMinutes();
//   const hour = date.getHours()%12;
//   const second = date.getSeconds();
//   needleHour.style.transform =`
//     translate(-50%, -100%) rotate(${scale(hour + scale(minute/100, 0, 1, 0, 1), 0, 11, 0, 360)}deg)`
//   needleMinute.style.transform = `
//     translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`
//   needleSecond.style.transform = `
//     translate(-50%, -100%) rotate(${scale(second, 1, 59, 0, 360)}deg)`
// }
// // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// function scale (number, inMin, inMax, outMin, outMax) {
//   return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
// }


let counter = { //counter tăng lên sau mỗi vòng. Để tránh transform ngược
	s: 0,
  a: 0,
  o: 0
};
let previous = null;

function clock() { 
  const t = new Date();
  const hour = t.getHours();
  const minute = t.getMinutes();
  const second = t.getSeconds();
  const month = t.getMonth();
  const day = t.getDay();
  const dayOfMonth = t.getDate();
  const s = second * 6;
  const a = minute* 6;
  const o = hour % 12 / 12 * 360 + (a / 12);

  if (previous){
    
  	if(s < previous.s){
    	counter.s += 1;
    }
    if(a < previous.a){
    	counter.a += 1;
    }
    if(o < previous.o){
    	counter.o += 1;
    }
  }
  
  previous = {
  	s: s,
    a: a,
    o: o
  };
  needleSecond.style.transform = `
    translate(-50%, -100%) rotate(${(s + 360 * counter.s)}deg)`
  needleHour.style.transform =`
    translate(-50%, -100%) rotate(${o + 360 * counter.o}deg)`
  needleMinute.style.transform = `
    translate(-50%, -100%) rotate(${a + 360 * counter.a}deg)`
  // $(".hour").css("transform", "rotate(" + (o + 360 * counter.o) + "deg)");
  // $(".minute").css("transform", "rotate(" + (a + 360 * counter.a) + "deg)");
  // $(".second").css("transform", "rotate(" + (s + 360 * counter.s) + "deg)");

  time.innerText = `${hour}:${minute < 10 ? 0 : ''}${minute}:${second < 10 ? 0 : ''}${second}`;
  date.innerHTML =`${mS[month]} ${days[day]} <span class="circle">${dayOfMonth}</span>`;
}

setInterval(clock, 1000)
// setTime();
// setInterval(setTime, 1000);

