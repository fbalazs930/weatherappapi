var input = document.querySelector('.input_text');
var cName = document.querySelector('#name');
var temp = document.querySelector('.temp');
var button= document.querySelector('.submit');

function search(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=2cbb02872cc7e2a1ee53454e4b98b7db')
        .then(response => response.json())
        .then(data => {    
        cName.innerHTML = data['name'];
        temp.innerHTML = Math.round((data['main']['temp']-273)) + "°C";
        input.value ="";    
    })
}

button.addEventListener('click', search);
window.addEventListener('keypress', (e)=>{
    if(e.keyCode===13){
        search();
    }
});
