

//Add an item
$("#addList").keypress(function(event){

	let input = $(this).val()

	if(event.key === "Enter"){

		$("#listTask").append(`<li><span><i class="fa fa-trash"></i></span> ${input} </li>`)
		$("#addList").val("")

	}

})


//This will slide the input
$("h1").on("click", function(){

	$("#addList").slideToggle(500)
})


//This will remove the task
$("ul").on("click", "span", function(){

	$(this).parent().fadeOut(500, function(){

		$(this).remove()

	})

})

//This will toggle the Strikethrough

$("ul").on("click", "li", function(){

	$(this).toggleClass("completed")

})



