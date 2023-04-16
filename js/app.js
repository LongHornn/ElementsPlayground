document.getElementById("submit").onclick = function() {
    const element = document.getElementById("element").value;
    const content = document.getElementById("content").value;
    const color = document.getElementById("color").value;

    if (element !=="") {
        document.getElementById("out").innerHTML = `<${element} style="color: ${color};">${content}</${element}>`;
    } else {
        document.getElementById("out").innerHTML = `<span style="color: ${color};">${content}</span>`;
    }
}