window.onload = function() // Everything that runs in this function runs after the window has finished loading.
		{
			initializeEverything();
			/*imageName.onload = function () {
        		imageNameLoaded = true;
    		}  Boolean to show image is loaded.*/
			setInterval(updateAll, 1000 / framesPerSecond);			
		}