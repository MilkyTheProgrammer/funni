$(document).ready(function () {
    $.getJSON("https://api64.ipify.org?format=json", function (data) {
        console.log(data);
        alert(data.ip);
    });
});
