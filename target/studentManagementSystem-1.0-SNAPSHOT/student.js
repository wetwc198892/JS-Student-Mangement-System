const userList = JSON.parse(localStorage.getItem("userList"));
let detail = false;

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.innerHTML);
}

$(document).scroll(function()
{
    if ( $(document).scrollTop() + window.innerHeight == $(document).height())
    {
        const nums = document.getElementById("dropdown").value;
        if(nums>userList.length){
            alert("No more records");
        }else{
            alert(Number(nums)+10);
            document.getElementById("dropdown").value = (Number(nums) + 10);
            alert(document.getElementById("dropdown").value);
            createTable();
        }
    }
});

function loctable() {
    $.ajax({
        "type": "GET",
        "url": "jsonFile.json",
        "datatype": "json",
        "success": function (data) {
            localStorage.setItem("userList", JSON.stringify(data));
            createTable();
        },
        "error": function () {
            alert('Error happened while making server request!!!');
        }
    });
}

function createTable() {
    let html = "<thead>";
    html += "<tr>";
    html += "<th rowSpan='2' scope='col'>#</th>";
    html += "<th rowSpan='2' scope='col'>First Name</th>";
    html += "<th rowSpan='2' scope='col'>Last Name</th>";
    html += "<th rowSpan='2' scope='col'>Email</th>";
    html += "<th rowSpan='2' scope='col'>Location</th>";
    html += "<th rowSpan='2' scope='col'>Phone</th>";
    html += "<th colSpan='2' scope='col'>Address</th>";
    if (detail) {
        html += "<th colSpan='4' scope='col'>Marks</th>";
    }
    html += "<th rowSpan='2' scope='col'>Operations</th>";
    html += "</tr>";
    html += "<tr>";
    html += "<th scope='col'>Communication</th>";
    html += "<th scope='col'>Permanent</th>";
    if (detail) {
        html += "<th scope='col'>English</th>";
        html += "<th scope='col'>Science</th>";
        html += "<th scope='col'>Computers</th>";
        html += "<th scope='col'>Hardware</th>";
    }
    html += "</tr>";
    html += "</thead>";
    html += "<tbody>";
    const nums = document.getElementById("dropdown").value;
    for (let i = 0; i < userList.length && i < nums; i++) {
        html += "<tr>";
        html += "<td>" + (i + 1) + "</td>";
        html += "<td>" + userList[i].firstname + "</td>";
        html += "<td>" + userList[i].lastname + "</td>";
        html += "<td>" + userList[i].email + "</td>";
        html += "<td>";
        for (let j = 0; j < userList[i].location.length; j++) {
            html += userList[i].location[j] + "&nbsp;";
        }
        html += "</td>";
        html += "<td>" + userList[i].phone + "</td>";
        html += "<td>" + userList[i].address.communication + "</td>";
        html += "<td>" + userList[i].address.permanent + "</td>";
        if (detail) {
            html += "<td>" + userList[i].marks.english + "</td>";
            html += "<td>" + userList[i].marks.science + "</td>";
            html += "<td>" + userList[i].marks.computers + "</td>";
            html += "<td>" + userList[i].marks.hardware + "</td>";
            html += "<td><button onclick='showDeatil();'>Hide Detail";
        } else {
            html += "<td><button onclick='showDeatil();'>Show Detail";
        }
        html += "</button>";
        html += "<button onclick='edit(" + i + ");'>Edit</button><button onclick='deleteItem(" + i + ")'>Delete</button></td>";
        html += "</tr>";
    }
    html += "</tbody>";
    document.getElementById("content").innerHTML = html;
}

function showDeatil() {
    if (detail) {
        detail = false;
    } else {
        detail = true;
    }
    createTable();
    return true;
}

function deleteItem(no) {
    userList.splice(no, 1);
    createTable();
}

function edit(no) {
    document.getElementById("no").value = no;
    document.getElementById("firstname").value = userList[no].firstname;
    document.getElementById('lastname').value = userList[no].lastname;
    document.getElementById('email').value = userList[no].email;
    document.getElementById('location').value = userList[no].location.join(",");
    document.getElementById('phone').value = userList[no].phone;
    document.getElementById('communication').value = userList[no].address.communication;
    document.getElementById('permanent').value = userList[no].address.permanent;
    document.getElementById('english').value = userList[no].marks.english;
    document.getElementById('science').value = userList[no].marks.science;
    document.getElementById('computer').value = userList[no].marks.computers;
    document.getElementById('hardware').value = userList[no].marks.hardware;
}

function register() {
    const no = document.getElementById("no").value;
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;
    const phone = document.getElementById('phone').value;
    const communication = document.getElementById('communication').value;
    const permanent = document.getElementById('permanent').value;
    const english = document.getElementById('english').value;
    const science = document.getElementById('science').value;
    const computer = document.getElementById('computer').value;
    const hardware = document.getElementById('hardware').value;

    if (firstname === '') {
        document.getElementById('form1').insertAdjacentHTML("afterEnd", "<p id='removee' style='color:red'>Firstname cannot be empty</p>");
    } else if (lastname === "") {
        document.getElementById('form2').insertAdjacentHTML("afterEnd", "<p id='removee' style='color:red'>Lastname cannot be empty</p>");
    } else if (email === "") {
        document.getElementById('form3').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Email cannot be empty</p>");
    } else if (location === "") {
        document.getElementById('form4').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Phone number cannot be empty</p>");
    } else if (phone === "") {
        document.getElementById('form5').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Phone number cannot be empty</p>");
    } else if (communication === '') {
        document.getElementById('form6').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Address communication  cannot be empty</p>");
    } else if (permanent === '') {
        document.getElementById('form7').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Address permanent cannot be empty</p>");
    } else if (english === '') {
        document.getElementById('form8').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Previous_employer google cannot be empty</p>");
    } else if (science === '') {
        document.getElementById('form9').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Previous_employer facebook cannot be empty</p>");
    } else if (computer === '') {
        document.getElementById('form10').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Previous_employer linkedin cannot be empty</p>");
    } else if (hardware === '') {
        document.getElementById('form11').insertAdjacentHTML('afterEnd', "<p id='removee' style='color:red'>Previous_employer linkedin cannot be empty</p>");
    } else {
        const user = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            location: location.split(","),
            address: {
                communication: communication,
                permanent: permanent
            },
            marks: {
                english: english,
                science: science,
                computers: computer,
                hardware: hardware
            }

        };
        if (no != null) {
            userList[no] = user;
        } else {
            userList.push(user);
        }
        localStorage.setItem('userList', JSON.stringify(userList));
        loctable();
        regForm.reset();
    }
    return true;
}
