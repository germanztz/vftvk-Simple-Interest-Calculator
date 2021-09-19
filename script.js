function compute()
{

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //Once the user clicks on the alert "OK" button, take the user back to the "Principal" input box, by setting the focus on this box.
    document.getElementById("principal").focus();

    // Add validation for "Principal" input box. 
    // If the user enters zero or negative values, show an alert "Enter a positive number"
    if(principal < 1){
        alert("Enter a positive number");
        return false;
    } 

    //calculation
    var interest = principal * years * rate /100;

    //convert the 'No of Years' into the actual year in the future.
    var year = new Date().getFullYear()+parseInt(years);

    //When "Compute Interest" is clicked, set its inner html property to the below text.
    document.getElementById("result").innerHTML="If you deposit <b>"+principal
    +"</b>,\<br\>at an interest rate of <b>"+rate
    +"%</b>\<br\>You will receive an amount of <b>"+interest
    +"</b>,\<br\>in the year <b>"+year
    +"</b>\<br\>"

}
/**
 * Link this function with an "onchange" event on the range input.
 */
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}