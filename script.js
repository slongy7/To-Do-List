// var date = moment().format('dddd');
// var x = document.getElementById("currentDay")

// moment(date).format('dddd'); 
// moment(date).format("MMM Do YY");

var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));
