document.getElementById("injectMessage").addEventListener("click", function(e) {
    let message = document.getElementById("message").value;
    let count = document.getElementById("count").value;
    chrome.storage.sync.set({"message": message});
    chrome.storage.sync.set({"count": count});
    chrome.runtime.sendMessage({"myPopupIsOpen": true});
});
