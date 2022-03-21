document.querySelector('form').onsubmit = function greet() {
    let x1=document.querySelector('#name').value;
    alert(`Hey ${x1}`)   
}