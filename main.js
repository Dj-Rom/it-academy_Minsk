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
    
do { userFirstName = prompt('Введите Ваше имя : ');
   } while (!userFirstName || !isNaN(userFirstName));
do {userLastName = prompt('Введите Вашу фамилию:');
   } while (!userLastName || !isNaN(userLastName));
do{ userSecondName = prompt('Введите Ваше отчество: ');
   } while (!userSecondName || !isNaN(userSecondName));
do {userAge = prompt('Введите ваш Возраст :');
   userAg = parseInt(userAge);
} while (isNaN(userAg));
    
userGat = confirm(`Ваш пол мужской?
    ОК = ДА ,a отмена = НЕТ`);
    userP = (userGat)? 63 : 58;
    userResult = (userAg >= userP) ? 'Да' : 'нет';

    
function replaceEnterUser(){ 
    userFirst = userFirstName.replace(/[^a-zа-яA-ZА-Я]+/g, ''),
    userLast = userLastName.replace(/[^a-zа-яA-ZА-Я]+/g, ''),
    userSecond = userSecondName.replace(/[^a-zа-яA-ZА-Я]+/g, ''),
    userAge = userAge.replace(/[^0-9]/g, ''); 
    }
    
replaceEnterUser();
    
let newUserFirstName = userFirst[0].toUpperCase() + userFirst.toLowerCase(1).slice(1),
    newUserLastName = userLast[0].toUpperCase() + userLast.toLowerCase(1).slice(1),
    newUserSecondName = userSecond[0].toUpperCase() + userSecond.toLowerCase(1).slice(1);
    
 alert(`    ФИО: ${newUserFirstName} ${newUserLastName} ${newUserSecondName} 
    возраст, лет: ${userAg}
    возраст, дней: ${userAg * 365}
    через 5 лет вам будет: ${userAg + 5}
    ваш пол: ${userGat ? 'мужской' : 'женский'}
    пенсионный возраст: ${userResult}`);
