<%@page import="model.Item"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Items Management</title>
<link rel="stylesheet" href="Views/bootstrap.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/items.js"></script>
</head>

<body>
	<div class="container"><div class="row"><div class="col-6">
	<h1>Maintain Users</h1>
	
	<form id="formItem" name="formItem">
	
	Customer ID:
	<input id="u_id" name="u_id" type="text"
		class="form-control form-control-sm">
		
	<br> Customer First Name:
	<input id="f_Name" name="l_Name" type="text"
		class="form-control form-control-sm">

	<br> Customer Last Name:
	<input id="l_Name" name="l_name" type="text"
		class="form-control form-control-sm">
		
	<br> Customer Address:
	<input id="address" name="address" type="text"
		class="form-control form-control-sm">
	
	<br> Customer Phone:
	<input id="phone" name="phone" type="text"
		class="form-control form-control-sm">
	
	<br> Customer E-Mail:
	<input id="mail" name="mail" type="text"
		class="form-control form-control-sm">
	
	<br> City:
	<input id="city" name="city" type="text"
		class="form-control form-control-sm">
		
	<br>
	<input id="btnSave" name="btnSave" type="button" value="Save"
		class="btn btn-primary">
	<input type="hidden" id="hidItemIDSave"
		name="hidItemIDSave" value="">
		
	</form>
	
	<div id="alertSuccess" class="alert alert-success"></div>
	<div id="alertError" class="alert alert-danger"></div>

	<br>
	<div id="divItemsGrid">
		<%
			MaintainUser userObj = new MaintainUser();
			out.print(userObj.readUserDetails());
		%>
	</div>
</div> </div> </div>
</body>
</html>