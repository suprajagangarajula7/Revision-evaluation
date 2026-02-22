function mySetInterval(callback, delay){
    let timeId= null;
    let isActive= true;

    function run(){
        if(!isActive) return;

        callback();
        timeId= setTimeout(run,delay);
    }
     timeId= setTimeout(run,delay);
     return timeId;

     function myClearInterval(id){
        clearTimeout(id);
     }
}