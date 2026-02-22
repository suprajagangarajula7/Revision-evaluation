//  Build a Countdown Timer
// function createCountdown(seconds, onTick, onComplete)

// Requirements
// a. Call onTick every second with remaining time.
// b. Call onComplete when countdown finishes.
// c. Provide pause() and resume() methods.
// d. Maintain state privately.
// e. Must not drift significantly over time.

function createCountdown(seconds, onTick, onComplete){
    let remaining= seconds;
    let timerId= null;
    let isPaused= false;
    let expected= Date.now() + 1000;

    function tick(){
      const drift=Date.now() - expected;
      if(!isPaused){
        remaining--;
      }

      if (remaining>0){
        onTick(remaining);
        expected+= 1000;
        timerId= setTimeout(tick, 1000-drift);
      }else{
        onTick(0);
        onComplete();   
      }
    }

function start(){
    expected= Date.now() + 1000;
    timerId= setTimeout(tick, 1000);
}
function pause(){
    isPaused= true;
    clearTimeout(timerId);
}

function resume(){
    if(!isPaused) return;
    isPaused=false;
    start();
}

start();

return{
    pause, 
    resume
};
}
