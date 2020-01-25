document.getElementById("output").style.visibility="hidden";
document.getElementById("lbsInput").addEventListener('input',(event)=>{
    const lbsInput = event.target.value;
    console.log(lbsInput);
    document.getElementById("output").style.visibility="visible";
    document.getElementById("ozOutput").innerHTML= lbsInput * 16;
    document.getElementById("kgOutput").innerHTML=lbsInput / 2.2046;
    document.getElementById("gramsOutput").innerHTML=lbsInput / 0.0022046;
});