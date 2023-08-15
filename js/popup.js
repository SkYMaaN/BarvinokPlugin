// Saves options to chrome.storage

function save_options() {
  var signal = document.getElementById('signal').value;   
  
  chrome.storage.local.set({
    signal: signal 
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });

//console.log("сохранили");
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  
  chrome.storage.local.get({
    signal: '3'    
  }, function(items) {
    document.getElementById('signal').value = items.signal;
	
  });
}



function expm() {chrome.storage.local.set({ exposimok:1});}
function pip()  {if (signal != 0){audio.play();}  };




document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);




