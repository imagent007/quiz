/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
// Question 1        
        if (q1Result === "Milk First") {
            totalScore= totalScore + 1; 
}
        else if (q1Result === "Cereal First") {
            totalScore = totalScore + 3;
}
// Question 2        
        if (q2Result === "Shield") {
            totalScore = totalScore + 2;
}
        else if (q2Result === "Weapon") {
            totalScore = totalScore + 1;
}
        else if (q2Result === "Nothing") {
            totalScore = totalScore + 2;
}
// Question 3 
        if (q3Result === "Mission Impossible") {
            totalScore = totalScore + 3;
}

    });

    return 1;

});
