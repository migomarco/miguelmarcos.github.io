



var textenter = document.querySelector("div.user-panel.main input[name=login]");
 var submitbutton = document.querySelector("#textSubmit");

 	 submitbutton.addEventListener("click", myFunction);



function myFunction(e){
	e.preventDefault();
	var link = textenter.value;
	console.log(link);



if (link == "comics") {

	window.open("comic/page1.html");
}

else if (link == "doors") {

	window.open("doors/index.html");
}

else if (link == "hell_for_liberals") {

	window.open("hell_for_liberals/index.html");
}

else if (link == "toilet_time") {

	window.open("final/index.html");
}

else if (link == "world_map") {

	window.open("worldmap/page1.html");
}

else if (link == "patience") {

	window.open("patience/index.html");
}

else if (link == "splendid_bacon") {

	window.open("splendid_bacon/index.html");
}

else {

	//$("error").append("error");

	// document.getElementById("error").innerText = "error";

	var para = document.createElement('p');
	para.textContent = "error";
	document.getElementById("error").appendChild(para);
	
	// var para = document.getElementById("error").createElement("p");
	// para.appendChild("error");

	

}

}


















			function $(elid){

				return document.getElementById(elid);

			}



			var cursor;

			window.onload = init;

			

			function init(){
				cursor = $("cursor");				

				cursor.style.left = "0px";

			}

			

			function nl2br(txt){

				return txt.replace(/\n/g, "<br />");

			}

			
			

			function writeit(from, e){

				e = e || window.event;

				var w = $("writer");

				var tw = from.value;

				w.innerHTML = nl2br(tw);

			}

			

			function moveIt(count, e){

				e = e || window.event;

				var keycode = e.keyCode || e.which;

//				alert(count);

				if(keycode == 37 && parseInt(cursor.style.left) >= (0-((count-1)*10))){

					cursor.style.left = parseInt(cursor.style.left) - 10 + "px";

				} else if(keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0){

					cursor.style.left = parseInt(cursor.style.left) + 10 + "px";

				}

				if(e.ctrlKey && e.keyCode == 65){

					$("writer").style.backgroundColor = "#99ccff";

				} else {

					$("writer").style.backgroundColor = "";

				}

			}

			

			function alert(txt){

			console.log(txt);

			}


// var textenter = document.querySelector("#setter");
// var submitbutton = document.querySelector("#textSubmit");

// submitbutton.addEventListener("click", myFunction);



// function myFunction(e){
// 	e.preventDefault();
// 	var link = textenter.value;
// 	console.log(link);



// if (link == "comics") {

// 	window.open("comic/page1.html");
// }

// else if (link == "readings") {

// 	window.open("readings/readings.html");
// }

// else if (link == "in_class_film") {

// 	window.open("filmex/page1.html");
// }

// else {

// 	$(".error").append("<p>error</p>");


// }


// }





