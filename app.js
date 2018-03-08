//FireBase
// Tracking multiple users so we don't delete with set()
//changing set() to push()
// adds the information to the data base and makes a new ref/push ids and adds the object underneth the previous one

var employee ="";
var role = "";
var startDate = "";
var monthsWorked = 0;
var monthlyRate =0;
var totalBilled = 0;

$("#submit").on("click", function(){
    event.preventDefault();
    employee = $("#name-input").val().trim();
    var newCol = $("<td>")
    newCol.text(employee).append("#trow");
    console.log(employee);

})