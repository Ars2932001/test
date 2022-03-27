window.onload = () => {
    const arr = [-5,67,1,2,5,-1];
    function sortNum(a, b) {
        return a - b;
    }
    const arr1 = Array.prototype.filter.call(arr, val => {
        if(val > 0) {
            return true;
        }
    })
    .map((val) => {
        return val ** 5;
    })
    .sort(sortNum)
    .reverse();
    for(let a of arr1){
        console.log(a);
    }
};