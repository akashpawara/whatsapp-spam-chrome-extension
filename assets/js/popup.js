chrome.storage.sync.clear();
document.getElementById("injectMessage").addEventListener("click", function(e) {
    let message = document.getElementById("message").value;
    let count = document.getElementById("count").value;
    if(!message && !count){
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
    if(count>200){count=200;}
    else if(count<1){count=1;}
    chrome.storage.sync.set({"message": message});
    chrome.storage.sync.set({"count": count});
    chrome.runtime.sendMessage({"myPopupIsOpen": true});
});
