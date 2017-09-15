var images=[];

function forimages (){

for (var i=0; i<document.getElementsByTagName("img").length; i++) {
	var height_image=document.getElementsByTagName("img")[i].height;
	var width_image=document.getElementsByTagName("img")[i].width;
	console.log(height_image );
	console.log(width_image );
}	
	
	
}