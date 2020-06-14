chrome.runtime.onMessage.addListener((message, sender)=> {
	if(!message.myPopupIsOpen) return;
	else{chrome.tabs.executeScript({
		file: 'assets/js/inject.js'
	}); }
});