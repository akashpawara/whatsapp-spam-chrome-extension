function startTimer() 
{ 
    setTimeout(myFunc, 2000); 
} 
var eventFire = (MyElement, ElementType) => { 
    let MyEvent = document.createEvent("MouseEvents"); 
    MyEvent.initMouseEvent 
     (ElementType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); 
    MyElement.dispatchEvent(MyEvent); 
}; 
async function myFunc() 
{ 
    let messageBox = document.querySelectorAll("[contenteditable='true']")[1]; 
        let p = new Promise(function(resolve, reject){
            chrome.storage.sync.get({"count": true}, function(options){
                resolve(options.count);
            })
        });
        let q = new Promise(function(resolve, reject){
            chrome.storage.sync.get({"message": true}, function(options){
                resolve(options.message);
            })
        });
        let counter = await p;
        let message = await q;

    for (i = 0; i < counter; i++) { 
        event = document.createEvent("UIEvents"); 
        messageBox.innerHTML = message; // test it 
        event.initUIEvent("input", true, true, window, 1); 
        messageBox.dispatchEvent(event); 
        if(message && counter){
            eventFire(document.querySelector('span[data-icon="send"]'), 'click'); 
        }
    } 
}
startTimer()
