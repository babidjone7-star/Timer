let timer = 0;
let isStart = false;
let IdInterval = null; 
const inp = document.querySelector('#tinp');
let seconds;
const sound = new Audio('sound.mp3');
function Start(){
    if(IdInterval === null){
     timer = 0;
     isStart= true;
     IdInterval = setInterval(tick, 1000);
    }
}
function OtherStart(){
  if(IdInterval === null){
    const value = Number(inp.value);  
    seconds = value;
    timer = seconds;
    isStart= true;
    IdInterval = setInterval(OtherTick, 1000);
  }if(inp === null){
    Stop();
  }
}
function OtherTick(){
  if(isStart == true){
    timer--;
    document.getElementById('timer').textContent = 'Времени осталось: ' + timer;
    if(timer <= 0){
      sound.play();
      IdInterval = clearInterval(IdInterval);
      IdInterval = null;
      timer = 0;
    }
  }
}
function tick(){
  if(isStart == true){
    timer++;
    document.getElementById('timer').textContent = 'Времени прошло: ' + timer;
  }
}
function Pause(){
    IdInterval = clearInterval(IdInterval);
    IdInterval = null;
    isStart = false;
}
function Stop(){
    IdInterval = clearInterval(IdInterval);
    IdInterval = null;
    timer = 0;
    isStart = false;
    document.getElementById('timer').textContent = 'Таймер был сброшен..';
}