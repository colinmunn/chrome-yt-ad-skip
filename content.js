console.log("Starting Content JS");

try { 
    myTitle = document.getElementById("logo-icon").innerHTML;
    console.log(myTitle);
    
}
catch (err) {
    console.log("Element Not Found");

}




// skip-button:c
//document.getElementById("logo-icon").click();
//document.getElementById("logo-icon").style.background = "yellow";

//setTimeout(ClickTheLink,10000);
//function ClickTheLink() { console.log("Clicked"); }


function skipAd(){
    console.log('myFunction Called')
    color_value = Math.floor(Math.random() * 999999).toString();
    hex_symbol = "#"
    random_color = hex_symbol.concat(color_value)

    console.log(random_color)
    document.getElementById("logo-icon").style.background = random_color;
}

skipAd();

setInterval(function(){
    skipAd()
    console.log('Run')
}, 5000)