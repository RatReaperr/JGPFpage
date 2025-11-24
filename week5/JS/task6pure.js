function getSum(accumulator, item){  // reducer function
    console.log("acc",accumulator);
    console.log("val",item.value);
    return accumulator += parseFloat(item.value)}


function totup(myForm){
    let total = 0;
    let entries = Array.from(myForm.elements.entry);
    console.log (myForm.elements.entry);
    console.log (entries.join());
    total = entries.reduce(getSum,0);
    
    total = total * (1 - (myForm.elements.d1.value/100) ) ;   

    document.getElementById("totalled").innerHTML = total.toFixed(2);
}