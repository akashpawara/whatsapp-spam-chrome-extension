
//     function simulateMouseEvents(element, eventName) 
// { 
//     var mouseEvent = document.createEvent('MouseEvents'); 
//     mouseEvent.initEvent(eventName, true, true); 
//     element.dispatchEvent(mouseEvent); 
// } 
  
/*Schedule your message section starts here 
var now = new Date(); 
  
// Replace Hours, Mins and secs with your  
// desired time in 24 hour time format e.g. 
// var rt = new Date(now.getFullYear(), now.getMonth(),  
// now.getDate(), Hours, Minutes, Sec, 0) - now;  
// to send message at 2.30PM  
var rt = new Date(now.getFullYear(), now.getMonth(), 
                now.getDate(), 14, 30, 00, 0) - now;  
  
  
  
if (rt < 0) { 
    rt += 86400000;  
} 
  
setTimeout(startTimer, rt); 
Schedule your message section ends here*/
  
  
// Replace My Contact Name with the name  
// of your WhatsApp contact or group e.g. title="Peter Parker" 
// name = "XXX" 
  
//     simulateMouseEvents(document.querySelector('[title="' + name + '"]'), 'mousedown'); 
//     _3ko75 _5h6Y_ _13Whw5
function startTimer() 
{ 
    setTimeout(myFunc, 1000); 
} 
  
startTimer(); 
  
var eventFire = (MyElement, ElementType) => { 
    var MyEvent = document.createEvent("MouseEvents"); 
    MyEvent.initMouseEvent 
     (ElementType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); 
    MyElement.dispatchEvent(MyEvent); 
}; 
  
function myFunc() 
{ 
  
    messageBox = document.querySelectorAll("[contenteditable='true']")[1]; 
  
    message = "test"; // Replace My Message with your message use   to add spaces to your message 
  
    counter = 5; // Replace 5 with the number of times you want to send your message 
  
    for (i = 0; i < counter; i++) { 
        event = document.createEvent("UIEvents"); 
        messageBox.innerHTML = message.replace(/ /gm, ''); // test it 
        event.initUIEvent("input", true, true, window, 1); 
        messageBox.dispatchEvent(event); 
        eventFire(document.querySelector('span[data-icon="send"]'), 'click'); 
    } 
}     
