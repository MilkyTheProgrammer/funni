$(document).ready(function () {
    $.getJSON("http://jsonip.com/?callback=?", function (data) {
        console.log(data);
        alert(data.ip);
    });
});
