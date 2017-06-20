var vidWidth = 500;
var vidHeight = 400;
var vidResults = 20;
$(document).ready(function(){
  $.get(
    "https://www.googleapis.com/youtube/v3/channels",{
       part: 'contentDetails',
       id: 'UCuimfeaB3s8KThIkCqCpF9Q',
       key: 'AIzaSyAGfcD8dI9ep2LzpM6TWBz3bN6-HxkmUHk'},
      function(data){
        $.each(data.items, function(i,item){
          console.log(item);
          pid = item.contentDetails.relatedPlaylists.uploads;
          getVids(pid);
        })
      }
 );

function getVids(pid){
  $.get(
    "https://www.googleapis.com/youtube/v3/playlistItems",{
       part: 'snippet',
       maxResults: vidResults,
       playlistId:pid,
       key: 'AIzaSyAGfcD8dI9ep2LzpM6TWBz3bN6-HxkmUHk'},
      function(data){
        var output;
        $.each(data.items, function(i,item){
          console.log(item);
          videTitle = item.snippet.title;
          videoId = item.snippet.resourceId.videoId;

          output = '<li><iframe height="'+vidHeight+'" width="'+vidWidth+'" src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>'

          //Appenf to results listStyle Type
          $('#results').append(output);
        })
      }
 );
}

});
