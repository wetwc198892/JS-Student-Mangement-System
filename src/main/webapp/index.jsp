<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="student.css"/>
    <script type="text/javascript" src="student.js"></script>
</head>
<body onload="loctable();">
<div class="container">
    <h2 class="text-center">Add New Student</h2>
    <form id="regForm">
        <input id="no" type="hidden" name="no">
        <div class="form-group" id="form1">
            <label style="display: inline-block;">FirstName</label><br>
            <input type="text" id="firstname" name="firstname">
        </div>
        <div class="form-group" id="form2">
            <label>LastName</label><br>
            <input type="text" id="lastname" name="lastname">
        </div>
        <div class="form-group" id="form3">
            <label>Email</label><br>
            <input type="text" id="email" name="email">
        </div>
        <div class="form-group" id="form4">
            <label>Location</label><br>
            <input type="text" id="location" name="location">
        </div>
        <div class="form-group" id="form5">
            <label>Phone</label><br>
            <input type="text" id="phone" name="phone">
        </div>
        <div id="buttons">
            <p draggable="true" ondragstart="dragStart(event)" id="p1">Piscataway</p>
            <p draggable="true" ondragstart="dragStart(event)" id="2">California</p>
            <p draggable="true" ondragstart="dragStart(event)" id="3">Buffalo</p>
            <p draggable="true" ondragstart="dragStart(event)" id="4">Long Island</p>
            <p draggable="true" ondragstart="dragStart(event)" id="5">Chicago</p>
        </div>
        <div class="form-group" id="form6">
            <label>Communication</label><br>
            <input type="text" id="communication" name="communication">
        </div>
        <div class="form-group" id="form7">
            <label>Permanent</label><br>
            <input type="text" id="permanent" name="permanent">
        </div>
        <div class="form-group" id="form8">
            <label>English</label><br>
            <input type="text" id="english" name="english">
        </div>
        <div class="form-group" id="form9">
            <label>Science</label><br>
            <input type="text" id="science" name="science">
        </div>
        <div class="form-group" id="form10">
            <label>Computer</label><br>
            <input type="text" id="computer" name="computer">
        </div>
        <div class="form-group" id="form11">
            <label>Hardware</label><br>
            <input type="text" id="hardware" name="hardware">
        </div>
        <button type="button" name="submit" id="inputsubmit" class="btn btn-default"
                onclick="register();">Submit
        </button>
        <button type="button" name="update" id="inputupdate" class="btn btn-default" onclick="register();">Update
        </button>
    </form>
</div>

<div class="extratabs">
    <strong>Rows :</strong>
    <select id="dropdown" onchange="createTable();">
        <option value='10' selected="selected">10</option>
        <option value='20'>20</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
    </select>
    <label for="search">
        <strong>Enter keyword to search</strong>
    </label>
    <input type="text" id="search">


</div>
<form name="frmApp" action="index.jsp" id="frmAppId" mothed="post"/>
<input id="test" type="hidden" name="test">
</form>
<table class="myTable" align="center" id="content" onload="createTable();">

</table>
</body>

</html>