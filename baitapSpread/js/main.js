const str = "HoverMe!"
const chart = [...str];
console.log(chart);

const hover = () => {
    let content = "";
    chart.map((item) => { 
        content +=  `<span>${item}</span>`
    })
    document.querySelector(".heading").innerHTML = content;
}

hover();
