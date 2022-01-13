$('#calc').click(function () {
    var numGrade = parseFloat($('#assign').val() * .55) + ($('#gp').val() * .05) + ($('#qz').val() * .1) +
        ($('#ex').val() * .2) + ($('#intex').val() * .1);

    var letterGrade = '';

    if (numGrade >= 94) {
        letterGrade = 'A';
    }
    else if(numGrade >= 90){
        letterGrade = 'A-';
    }
    else if (numGrade >= 87) {
        letterGrade = 'B+';
    }
    else if (numGrade >= 84) {
        letterGrade = 'B';
    }
    else if (numGrade >= 80) {
        letterGrade = 'B-';
    }
    else if (numGrade >= 77) {
        letterGrade = 'C+';
    }
    else if (numGrade >= 74) {
        letterGrade = 'C';
    }
    else if (numGrade >= 70) {
        letterGrade = 'C-';
    }
    else if (numGrade >= 67) {
        letterGrade = 'D+';
    }
    else if (numGrade >= 64) {
        letterGrade = 'D';
    }
    else if (numGrade >= 60) {
        letterGrade = 'D-';
    }
    else {
        letterGrade = 'E';
    }


    alert('Final Percentage: ' + numGrade.toFixed(2) + '% ' + 'Letter Grade: ' + letterGrade)
})