
function Wait(ms){
 return new Promise(resolve=> setTimeout(resolve,ms));
}

async function runSequential(task,delay) {
    const results= [];

    for(let i=0; i<task.length; i++){
        try{
            const result= await task[i]();
            results.push(result);

            if (i<task.length-1){
                await Wait(delay);
            }
        }catch(error){
            throw new Error(`Task ${i+1} failed ${error}`);

        }
    }
    return results;
}