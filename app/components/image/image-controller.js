app.controller('ImageController', function(ImageService){
	var ic = this;
	ImageService.getImage().then(function(imageData){
		
		ic.imageData = imageData;
	})
 	// ic.drawImage = function($scope, imageData) {
	//  var imgData = [i];	 
	//  for(var i = 0; i < imageData.length; i++){
	// 	 ic.bgImg = imgData[2];
	//  }
	//  return(ic.bgImg);
	//  }
		
		
		
})