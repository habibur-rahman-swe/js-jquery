$(document).ready(function() {
    $("button").ready(function() {
        $("button").click(function() {
            $("#div1").fadeTo(5000, 1);
            $("#div2").fadeTo(3000, 0.5);
            $("#div3").fadeTo(1000, 0.25);
            $("#div4").fadeTo(0, 0.125);
        })
        
    });
});