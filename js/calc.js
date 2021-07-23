function budgets(budget, p1, p2, p3, p4) {
    console.log(`Here is your budget calculation`);
    console.log(` `);
    console.log(`Your Budget is :${budget}`);
    console.log(`1st Product : ${p1}`);
    console.log(`2nd Product : ${p2}`);
    console.log(`3rd Product : ${p3}`);
    console.log(`4th Product : ${p4}`);

    let balance;
    let cost;
    balance = budget;
    cost= p1+p2+p3+p4;

    document.getElementById("list").innerHTML=" ";

    if(balance == 0 || p1 == 0 || p2 == 0 || p3 == 0 || p4 == 0){
        alert("Check your input");
    }

    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`Here is your budget calculation`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list").appendChild(node);

    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(` `);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list").appendChild(node);

    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`Your Budget is :${budget}`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list").appendChild(node);


    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`1st Product : ${p1}`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list").appendChild(node);


    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`2nd Product : ${p2}`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list").appendChild(node);


    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`3rd Product : ${p3}`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list").appendChild(node);


    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`4th Product : ${p4}`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list").appendChild(node);



    document.getElementById("list2").innerHTML= ' '; //for non repeating 

    var node = document.createElement("h4");  // Create a <h4> node
    var textnode = document.createTextNode(`Total and Remaining`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list2").appendChild(node);
    


    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`Total Cost : ${cost}`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list2").appendChild(node);
    
    
    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`Remaining Balance : ${balance - cost}`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list2").appendChild(node);


    if(balance <= cost){
        alert("You're out of money");
    }
}





// All Reset


function allReset() {
    document.getElementById("frm").reset();
    document.getElementById("list").innerHTML='';

}

function Resetall() {
    document.getElementById("list").innerHTML='';
}

// document.forms[0].addEventListener('reset', function() {
//     document.getElementById('result').innerHTML = '';
// });






                 // Get all operation

// function calculates(num1, num2) {
//     console.log(`Summation = ${num1 + num2}`);
//     console.log(`Substraction = ${num1 - num2}`);
//     console.log(`Multiplication = ${num1 * num2}`);
//     console.log(`Division = ${num1 / num2}`);
//     console.log(`Reminder = ${num1 % num2}`);

//     document.getElementById("list").innerHTML=" ";

//     var node = document.createElement("li");  // Create a <li> node
//     var textnode = document.createTextNode(`Summation = ${num1 + num2}`);   // Create a text node
//     node.appendChild(textnode);     // Append the text to <li>
//     document.getElementById("list").appendChild(node);


//     var node = document.createElement("li");  // Create a <li> node
//     var textnode = document.createTextNode(`Substraction = ${num1 - num2}`);   // Create a text node
//     node.appendChild(textnode);     // Append the text to <li>
//     document.getElementById("list").appendChild(node);


//     var node = document.createElement("li");  // Create a <li> node
//     var textnode = document.createTextNode(`Multiplication = ${num1 * num2}`);   // Create a text node
//     node.appendChild(textnode);     // Append the text to <li>
//     document.getElementById("list").appendChild(node);


//     var node = document.createElement("li");  // Create a <li> node
//     var textnode = document.createTextNode(`Division = ${num1 / num2}`);   // Create a text node
//     node.appendChild(textnode);     // Append the text to <li>
//     document.getElementById("list").appendChild(node);

//     var node = document.createElement("li");  // Create a <li> node
//     var textnode = document.createTextNode(`Reminder = ${num1 % num2}`);   // Create a text node
//     node.appendChild(textnode);     // Append the text to <li>
//     document.getElementById("list").appendChild(node);

// }


