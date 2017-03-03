var consoleMessage = function(){
    console.log("Message In The Console");
};
var alertMessage = function(){
    alert("Message In The Alert");  
};
var writeMessage = function(){
    document.write("<div>Message In The Write</div>");
};

var messenger = {};
messenger.consoleMessage = consoleMessage;
messenger.alertMessage = alertMessage;
messenger.writeMessage = writeMessage;

module.exports  = messenger;