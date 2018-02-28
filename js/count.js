  var km = 100000;
    
    function countdown() {
        km --;
        if (km < 1) {
            km = 'Reached destination';
        } else {
            // Update remaining seconds
            document.getElementById("countdown").innerHTML = km + ' km to go';
            // Count down using javascript
            window.setTimeout("countdown()", 100);
        }
    }
    countdown();

