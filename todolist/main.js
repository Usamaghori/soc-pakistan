var DATA = [];
$("#btn").click(function()
{
   var text = $("#text").val()
    DATA.push(text);
    Render(DATA);
	save();
	load();
});

function Render(data)
{
	   $('#container').empty();
	for (var i=0;i<data.length;i++)
	{		 
     $('#container').append('<div id = "'+i+'"><input type="checkbox">' + data[i]+'<br></div>')
	 $('#'+i).click(function()
	 {
		var index = $(this).attr("id");
		//$(this).remove();
		//var index = data.indexOf(myid);
        if (index > -1)
		{
         data.splice(index, 1);
        }
		Render(DATA);
     });	
    }
};
       function save()
	   {
	   localStorage.myData = JSON.stringify(DATA);
       }
function load()
{
	DATA = JSON.parse(localStorage.myData);
	Render(DATA);
}

load();
save();