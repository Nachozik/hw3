//Промисы
// const promise = new Promise((resolve, reject) => {
//     resolve("успешно");
// });
// const onFullFilled = (text) => {
//     console.log('resolve '+text)
// };
// const onReject = (text) => {
//     console.log('rejected '+text)
// };
// promise.then(onFullFilled,onReject);
// const URL = "https://jsonplaceholder.typicode.com/users";
// const myFetch = (url) => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//
//         xhr.open('GET', url, true);
//         xhr.onload = () => {
//             if(xhr.status===200)
//                 return resolve(xhr.response);
//             else return reject('Произошла ошибка при получении данных')
//         };
//         xhr.onerror = () => {
//             reject('Произошла ошибка')
//         };
//         xhr.send()
//     })
// };
// myFetch(URL)
//     .then(response => JSON.parse(response))
//     .then(data => console.log(data))
//     .catch(e => console.log("Error "+ e))
// ;
const inpuT = document.getElementById('inputInput');
const button = document.getElementById('inputButton');

function promise() {
    return new Promise((resolve, reject) => {
    let age = inpuT.value;
    if (age == 19){
        resolve("Ага:)")
    }else
        {
            reject("Не-а, - 19")
        }
});
}
const onResolve = (text) => {
    console.log(text)
};
const onReject = (text) => {
    console.log(text)
};
button.onclick = ()=> {
   promise()
       .then(onResolve)
       .catch(onReject)
};