let userFirstName,
    userFirst,
    userLastName,
    userLast,
    userSecondName,
    userSecond,
    userAge,
    userAg,
    userGat,
    userP,
    userResult;

function UserFirstName() {
    userFirstName = prompt('Введите Ваше имя : ');
    
    while (
        userFirstName == null ||
        userFirstName == '' ||
        !isNaN(userFirstName)
    ) {
        UserFirstName();
    }
}
function UserLastName() {
    userLastName = prompt('Введите Вашу фамилию:');
    
    while (userLastName == null || userLastName == '' || !isNaN(userLastName)) {
        UserLastName();
    }
}
function UserSecondName() {
    userSecondName = prompt('Введите Ваше отчество: ');
    
    while (
        userSecondName == null ||
        userSecondName == '' ||
        !isNaN(userSecondName)
    ) {
        UserSecondName();
    }
}


function UserAge() {
    userAge = prompt('Введите ваш Возраст :');
    userAg = !parseInt(userAge);
    
    while (!NaN === userAg || userAg === null) {
        UserAge();
    }
}

function UserGender() {
    userGat = confirm(`Ваш пол мужской?
     ОК = ДА ,a отмена = НЕТ`);
    userGat ? userP = 63 : userP = 58;
    userResult = (userAge > userP) ? 'Да' : 'нет';
}
function replaceUser(){ 
    userFirst = userFirstName.replace(/[^a-zа-яA-ZА-Я]+/g, ''),
    
    userLast = userLastName.replace(/[^a-zа-яA-ZА-Я]+/g, ''),
    
    userSecond = userSecondName.replace(/[^a-zа-яA-ZА-Я]+/g, '')
    
    userAge = userAge.replace(/[^0-9]/g, ''); 
    }


UserFirstName();
UserLastName();
UserSecondName();
UserAge();
UserGender();
replaceUser()


let newUserFirstName = userFirst[0].toUpperCase() + userFirst.toLowerCase(1).slice(1); 
let newUserLastName = userLast[0].toUpperCase() + userLast.toLowerCase(1).slice(1);
let newUserSecondName = userSecond[0].toUpperCase() + userSecond.toLowerCase(1).slice(1);

alert(` ФИО: ${newUserFirstName} ${newUserLastName} ${newUserSecondName} 
возраст, лет: ${userAge}
возраст, дней: ${userAge * 365}
ваш пол: ${userGat ? 'мужской' : 'женский'}
пенсионный возраст: ${userResult}`);
