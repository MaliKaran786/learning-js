function changeColor(){
  const hex='0123456789ABCDEF';
  let hexcode='#';
  for(let i=0;i<6;i++){
    hexcode+=hex[Math.floor(Math.random()*17)]
  }
  return hexcode;
}
let interval
function StartColorChange(){
  function changeBG(){
    const box = document.querySelector('#mydiv');
    box.style.backgroundColor = changeColor();
  }
  
  if(!interval){
    interval=setInterval(changeBG,1000);
    console.log(`Started!`)
  }
}
function StopColorChange(){
  console.log(`Stopped!`)
  clearInterval(interval);
  interval=null
}
document.querySelector('#but1').addEventListener('click',StartColorChange);
document.querySelector('#but2').addEventListener('click',StopColorChange);
