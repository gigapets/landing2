let expand = document.getElementsByClassName('expand');
console.log(expand);
let port = document.getElementsByClassName('port');
console.log(port)
expand.onclick = () => {
 Array.from(port).classList.toggle('appear')
}