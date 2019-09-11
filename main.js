function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://swapi.co/api/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cbJSON.parse(this.responseText);
        }
    };
}

getData(function() {
    console.log(data);
});