var clock = setInterval(clockTiming, 1000);

function clockTiming(){
    var d= new Date();
    // var localTime= d.toLocaleTimeString();
    var h= d.getHours();
    var m= d.getMinutes();
    var s= d.getSeconds();
    document.getElementById('hour').innerHTML= h+":";
    document.getElementById('min').innerHTML= m+":";
    document.getElementById('sec').innerHTML= s;

}