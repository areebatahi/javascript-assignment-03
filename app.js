//1. 
var StudentName = ``;

// 2. 
var objectNatation = {

};

// 3. 
var strings = ["Areeba", "Barira", "Fatima", "Amna", "Muskan", "Summaya"];

// 4. 
var num = [12, 56, 5, 63, 78, 9, 45];

// 5. 
var boolean = [true, false, undefined, null, 0];

// 6.
var mixedArray = [true, 45, "Areeba", "Karachi", undefined, 56];

// 7. 

var qualificationsList = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write(
    "<h1> Qualifications </h1> " + "<ol>" + "<li>" + qualificationsList[0] + " </li>" + "<li>" + qualificationsList[1] + "</li>" + "<li>" + qualificationsList[2] + "</li>" + "<li>" + qualificationsList[3] + "</li>" + "<li>" + qualificationsList[4] + "</li>" + "<li>" + qualificationsList[5] + "</li>" + "<li>" + qualificationsList[6] + "</li>" + "<li>" + qualificationsList[7] + "</li>" + "</ol>"
)

// 8.
var Student_Name = ["Ali", "Ahmed", "Usman"];
var StudentMark = [320, 230, 480];

var totalMark = 500;
var StudentTotal_01 = (StudentMark[0] * 100) / 500;
var StudentTotal_02 = (StudentMark[1] * 100) / 500;
var StudentTotal_03 = (StudentMark[2] * 100) / 500;

document.write(
    "Score of " + Student_Name[0] + " is 320. percentage " + StudentTotal_01 + "%" + "<br>" +
    "Score of " + Student_Name[1] + " is 230. percentage " + StudentTotal_02 + "%" + "<br>" +
    "Score of " + Student_Name[2] + " is 480. percentage " + StudentTotal_03 + "%" + "<br>" + "<br>"
);

// 9.
// var colorName = [" Red ", " Yellow ", " Blue "];
// document.write(colorName + "<br>");

// colorName[0] = prompt("Enter any colour name to display in start");
// document.write(colorName + "<br>");

// var userColor = prompt("Enter any colour name to display in end");
// colorName.push(userColor);
// document.write(colorName + "<br>");

// colorName.push("Gold", "Voilet");
// document.write(colorName + "<br>");

// colorName.shift();
// document.write(colorName + "<br>");

// colorName.pop();
// document.write(colorName + "<br>");

// var userColorIndex = prompt("Enter position of color name");
// colorName[userColorIndex] = prompt("Enter any colour name");
// document.write(colorName + "<br>");

// var deleteIndex = +prompt("At which index you wants to delete a color");
// var deleteNumbr = +prompt("how many colors you want to delete");
// colors.splice(deleteIndex,deleteNumbr);
// document.write(colors+ "<br><br><br>");

// 10.
var numbers = [320, 230, 480, 120];
document.write(
    "Score of Student : " + numbers + "<br>" + "Ordered Score of Student : " + numbers.sort()
);


// 11. 
var cityName = ["Karachi", "Islamabad", "Lahore", "Qutta", "Multan", "Sukkar", "Peshawar"]


// 12.
var arr = ["This", "is", "my", "cat"];
var arrayJoin = arr.join(" ");
document.write(
    "<h1> Arrays :</h1>" + arr + "<h1>Strings  :</h1>" + arrayJoin
);

// 13.
var device = ["Keyboard", "Mouse", "Printer", "Moniter"];
document.write(
    "<h1>Device: </h1>" + device + "<br>" + "<h3>Out: </h3>" + device[0] + "<h3>Out: </h3>" + device[1] + "<h3>Out: </h3>" + device[2] + "<h3>Out: </h3>" + device[3]
);

// 14.
document.write(
    "<h1>Device: </h1>" + device + "<br>" + "<h3>Out: </h3>" + device[3] + "<h3>Out: </h3>" + device[2] + "<h3>Out: </h3>" + device[1] + "<h3>Out: </h3>" + device[0]
);

// 15.
var phoneManufacture = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write(
    "<h1> phone manufacturers </h1> " + "<ol>" + "<li>" + phoneManufacture[0] + " </li>" + "<li>" + phoneManufacture[1] + "</li>" + "<li>" + phoneManufacture[2] + "</li>" + "<li>" + phoneManufacture[3] + "</li>" + "<li>" + phoneManufacture[4] + "</li>" + "<li>" + phoneManufacture[5] + "</li>" + "</ol>"
);