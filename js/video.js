var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

 document.querySelector("#play").addEventListener("click", function() {
	var x = document.querySelector("#slider").value;
	document.querySelector("#volume").innerHTML = x + "%";
 	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
   video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log("New speed is: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.05;
	console.log("New speed is: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	
	if(video.currentTime + 15.0 > video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime = video.currentTime + 15.0;
	}
	console.log("Skip ahead to: " + video.currentTime);
});


document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted){
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
	}
	else{
		document.querySelector("#mute").innerHTML = "Unmute";
		video.muted = true;
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	var x = document.querySelector("#slider").value;
	video.volume = x/100.0;
	console.log("New volume is: "+ video.volume);
	document.querySelector("#volume").innerHTML = x + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector("#player1").className = "oldSchool";
});	


document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector("#player1").className = "video";
});	