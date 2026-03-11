function taskCount(list){
return list.length;
}

function testTaskCount(){

const tasks = ["task1","task2","task3"];

if(taskCount(tasks) === 3){
console.log("TEST PASSED");
}else{
console.log("TEST FAILED");
}

}

testTaskCount();