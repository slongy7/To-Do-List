// var date = moment().format('dddd');
// var x = document.getElementById("currentDay")

// moment(date).format('dddd'); 
// moment(date).format("MMM Do YY");

var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));

var currentHour = moment().hour();
console.log ($(".row"))
var timeSlotList = $(".row")
    for (var i = 0; i < timeSlotList.length; i++) {
        console.log ($(timeSlotList[i]).attr("id"))
        var timeSlotHour = parseInt($(timeSlotList[i]).attr("id"))
        if (timeSlotHour === currentHour) {
            $(timeSlotList[i]).children()[1].classList.add("present")
        }
        else if(timeSlotHour < currentHour) {
            $(timeSlotList[i]).children()[1].classList.add("past")
        }
        else {
            $(timeSlotList[i]).children()[1].classList.add("future")
        }
    }

    localStorage.setItem("9", "hello");
    console.log(localStorage.getItem(9))



