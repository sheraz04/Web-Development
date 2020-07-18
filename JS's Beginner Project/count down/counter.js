

var countToDate = new Date("Jun 20, 2019 20:44:30").getTime();


var x = setInterval(function(){
    
    
    var currentDate = new Date().getTime();
    
    var distance = countToDate - currentDate;
    
    var day = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24))/ (1000*60*60) );
    var min = Math.floor((distance % (1000 * 60 * 60))/ (1000*60) );
    var sec = Math.floor((distance % (1000 * 60))/ (1000) );
    
    document.getElementById('date').innerHTML = day + " Days, " + hours + " Hours, " + min + " Minuts, " + sec + " Seconds ";
    
    
},1000);

