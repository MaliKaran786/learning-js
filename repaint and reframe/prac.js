// code 1
const t1=performance.now();
for(let i=0;i<100;i++){
  let mypara1=document.createElement('p');
  mypara1.textContent="This is Para: "+i;
  document.body.appendChild(mypara1);
} 
const t2=performance.now();
console.log("For code 1",+(t2-t1));//higher

//code 2
const t3=performance.now();
let mydiv=document.createElement('div');
for(let i=0;i<100;i++){
  let mypara2=document.createElement('p');
  mypara2.textContent="This is Para: "+i;
  mydiv.appendChild(mypara2)
}
document.body.appendChild(mydiv);
const t4=performance.now();
console.log("For code 2",+(t4-t3));//lesser

//code 3
const t5=performance.now();
let frag=document.createDocumentFragment();
for(let i=0;i<100;i++){
  let mypara2=document.createElement('p');
  mypara2.textContent="This is Para: "+(i+100);
  frag.appendChild(mypara2)
}
document.body.appendChild(frag);
const t6=performance.now();
console.log("For code 3",+(t6-t5));//lesser than 2 or might be higher sometimes
