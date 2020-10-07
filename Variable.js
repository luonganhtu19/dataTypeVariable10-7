function readVariable() {
    let i = 1;
    let f = 20.5;
    let b = true;
    let s = 'Hà Nội';
    document.write('i = ' + i);
    document.write('<br/>');
    document.write('f = ' + f);
    document.write('<br/>');
    document.write('b = ' + b);
    document.write('<br/>');
    document.write('s = ' + s);
}

function areaRec() {
    let leghtRec = +prompt("chiều dài", "0");
    let widthRec = +prompt("chiều rộng", "0");
    if (leghtRec != null && widthRec != null && leghtRec >= widthRec) {
        let area = leghtRec * widthRec;
        document.getElementById("leght1").value = leghtRec;
        document.getElementById("width1").value = widthRec;
        document.getElementById("Area").innerHTML = area;
    }
    else {
        alert("Your wrong input");
    }
}
function checkMultiples(){
    let number1 = +prompt("Number 1", "0");
    let number2 = +prompt("Number 2", "0");
    if (number1 != null && number2 != null && number2!=0 && number1>=number2 && number1%number2==0 ) {
        document.getElementById("Number1").value = number1;
        document.getElementById("Number2").value = number2;
        document.getElementById("multi").innerHTML = 'Yes, it is';
    }
    else {
        document.getElementById("multi").innerHTML= 'number1+"not multi"+number2';
    }
}