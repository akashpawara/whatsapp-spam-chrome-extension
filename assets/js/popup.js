chrome.storage.sync.clear();
sleep = async (ms)=>{ return new Promise(resolve => setTimeout(resolve, ms)); }
sending = async ()=>{
    document.getElementById("injectMessage").innerHTML="sending"; await sleep(500); 
    document.getElementById("injectMessage").innerHTML="sending."; await sleep(500);
    document.getElementById("injectMessage").innerHTML="sending.."; await sleep(500);
    document.getElementById("injectMessage").innerHTML="sending..."; await sleep(500);
    document.getElementById("injectMessage").innerHTML="Done!"; await sleep(1000);
    document.getElementById("injectMessage").innerHTML="send";
}
document.getElementById("injectMessage").addEventListener("click", ()=> {
    let message = document.getElementById("message").value;
    let count = document.getElementById("count").value;
    if(!message && !count){
        document.getElementById("countRange").innerHTML="Some fields are Empty!";
        let x = document.getElementById("validation");
        x.className = "show";
        setTimeout(()=>{ x.className = x.className.replace("show", ""); }, 2000);
    }
    else if(count>200){
        document.getElementById("countRange").innerHTML="Count Limit 200";
        let x = document.getElementById("countRange");
        x.className = "show";
        setTimeout(()=>{ x.className = x.className.replace("show", ""); }, 3000);
        count=200;
    }
    else if(count<1){
        document.getElementById("countRange").innerHTML="Count Limit set to 1";
        let x = document.getElementById("countRange");
        x.className = "show";
        setTimeout(()=>{ x.className = x.className.replace("show", ""); }, 3000);
        count=1;
    }
    chrome.storage.sync.set({"message": message});
    chrome.storage.sync.set({"count": count});
    chrome.runtime.sendMessage({"myPopupIsOpen": true});
    sending();
});
