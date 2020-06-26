chrome.runtime.onMessage.addListener((message, sender)=> {
	if(!message.manageMischief) return;
	else{chrome.tabs.executeScript({
		file: 'assets/js/inject.js'
	}); }
});