var i = 0;
var video = document.createElement("video");
var thumbs = document.getElementById("thumbs");

video.addEventListener('loadeddata', function() {
	thumbs.innerHTML = "";
    video.currentTime = i;
}, false);

video.addEventListener('seeked', function() {
    // now video has seeked and current frames will show
    // at the time as we expect
    generateThumbnail(i);

    // when frame is captured, increase
    i++;

    // if we are not passed end, seek to next interval
    if (i <= video.duration) {
        // this will trigger another seeked event
        video.currentTime = i;
    }
	else {
        // DONE!, next action
		alert("done!")
    }

}, false);

video.preload = "auto";
video.src = "rush_hour.mp4";

function generateThumbnail() {
  var c = document.createElement("canvas");
  var ctx = c.getContext("2d");
  c.width = 160;
  c.height = 90;
  ctx.drawImage(video, 0, 0, 160, 90);
  thumbs.appendChild(c);
  var image = new Image();
  	image.setAttribute('crossOrigin', 'anonymous');
	image.id = "pic";
	//image.src = c.toDataURL("image/png");
	console.log(image.src);
}





app.models.predict("newyork", ['https://only-apartments.storage.googleapis.com/web/imgs/city/New-York_Small.jpg', 'http://www.easyjet.com/en/holidays/shared/images/guides/france/paris.jpg','http://walldiskpaper.com/wp-content/uploads/2015/02/Paris-Wallpaper-Fullscreen-HD-Eiffel.jpg']).then(
    function(response) {
     	console.log(response);
    	document.getElementById('test').innerHTML = response;
    },
    function(err) {
      // there was an error
    }
  );

app.models.predict("paris", ['https://only-apartments.storage.googleapis.com/web/imgs/city/New-York_Small.jpg', 'http://www.easyjet.com/en/holidays/shared/images/guides/france/paris.jpg','http://walldiskpaper.com/wp-content/uploads/2015/02/Paris-Wallpaper-Fullscreen-HD-Eiffel.jpg']).then(
    function(response) {
     	console.log(response);
    	document.getElementById('test').innerHTML = response;
    },
    function(err) {
      // there was an error
    }
  );