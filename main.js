let userFirstName,
    userLastName,
    userSecondName,
    userAge,
    userGat,
    userp,
    userResult;
function UserFirstName() {
    userFirstName = prompt('Введите Ваше имя : ');
    while (
        userFirstName == null ||
        userFirstName == '' ||
        !isNaN(userFirstName)
    ) {
        userFirstName = prompt('Пожалуйста, введите ваше ИМЯ:');
    }
}
function UserLastName() {
    userLastName = prompt('Введите Вашу фамилию:');
    while (userLastName == null || userLastName == '' || !isNaN(userLastName)) {
        userLastName = prompt('Введите вашу ФАМИЛИЮ:');
    }
}
function UserSecondName() {
    userSecondName = prompt('Введите Ваше отчество: ');
    while (
        userSecondName == null ||
        userSecondName == '' ||
        !isNaN(userSecondName)
    ) {
        userSecondName = prompt('Введите ваше ОТЧЕСТВО: ');
    }
}


function UserAge() {
    userAge = +prompt('Введите ваш Возраст :');

    while (
        userAge == null ||
        userAge == undefined ||
        userAge == '' ||
        isNaN(userAge)
    ) {
        userAge = +prompt('Введите ваш Возраст!:');
    }
}

function UserGender() {
    userGat = confirm('Ваш пол мужской?');
    userGat ? userP = 63 : userP = 58;
    userAge > userP ? userResult = 'Да' : userResult = 'нет';
}



UserFirstName();
UserLastName();
UserSecondName();
UserAge();
UserGender();

let newUserFirstName = userFirstName[0].toUpperCase() + userFirstName.slice(1);
let newUserLastName = userLastName[0].toUpperCase() + userLastName.slice(1);
let newUserSecondName = userSecondName[0].toUpperCase() + userSecondName.slice(1);

alert(` ФИО: ${newUserFirstName} ${newUserLastName} ${newUserSecondName} 
возраст, лет: ${userAge}
возраст, дней: ${userAge * 365}
ваш пол: ${userGat ? 'мужской' : 'женский'}
пенсионный возраст: ${userResult}`);
