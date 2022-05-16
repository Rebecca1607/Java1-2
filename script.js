var age=25
if (age>18) {
  console.log("You can vote");
} else { (age<18) 
  console.log("Sorry you can't vote");
}

var table = 6
var length = 21
var i = 1

document.write("multiplication table:" + table);
for (i = 1; i <= length; i++)
document.write("<br>"+i+" * "+table+" = "+(i * table));
