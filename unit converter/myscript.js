var feet = document.getElementById('feet');

var Inch = document.getElementById('Inch');

feet.addEventListener('input', function(){
    let f= this.value;
    let i= f*12;
    Inch.value = i;
});
Inch.addEventListener('input', function(){
    let i= this.value;
    let f= i/12;
    if( !Number.isInteger(f)){
        f = f.toFixed(2);
    };
    feet.value = f;
});