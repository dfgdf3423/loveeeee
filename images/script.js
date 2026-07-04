
function time(){
const s=new Date("2023-01-30"),n=new Date();
let d=Math.floor((n-s)/1000);
let day=Math.floor(d/86400);
document.getElementById("counter").innerText="已在一起 "+day+" 天";
}
setInterval(time,1000);time();

const g=document.getElementById("grid");
for(let i=1;i<=10;i++){
let img=document.createElement("img");
img.src=`images/${String(i).padStart(2,'0')}.jpg`;
g.appendChild(img);
}
