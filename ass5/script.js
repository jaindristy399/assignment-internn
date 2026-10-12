
function area(l = 5, w = 4) {
    return l * w;
}

const arrowArea = (l = 5, w = 4) => l * w;

function showResults() {
    let result = `
        <p>Standard Function Area (Default 5x4): ${area()}</p>
        <p>Arrow Function Area (Custom 10x3): ${arrowArea(10, 3)}</p>
    `;

    {
        let blockVar = 10;
    }

    try {
        console.log(blockVar);
    } catch (error) {
        result += `<p>Scope Test Error: ${error.toString()}</p>`;
    }

    document.getElementById("output").innerHTML = result;
}