/*
 * JTip_VIS
 * A modified version of JTip
 * Modified by: Jonathan Heizer of VIS Systems (http://vissystems.com)
 * Download at: https://github.com/jheizer/jTip_VIS
 *
 * Original By Cody Lindley (http://www.codylindley.com)
 * Under an Attribution, Share Alike License
 * JTip is built on top of the very light weight jquery library.
 */

//on page load (as soon as its ready) call JT_init
$(document).ready(JT_init);

function JT_init(){
	   	$("a.jTip")
		   .hover(function(){
			JT_show(this.getAttribute("helpwidth"),this.id,this.name,this.getAttribute("helptext"))
		},function(){$('#JT').remove()})
           .click(function(){return false});	   

	       $("img.jTip")
		   .hover(function(){
			JT_show(this.getAttribute("helpwidth"),this.id,this.name,this.getAttribute("helptext"))
		},function(){$('#JT').remove()})
           .click(function(){return false});	
}

function JT_show(wid,linkId,title,helptext){
	if(title == false){title="&nbsp;";}
	if(wid === undefined){wid = 250};

	var de = document.documentElement;
	var w = self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var hasArea = w - getAbsoluteLeft(linkId);
	var clickElementy = getAbsoluteTop(linkId) - 3; //set y position
	
	$('#' + linkId).css('cursor','pointer');

	if(hasArea>(parseInt(wid)+75)){
		$("body").append("<div id='JT' style='width:"+wid*1+"px'><div id='JT_arrow_left'></div><div id='JT_close_left'>"+title+"</div><div id='JT_copy'>"+helptext+"</div></div>");//right side
		var arrowOffset = getElementWidth(linkId) + 11;
		var clickElementx = getAbsoluteLeft(linkId) + arrowOffset; //set x position
	}else{
		$("body").append("<div id='JT' style='width:"+wid*1+"px'><div id='JT_arrow_right' style='left:"+((wid*1)+1)+"px'></div><div id='JT_close_right'>"+title+"</div><div id='JT_copy'>"+helptext+"</div></div>");//left side
		var clickElementx = getAbsoluteLeft(linkId) - ((wid*1) + 15); //set x position
	}
	
	$('#JT').css({left: clickElementx+"px", top: clickElementy+"px"});
	$('#JT').show();
}

function getElementWidth(objectId) {
	x = document.getElementById(objectId);
	return x.offsetWidth;
}

function getAbsoluteLeft(objectId) {
	// Get an object left position from the upper left viewport corner
	o = document.getElementById(objectId)
	oLeft = o.offsetLeft            // Get left position from the parent object
	while(o.offsetParent!=null) {   // Parse the parent hierarchy up to the document element
		oParent = o.offsetParent    // Get parent object reference
		oLeft += oParent.offsetLeft // Add parent left position
		o = oParent
	}
	return oLeft
}

function getAbsoluteTop(objectId) {
	// Get an object top position from the upper left viewport corner
	o = document.getElementById(objectId)
	oTop = o.offsetTop            // Get top position from the parent object
	while(o.offsetParent!=null) { // Parse the parent hierarchy up to the document element
		oParent = o.offsetParent  // Get parent object reference
		oTop += oParent.offsetTop // Add parent top position
		o = oParent
	}
	return oTop
}



function blockEvents(evt) {
              if(evt.target){
              evt.preventDefault();
              }else{
              evt.returnValue = false;
              }
}