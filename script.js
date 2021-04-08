
function compute() {
    // Reseting the result span for cleaning purposes
    var resultSpan = document.getElementById("result");
    if (resultSpan.childNodes.length != 0){
        resultSpan.innerHTML = " ";

    };
    var principal = document.getElementById("principal").value;
    // Checking if there is a principal and positive
    if (principal<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
        // Getting the future year
        var futureYear = new Date().getFullYear()+ parseInt(years, 0);
        // appending the result span
        resultSpan.innerHTML += "<p>If you deposit "+"<mark>"+principal+"</mark>"+",</p>";
        resultSpan.innerHTML += "<p>at an interest rate of "+"<mark>"+rate+"</mark>"+"%.</p>";
        resultSpan.innerHTML += "<p>You will receive an amount of "+"<mark>"+interest+"</mark>"+",</p>";
        resultSpan.innerHTML += "<p>in the year "+"<mark>"+futureYear+"</mark>"+"</p>"; 
    }

};

function sliderShow(){
    sliderValue = document.getElementById("rate").value;
    document.getElementById("sliderspan").innerHTML = sliderValue+"%"
};


