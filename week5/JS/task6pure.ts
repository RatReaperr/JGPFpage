function getSumx(accumulator:number, item:RadioNodeList){  // reducer function
    console.log("acc",accumulator);
    console.log("val",item.value);
    return accumulator += parseFloat(item.value)}


function totupx(myForm:any){
    let total:number = 0;
    let entries: RadioNodeList[] = Array.from(myForm.elements.entry);
    console.log (myForm.elements.entry);
    console.log (entries.join());
    total = entries.reduce(getSumx,0);
    
    total = total * (1 - (myForm.elements.d1.value/100) ) ;   

    document.getElementById("totalled")!.innerHTML = total.toFixed(2);
}