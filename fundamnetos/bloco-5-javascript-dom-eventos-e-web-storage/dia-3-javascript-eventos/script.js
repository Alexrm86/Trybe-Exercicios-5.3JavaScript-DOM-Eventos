function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

function myday() {

    let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


    let daylist = document.querySelector("#days")
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let day = dezDaysList[index];
        let listaItem = document.createElement('li');

        if (day === 24 || day === 31) {
            listaItem.className = 'day holiday';
            listaItem.innerHTML = day;
            daylist.appendChild(listaItem);

        } else if (day === 4 || day === 8 || day === 11 || day === 18) {
            listaItem.className = 'day friday';
            listaItem.innerHTML = day;
            daylist.appendChild(listaItem);


        } else if (day === 25) {
            listaItem.className = 'day holiday friday';
            listaItem.innerHTML = day;
            daylist.appendChild(listaItem);


        } else {

            listaItem.className = 'day';
            listaItem.innerHTML = day;
            daylist.appendChild(listaItem);


        }

    }
};

myday();



function createHolidayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-holiday';

    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);
};

createHolidayButton('Feriados');






// function displayHolidays() {
//     let getHolidayButton = document.querySelector('#btn-holiday');
//     let getbotaoFeriadoclass = document.querySelectorAll('.holiday')
//     let backgroundColor = 'rgb(238,238,238)';
//     let novaCor = 'white';

//     getHolidayButton.addEventListener('click', function() {

//         for (let index = 0; index < getbotaoFeriadoclass.length; index += 1) {
//             if (getbotaoFeriadoclass[index].style.backgroundColor === novaCor) {
//                 getbotaoFeriadoclass[index].style.backgroundColor = backgroundColor;


//             } else {
//                 getbotaoFeriadoclass[index].style.backgroundColor === novaCor;

//             }



//         }



//     })

// };



// displayHolidays();



function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';

    getHolidayButton.addEventListener('click', function() {
        for (let index = 0; index < getHolidays.length; index += 1) {
            if (getHolidays[index].style.backgroundColor === setNewColor) {
                getHolidays[index].style.backgroundColor = backgroundColor;
            } else {
                getHolidays[index].style.backgroundColor = setNewColor;
            }
        }
    })
};

displayHolidays();




// Escreva seu código abaixo.