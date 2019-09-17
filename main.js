const baseURL = "https://swapi.co/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

/*function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);*/

function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = "";
    getData(type, function(data) {
        console.dir(data);
        data = data.results

        data.forEach(function(item) {
            el.innerHTML += "<p>" + item.name + "</p>";
        });

    });
}