let count = 0;
document.getElementById("decreaseBtn").onclick = ()=>{
    count -= 1;
    document.getElementById("countLable").innerHTML = count;
};
document.getElementById("increaseBtn").onclick = ()=>{
    count += 1;
    document.getElementById("countLable").innerHTML = count;
};
document.getElementById("resetBtn").onclick = ()=>{
    count = 0;
    document.getElementById("countLable").innerHTML = count;
};