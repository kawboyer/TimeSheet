//FireBase

// Tracking multiple users so we don't delete with set()
//changing set() to push()
// adds the information to the data base and makes a new ref/push ids and adds the object underneth the previous one
var config = {
    apiKey: "AIzaSyDO8JAaS8MR5uF0oBA-jDRcsaHLWKWqsk8",
    authDomain: "imesheet.firebaseapp.com",
    databaseURL: "https://imesheet.firebaseio.com",
    projectId: "imesheet",
    storageBucket: "",
    messagingSenderId: "172183090490"};

    firebase.initializeApp(config);

var employee ="";
var role = "";
var startDate = "";
var monthsWorked = 0;
var monthlyRate =0;
var totalBilled = 0;

var dataRef = firebase.database ()

$("#submit").on("click", function(){
    event.preventDefault();
    employee = $("#name-input").val().trim();
    role = $("#role-input").val().trim();
    startDate = $("#date-input").val().trim();
    monthlyRate = $("#rate-input").val().trim();



    //var newCol = $("<td>")
    //newCol.text(employee).append("#trow");
    //console.log(employee);
    dataRef.ref().push({
        name: employee,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate   
})

})

dataRef.ref().on("child_added", function(snapshot){
    console.log(snapshot.val());
    
    
    
    $(".tbody").append("<tr><td>" + snapshot.val().name + "</td>"+
    "<td>" + snapshot.val().role + "</td>" +
    "<td>" + snapshot.val().startDate + "</td>" +
    "<td>" + monthsWorked + "</td>"+
    "<td>" + snapshot.val().monthlyRate + "</td>" +
    "<td>" + totalBilled + "</td></tr>" )
})



