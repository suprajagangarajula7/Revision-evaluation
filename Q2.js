
function createRateLimiter(limit, interval){
    let callCount=0;

    setInterval(()=>{
        callCount=0;
    }, interval)

    return function(){
        if (callCount>= limit){
            return "Rate limit exceeded. Try again.";
        }
        callCount++;
        return "Call successful"
    }
}