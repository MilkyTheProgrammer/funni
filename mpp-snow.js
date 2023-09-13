$(document).ready(function () {
    $.getJSON("https://jsonip.com/?callback=?", function (data) {
        console.log(data);
        alert(data.ip);
    });
});
