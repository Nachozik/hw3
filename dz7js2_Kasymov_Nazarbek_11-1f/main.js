const da = document.getElementById('Da');
const net = document.getElementById('Net');
const vopros = document.getElementById('Vopros');
let answer;
function promise() {
    return new Promise((resolve,reject) =>{
        if(answer==true){
            resolve("На")
        } else {
            reject("Держи")
        }
    })
}
function reshenie() {
    da.remove();
    net.remove();
    promise()
        .then(data => vopros.innerHTML = data+`<img src="images/izolenta.jpeg" alt="" width="300" height = "300">`)
        .catch(data => vopros.innerHTML = data+`<img src="images/wd40.jpg" alt="" width="300" height = "300">`)
}
da.onclick = () => {
    answer = true;
    reshenie()
};
net.onclick = () => {
    answer = false;
    reshenie()
};