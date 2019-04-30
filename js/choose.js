$(document).ready(function() {
    var btn_normal = $('#normalExam');
    var btn_timer = $('#timerExam');
    btn_normal.click(function() {
        window.location.href = "../html/NormalExam.html";
    })
    btn_timer.click(function() {
        // Loading While Page  Created
        // window.location.href = "../html/TimerExam.html";
    })
})