function budgets(budget, p1, p2, p3, p4) {


    //                    List1 Starts
    
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

    if(balance < 0 || p1 < 0 || p2 < 0 || p3 < 0 || p4 < 0) {
        alert("Check your input");
        document.getElementById("list2").innerHTML= ' ';
    }

    else{
    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`Here is your budget calculation`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list").appendChild(node);

    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(` `);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list").appendChild(node);

    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`Your Budget is : ${budget}`);   // Create a text node
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
    
    }

//                    List1 Ends




//                    List2 Starts


   
    document.getElementById("list2").innerHTML= ' '; //for non repeating 

    var node = document.createElement("h4");  // Create a <h4> node
    var textnode = document.createTextNode(`Total and Remaining`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list2").appendChild(node);

    if(balance <= cost){
        alert("Total Cost and Remaining Balance won't be showed");
    }

    else if(balance<=0 || p1 < 0 || p2 < 0 || p3 < 0 || p4 < 0){
        document.getElementById("list2").innerHTML= ' ';
        alert("Give proper input");
    }

    else {
    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`Total Cost : ${cost}`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list2").appendChild(node);
    

    var node = document.createElement("li");  // Create a <li> node
    var textnode = document.createTextNode(`Remaining Balance : ${balance - cost}`);   // Create a text node
    node.appendChild(textnode);     // Append the text to <li>
    document.getElementById("list2").appendChild(node);

    }


    //                    List2 Ends


}



// All Reset


function allReset() {
    document.getElementById("frm").reset();
    document.getElementById("list").innerHTML='';
    document.getElementById("list2").innerHTML='';

}

function Resetall() {
    document.getElementById("list").innerHTML='';
    document.getElementById("list2").innerHTML='';
}
