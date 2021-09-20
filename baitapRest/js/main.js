const getVALUE = id => parseFloat(document.getElementById(id).value);

const Sum = (...num) => {
    // console.log(num);
    let Sum = 0;
    num.map((item) => {
        Sum += item;
        // console.log(Sum);
    });
    // console.log(Sum / num.length);
    return Sum / num.length
}

const Average1 = () => { 
    document.getElementById("tbKhoi1").innerHTML = parseFloat(Sum(getVALUE("inpToan"),getVALUE("inpLy"),getVALUE("inpHoa"))).toFixed(2);
}

const Average2 = () => { 
    document.getElementById("tbKhoi2").innerHTML = parseFloat(Sum(getVALUE("inpVan"),getVALUE("inpSu"),getVALUE("inpDia"),getVALUE("inpEnglish"))).toFixed(2);
}