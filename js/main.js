//console.log("main загрузлся");
path=window.location.hostname;
if (path=="xcraft.ru" || path=="xcraft.net" ){

	//---alarm---------------------------------------------
	var moi=0, souz=0, vrag=0;
	var MoiMem=0 ; SouzMem=0; VragMem=0; count=0;
	var signal="3";																			
	var alarm = false;
	var audio = new Audio();
	audio.preload = 'auto';
	
		
	
	
	//--------------------------------------------------
	chrome.storage.local.set({ 'newdata':0,'savedata':0,'resp':0}); //инициализация
	
	chrome.storage.local.get({
    signal: '3',    
	newdata:'0',
	savedata:'0',
	resp:'0',			
	
  }, function(items) {
    signal = items.signal; 
	newdata= items.newdata;
	savedata= items.savedata;
	resp= items.resp;
	
	
	
  });
	
	
	
}	

function pip(){if (signal != 0){audio.play();}  };

																		
function tiktak(){
 //console.log("tik");
path=window.location.hostname+window.location.pathname; 
//console.log("открыто-"+path);
//------- 
  moi = document.getElementById("flt_cnt_owner").innerHTML;
  souz = document.getElementById("flt_cnt_friend").innerHTML;
  vrag = document.getElementById("flt_cnt_hostile").innerHTML;
  if($("#fleet_panel").attr("style")=="display: none;"){moi=0;souz=0;vrag=0;}
  if (moi > MoiMem){   audio.src = chrome.extension.getURL('sound/MoiBol.mp3');  pip(); MoiMem = moi;  }
  if (moi < MoiMem){   audio.src = chrome.extension.getURL('sound/MoiMen.mp3');  pip(); MoiMem = moi;  }
  if (souz > SouzMem){ audio.src = chrome.extension.getURL('sound/DrugBol.mp3'); pip(); SouzMem = souz;}
  if (souz < SouzMem){ audio.src = chrome.extension.getURL('sound/DrugMen.mp3'); pip(); SouzMem = souz;}
  if (vrag < VragMem){ audio.src = chrome.extension.getURL('sound/VragMen.mp3'); pip(); VragMem = vrag;}
  if (vrag > VragMem || count > 0 ){ 
                       audio.src = chrome.extension.getURL('sound/VragBol.mp3'); pip();
			           count++ ; if (count >= signal) {count=0; VragMem = vrag ;}
	}

 setTimeout("tiktak()", 2000);	
}

//***********************************************************************************************************
window.onload = function() {                      
                            //console.log("страница загружена");
							
							if (path=="xcraft.ru" || path=="xcraft.net" ){tiktak();}
}	

chrome.storage.onChanged.addListener(function(changes, namespace) {
	 var d=new Date();	 
	 var h=d.getHours();
	 var m=d.getMinutes();
	 var s=d.getSeconds();
	 var ms=d.getMilliseconds(); 
	 var count=0;
	 for (key in changes) {// 
		                   var storageChange = changes[key]; 
						   count++;
						   newval=storageChange.newValue;
						   oldval=storageChange.oldValue;
		                   //console.log('пространство-'+namespace+' Ключ-'+key+' старое-'+oldval+' новое-'+newval+'  '+d);		
		                   path=window.location.hostname+window.location.pathname;	
		                   if (oldval==0 && newval==1 && (path=="xcraft.ru/galaxy/" || path=="xcraft.net/galaxy/")){		                   
		                      if (key=='resp'){nextsys();} 																			  
		                      }
						  
                          if(key=='sysobj' && window.location.pathname=="/starmap/map.php"){
			                                                                                //console.log('новые данные в хранилище -'+h+':'+m+':'+s+':'+ms);
			                                                                                transmit(newval);																		  
																		                   }		
							
							
						  if(key=='signal'){signal=newval;}	
						 	  
	  
	 }
	 //console.log('изменений-'+count);	 
 });	
 
 