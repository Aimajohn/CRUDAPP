var limite = 150;
var text = document.getElementById('textarea')
text.addEventListener('keydown', maximo)
function maximo(){
if(text.value.length>=limite){
text.value=text.value.substring(0,limite);
    }
}


