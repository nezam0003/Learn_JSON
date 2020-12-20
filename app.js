var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        var people = response.employee;
        var output = '';
        for (let i = 0; i < people.length; i++) {
            output += "<li>" + people[i].name + "</li>"
        }
        document.getElementById('people').innerHTML = output;
    }
};
xhttp.open("GET", "data.json", true);
xhttp.send();