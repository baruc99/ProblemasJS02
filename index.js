
// document.addEventListener('DOMContentLoaded', function () {
//     var personArr = [
//         {
//             "personId": 123,
//             "name": "Jhon",
//             "city": "Melbourne",
//             "phoneNo": "1234567890",

//         },
//         {
//             "personId": 124,
//             "name": "Amelia",
//             "city": "Sydney",
//             "phoneNo": "1234567890",

//         },
//         {
//             "personId": "125",
//             "name": "Emyly",
//             "city": "Perth",
//             "phoneNo": "1234567890",

//         },
//         {
//             "personId": 126,
//             "name": "Abraham",
//             "city": "Perth",
//             "phoneNo": "1234567890",

//         },
//     ]

//     var table = document.createElement("table");

//     var headerRow = table.insertRow(0);
//     for (var key in personArr[0]) {
//         var th = document.createElement("th");
//         th.textContent = key;
//         headerRow.appendChild(th);
//     }

//     for (var i = 0; i < personArr.length; i++) {
//         var row = table.insertRow(i + 1);
//         for (var key in personArr[i]) {
//             var cell = row.insertCell(-1);
//             cell.textContent = personArr[i][key];
//         }
//     }

//     document.body.appendChild(table);
// });

document.addEventListener('DOMContentLoaded', function () {
    var liElements = document.querySelectorAll('li');

    liElements.forEach(function (li) {
        li.addEventListener('click', function () {

            var id = this.id;
            var isoId = this.getAttribute('data-id');
            var dialCode = this.getAttribute('data-dial-code');


            alert("Elemento Seleccionado:\n" +
                "ID elemento: " + id + "\n" +
                "ISO ID: " + isoId + "\n" +
                "Dial Code: " + dialCode);
        });
    });

});