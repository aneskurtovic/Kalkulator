function rezultat(x){
    document.getElementById("rezultat").value+=x;
}

function kalkulacija(){
    let x = document.getElementById("rezultat").value;
    let y = eval(x);
    if (y === undefined){
        alert("Greška");
    }
    document.getElementById("rezultat").value=y;
}

function cls(){
    document.getElementById("rezultat").value= "";
}

