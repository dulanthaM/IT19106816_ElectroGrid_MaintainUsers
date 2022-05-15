//Hide the alters on page load
$(document).ready(function()
{

	$("#alertSuccess").hide();
	$("#alertError").hide();

}); 

// save
$(document).on("click", "#btnSave", function(event)
{
	console.log($("#hidInquiryIDSave").val());
	
	// Clear alerts---------------------
	$("#alertSuccess").text("");
 	$("#alertSuccess").hide();
 	$("#alertError").text("");
 	$("#alertError").hide();

	// Form validation-------------------
	var status = validateUserForm();
	if (status != true)
	{
		 $("#alertError").text(status);
		 $("#alertError").show();
		 return;
	}

	// If valid------------------------
	 var type = ($("#hidInquiryIDSave").val() == "") ? "POST" : "PUT";
	 console.log(type); 

 	 $.ajax(
	 {
	 url : "MaintainUserAPI",
	 type : type,
 	 data : $("#formItem").serialize(),
	 dataType : "text",
   	 complete : function(response, status)
	 {
 		onUserSaveComplete(response.responseText, status);
	 }
 	 });
});

// CLIENT-MODEL================================================================

function validateItemForm()
{
	// Customer ID
	if ($("#u_id").val().trim() == "")
	{
 	return "Insert Customer ID.";
 	}

	// Customer first name
	if ($("#f_Name").val().trim() == "")
 	{
	 return "Insert Customer First Name.";
 	}

	// Customer last name
	if ($("#l_Name").val().trim() == "")
 	{
 	return "Insert Customer last name.";
 	}

	// Customer address
	if ($("#address").val().trim() == "")
 	{
 	return "Insert Contact number.";
 	}

	// Customer phone
	if ($("#phone").val().trim() == "")
 	{
 	return "Insert Contact Number.";
 	}

	// is numerical value
	var tmpContact = $("#phone").val().trim();
	if (!$.isNumeric(tmpContact))
 	{
	return "Insert a numerical value for Contact number.";
	}

	// Email address
	if ($("#mail").val().trim() == "")
 	{
 	return "Insert Email address.";
 	}

	// city
	if ($("#city").val().trim() == "")
 	{
 	return "Insert your Inquiry.";
 	}
	return true;
}


function onUserSaveComplete(response, status)
{
	if (status == "success")
 	{
 		var resultSet = JSON.parse(response);
 		if (resultSet.status.trim() == "success")
 		{
 			$("#alertSuccess").text("Successfully saved.");
 			$("#alertSuccess").show();
			
 			$("#divItemsGrid").html(resultSet.data);
			
 		} else if (resultSet.status.trim() == "error")
 			{
			 	$("#alertError").text(resultSet.data);
 			 	$("#alertError").show();
 			}	
 	} else if (status == "error")
 		{
 			$("#alertError").text("Error while saving.");
 			$("#alertError").show();
 		} else
 			{
 				$("#alertError").text("Unknown error while saving..");
 				$("#alertError").show();
 			} 
		
 $("#hidu_numSave").val("");
 $("#formItem")[0].reset();
}

$(document).on("click", ".btnUpdate", function()
{
 	$("#hidu_numSave").val($(this).data("u_num"));
 	$("#u_id").val($(this).closest("tr").find('td:eq(0)').text());
 	$("#f_Name").val($(this).closest("tr").find('td:eq(1)').text());
 	$("#l_Name").val($(this).closest("tr").find('td:eq(2)').text());
 	$("#address").val($(this).closest("tr").find('td:eq(3)').text());
 	$("#phone").val($(this).closest("tr").find('td:eq(4)').text());
	$("#mail").val($(this).closest("tr").find('td:eq(5)').text());
	$("#city").val($(this).closest("tr").find('td:eq(6)').text());
});

$(document).on("click", ".btnRemove", function()
{
	var id = $(this).data("u_num");
	console.log("id is :"+id)
 	$.ajax(
 	{
 		url : "MaintainUserAPI",
 		type : "DELETE",
		data : "u_num=" + id,
		dataType : "text",
 		complete : function(response, status)
 		{
			console.log(id)
 			onUserDeleteComplete(response.responseText, status);
 		}
 	});
});

function onUserDeleteComplete(response, status)
{
	if (status == "success")
 	{
 	var resultSet = JSON.parse(response);
 	if (resultSet.status.trim() == "success")
 	{
 		$("#alertSuccess").text("Successfully deleted.");
 		$("#alertSuccess").show();
 		$("#divItemsGrid").html(resultSet.data);
 	} else if (resultSet.status.trim() == "error")
	{
 		$("#alertError").text(resultSet.data);
 		$("#alertError").show();
 	}
 	} else if (status == "error")
 	{
 		$("#alertError").text("Error while deleting.");
 		$("#alertError").show();
 	} else
 	{
 		$("#alertError").text("Unknown error while deleting..");
 		$("#alertError").show();
 	}
		$("#hidItemIDSave").val(""); 
		$("#formItem")[0].reset(); 
	}