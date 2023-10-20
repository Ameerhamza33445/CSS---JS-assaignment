//    ------ Event Number 1: -------

for
   (var i = 2; i <= 50; i +=2) {
   console.log(i);
}

//    ------ odd Number 2: ------

for
   (var i = 1; i <= 50; i += 2) {
   console.log(i);
}


//   --------- QUESTION 3: ----------

for
    (var i = 1; i <50; i++){
      document.write(i,i % 2 === 0 ? " (Even) " : " (Odd) ");
      document.write("<br>");
    }

 
     // ------ QUESTION 4: --------

 var Sir = 10;

for
  (var i = 1; i <= Sir; i++) {
  var row = "";
  for (var k = 1; k <= i; k++) {
    row += k;
  }
  document.write(row);
  document.write("<br>")
}


      // ------ QUESTION 5: --------


var stud = [
   {
      Name: "hamza",
      age: 21,
      qualification: "web developer",
      experience: "1 year",
      headsir: "sir ahmer",
   },
   {
      Name: "kawish",
      age: 80,
      qualification: "web developer",
      experience: "4 year",
      headsir: "sir ahmer",
   },
   {
      Name: "yousuf",
      age: 90,
      qualification: "web developer",
      experience: "0 year",
      headsir: "sir ahmer",
   },
   {
      Name: "ahmad shah",
      age: 10,
      qualification: "web developer",
      experience: "0 year",
      headsir: "sir ahmer",
   },
   {
      Name: "ali",
      age: 15,
      qualification: "web developer",
      experience: "1 year",
      headsir: "sir ahmer",
   },
   {
      Name: "sani",
      age: 21,
      qualification: "web developer",
      experience: "1 year",
      headsir: "sir ahsan",
   },
   {
      Name: "sami",
      age: 21,
      qualification: "web developer",
      experience: "1 year",
      headsir: "sir ahsan",
   },
   {
      Name: "ahsan",
      age: 17,
      qualification: "web developer",
      experience: "1 year",
      headsir: "sir ahmer",
   },
   {
      Name: "saqib",
      age: 25,
      qualification: "web developer",
      experience: "2 year",
      headsir: "sir ahmer",
   },
   {
      Name: "sadiq",
      age: 20,
      qualification: "web developer",
      experience: "1 year",
      headsir: "sir ahtesham",
   },
]
for
   (var i = 0; i < stud.length; i++) {

   document.write("Name :", stud[i].Name)
   document.write(" <br> age :", stud[i].age)
   document.write(" <br> qualification :", stud[i].qualification)
   document.write(" <br> experience :", stud[i].experience)
   document.write(" <br> heasir :", stud[i].headsir)
   document.write("<hr>");
}





