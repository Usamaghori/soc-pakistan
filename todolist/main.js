var title;
var user;
        
$("#btn").click(function()
{
	var title = $("#title").val()	
	var user = $("#user").val()
topicref.push({
    title:title,
    user:user,
    timestamp: Date.now()
})
})

var topicref = firebase.database().ref('/msgs');
topicref.on('child_added',function(snapshot){
   //$('#container').append('<div><a href = "index2.html">'+snapshot.val().title +'</a> posted by:<br>'+snapshot.val().user+'</div>');
 $('#tab tbody').append('<tr><td><a href = "index2.html">'+snapshot.val().title +'</a></td><td>'+snapshot.val().user+'</td><td>'+new Date(snapshot.val().timestamp)+'</td></tr>')        
   
    $('#btn').click(function(){
       var individualTopicRef = firebase("/msgs" + snapshot.key() + "/comments");
           individualTopicRef.on('value',function(snapshot){
		   snapshot.val()          
})})
})








/*var hash = window.location.hash // "#key=-kwewtew"
      hash = hash.replace("#key=",""); // "-kwewtew"
    var ref= Firebase("/msgs"+hash+"/comments");
    ref.child_added

	$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})*/



/*var DATA = [];
var un;
var text;

	   
	var ref = firebase.database().ref('/msgs');
        //ref.set();
        ref.on('child_added',function(snapshot){
        $('#container').append("<div>"+snapshot.val()+"</div>");
        });
        
        $('#btn').click(function(){
            
   text = $("#text").val()
    un = $("#un").val()
    ref.push(un + ": "+text);
        });*/

       /* <script>
      var hash = window.location.hash // "#key=-kwewtew"
      hash = hash.replace("#key=",""); // "-kwewtew"
    var ref= Firebase("/topics/"+hash+"/comments");
    ref.child_added
    </script>*/
