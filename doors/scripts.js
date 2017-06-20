
var subject = alert("In this room you caught your dog watching a video");
var app = app || {};
app.main = (function() {
	var attachEvents = function() {

	$('#search-button').off('click').on('click', function(){
		loadData($('#search-box').val());

});
	$('#search-box').keypress(function(e) {
		if (e.keyCode == 13) {
			loadData($('#search-box').val());
		}
	});
};

var loadData = function(subject){
	var searchURL = 'http://api.giphy.com/v1/gifs/search?q=' + subject +  '&api_key=dc6zaTOxFJmzC';
	$.getJSON(searchURL, function(json){
		console.log('Data received');

		var results = json.data;
		console.log('Found ' + results.length + ' results');
		appendData(results);

	});
};

var appendData = function(data){
	console.log('Appended data');
	console.log(data);
	$('#view').append('<img src="' + data[Math.floor(Math.random() * 20) + 0].images.fixed_height.url + '" class="giffy" />');

};












var init = function (){
	console.log('Initializing app.');
	attachEvents();

};
return {
	init: init
};
})();

window.addEventListener('DOMContentLoaded', app.main.init);
