//! Поверхностное и глубокое копирование объектов

// let user = {
//     name: 'Aisultan',
//     age: 20,
//     languaes: {
//         english: '2 level',
//         franch: '3 level',
//     },
// };

// let user2 = user; ! Это не копирование
//! '...' - Это spread оператор(распаковщик)
// let user2 = {...user}; //! Поверхностное копирование 

//! Поверхностное копирование работает корректно только  тогда, когда нету вложенных объектов, либо же массивов

// console.log(user); 
 
// user2.name = 'Beka';
// user2.age = 26;
// user2.languaes.english = '6 level';

// console.log(user2)

//! глубокое копирование - происходить за счет того, что мы приводим наш объект в строку и в этот момент обрывается связь с исходным обьектов, затем мы из строки делаем на формат.

//! JSON.stringify() - приводит в строку
//! JSON.parse() - из строки в наш формат

// let user = {
//     name: 'Aisultan',
//     age: 20,
//     languaes: {
//         english: '2 level',
//         franch: '3 level',
//     },
// };
// console.log(user);
// let user2 = JSON.parse(JSON.stringify(user))
// user2.name = 'Nur';
// user2.languaes.english = 'advanced';
// user2.languaes.russian = '1 level';
// console.log(user2);


//! Деструктуризация. eto spesialnuy sintaksis pri pomoshi kotorogo my mojem brat svoistva u obekta libo je elementy u massivov i srazy je ix zapisivat v peremennyi

// let student = {
//     name: 'Melis',
//     lastName: 'Batyrov',
// };

// let sdudentName = student.name;
// let lastName = student.lastname

// let {name, lastName} = student;


// console.log(name)
// console.log(lastName)

// let student2 = {
//     name: 'Aibek',
//     lastName: "Sapashov",
// };
// let {name: stud2Name, lastName: stud2LastName} = student2;
// console.log(stud2Name, stud2LastName)

// let library = {
//     title: 'Bootstrap',
//     version: {
//         first: '2015',
//         second: '2019',
//         third: '2021',
//     },
// };
// let {version: {first: firstVesion, third: thirdVersion}} = library;
// console.log(firstVesion, thirdVersion);

// let arr = ['true', 10, 77, false]

// let [first, num, , bool] = arr;
// console.log(first, num, bool);

// let nums= [42, 55, 86, 90, 205];
// let [first, , third, ...rest] = nums;
// console.log(first, third, rest)

// let project = {
//     name: 'Market Place',
//     frameworks: ['Angilar', 'Django'],
//     libraries:  ["React", 'Ekpress JS'],
//     team: {
//         frontEnd: ['JS15', 'JS13'],
//         backend: ['PY-16', 'PY-7-Ev'],
//     },

// };

// let {
//     libraries: [, secondLibrary], 
//     team: {frontEnd: [,frontSecond], backend: [firstBackend]},
// } = project;

// console.log(secondLibrary, frontSecond, firstBackend,)


// let obj = {
//     title: 'h2',
//     subTitle: 'h3',
// };
//  let {title, subTitle = 'default'} = obj;
//  console.log(title, subTitle);

// Дан объект {name: 'John', 'age': '22', }.
// Запишите соответствующие значения в переменные name, и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало введенное значение с prompt.

// let user = {
//     name: 'John', 
//     age: 22,
// }
// let {name = 'a', age = prompt('Enter age')} = user;
// console.log(name, age)



//! Деструктуризация. Класснная работа.

//! Задание №1
// Дан массив [ "первый", "второй","третий", "четвертый","пятый","шестой","седьмой" ];
// Запишите первый элемент этого массива впеременную elem1,
// второй - в переменную elem2, третий - в переменную elem3,
// а все остальные элементы массива - в переменную arr.

// let task1 = [ "первый", "второй","третий", "четвертый","пятый","шестой","седьмой" ];
// let [elem1, elem2, elem3, ...arr] = task1;
// console.log(elem1, elem2, elem3, arr);

//! Задание №2
//  Дан объект { name: "Петр", surname: "Петров", age: "20 лет" }.
// Запишите соответствующие значения в переменные name, surname и age.

// let task2 = { name: "Петр", surname: "Петров", age: "20 лет" };
// let {name, surname, age} = task2;
// console.log(name, surname, age);

//! Задание №3
// Дан массив.
// let task3 = [
//     "первый",
//     "второй",
//     "третий",
//     "четвертый",
//     "пятый",
//     "шестой",
//     "седьмой"
// ];
// Запишите последний элемент этого массива в переменную elem1,
// а предпоследний - в переменную elem2.

//! let task3 = [
//     "первый",
//     "второй",
//     "третий",
//     "четвертый",
//     "пятый",
//     "шестой",
//     "седьмой"
// ];

// let [, , , , , elem1, elem2] = task3;
// console.log(elem1, elem2);


//! Задание №4
// Напишите функцию, которая принимает массив из чисел в качестве аргумента.
// Каждое число возвести в квадрат. Затем, функция должна вернуть измененный массив.
// Деструктурируйте полученный результат, т.е. первый элемент записать в переменную, а остальные элементы сохранить в новом массиве.


// function task4(arr) {
//     return arr.map((item) => {
//         return item ** 2
//     })
// }

// const [a, ...newArr] = task4([1,2,3,4,5]);
// console.log(a, newArr);



//! Задание №5
// Дан объект {name: 'Luck', 'age': '22', }.
// Запишите соответствующие значения в переменные name, и age.
// Сделайте так, чтобы если какое-то значение не задано - оно принимало значение по умолчанию.

// let obj = {
//     name: 'Luck', 
// };

// let {name = 'Luck', age = 22} = obj;
// console.log(name, age);


//! Деструктуризация. Экстра задания.

//! Задание №1
// Дан объект {name: "John", years: 30}.
// Напишите деструктурирующее присваивание, которое:
// 	•	свойство name присвоит в переменную name.
// 	•	свойство years присвоит в переменную age.
// 	•	свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:
// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// let task1 = {name: "John", years: 30};
// let {name, years, isAdmin = false} = task1;
// console.log(name, years, isAdmin);

//! Задание №2
// Переделайте следующий код через деструктуризацию:
// function func(employee) {
//     let name = employee[0];
//     let surname = employee[1];
//     let department = employee[2];
//     let position = employee[3];
//     let salary = employee[4];
//     console.log(name, surname, department, position, salary);
// }
// func(["Иван", "Иванов", "отдел разработки", "программист", 2000]);

// function func([name, surname, department, position, salary]) {
//   console.log(name, surname, department, position, salary)
// }
// func(["Иван", "Иванов", "отдел разработки", "программист", 2000]);

//! Задание №3
// Значение переменной firstName равно 32, lastName равно Michael, и age равно Jackson.
// Поменяйте значения переменные так, чтобы в них хранились соответствующие значения.
// Используйте деструктуризацию.

//   let obj={
//   firstName:32,
//   lastName:'Michael',
//   age:'Jackson'
//   }
// let {firstName = 'Michael'} = obj
// console.log(firstName)

// let obj={
// firstName:32,
// lastName:'Michael',
// age:'Jackson'
// }
// let {firstName: age, lastName: firstName, age: lastName} = obj;
// console.log(firstName,lastName,age)

//! Задание №4
// Напишите функцию, которая принимает массив из чисел и возвращает сумму всех чисел, кроме первых двух.
// Используйте деструктуризацию.

// function task5([, , ...newArr]) {
// return newArr.reduce((prev, item) => {
//     return prev + item;
//   });
// }
// console.log(task5([1, 2, 3, 4, 5, 10]));


//! Задание №5
// Дан объект {name: 'Patrick', age: '22', dog: {dogName: 'Hachi', age: 2}}
// Используя деструктуризацию вывести в консоль свойства dogName и age.

//  let obj = {
//    name: 'Patrick', 
//    age: '22', 
//    dog:  {
//       dogName: 'Hachi',
//       age: 2,
//   },
// };
// let {name, age, dog: {dogName, age: ageDog}} = obj;
// console.log(dogName);
// console.log(ageDog);
// console.log(age);



// todo tasks

//! task1

// function checkTask([firstName, , , titul]) {
//     console.log(firstName, titul);
// }
// checkTask(["Julius", "Caesar", "Consul", "of the Roman Republic"]);

//! task2 
// function checkTask(fullName) {
//     let arr = fullName.split(' ');
//     let [firstName, lastName] = arr;
//     console.log(firstName, lastName);
// }
// checkTask('Albert Einstein');

//! task3 ?
// function checkTask(fullName) {
//     let arr = fullName.split(' ')
//     let [n, a] = arr;
//  let obj = {
//      firstName: n,
//      lastName: a,
//      }
//  console.log(obj);
// }
// checkTask("Albert Einstein");

//! task4 
// function checkTask(obj) {
//     let {name, surname, age} = obj;
//     console.log(name, surname, age)  
// }
// checkTask({name: "Петр", surname: 'Петров', age: '20 лет'});

//! task5 
// function checkTask(obj) {
//     let {hello, apple, ...java} = obj;
//     console.log(java);
// }
// checkTask({ hello: 'World', apple: 'iPhone', java: 'script'});

//! task6 ?
// function checkTask(a,b) {
//     [a, b] = [b, a]
//     console.log(a,b)
// }
// checkTask(0,1)

//! task7 ?
// function checkTask(arr) {
//     let [, elem2 = 'bbb', elem3 = 'eee'] = arr;
//     (console.log(elem2, elem3)) 
// }
// checkTask(['первый', 'второй'])

//! task 8 ?
// function checkTask(obj) {
//     let {name, age, hobbys: [hobby1, hobby2]} = obj;
//     console.log(hobby1, hobby2);
// }
// checkTask( {name: 'Jack', age: '22', hobbys: ['football', 'swimming']});

//! task 9 ?
// function checkTask(obj) {
//     let {name = 'Аноном', surname = 'Анонимович', age = '? лет'} = obj;
//     let arr = [];
//     for(let key in obj) {
//        arr.push(obj[key]);
//     }
//     console.log(arr);
// }
// checkTask({name: 'Петр', 'surname': 'Петров', 'age': '20 лет', });

//! task10 ? *
// function checkTask([a,b,c]) {
//     let person = {
//         name: a,
//         surname: b,
//         age: c,
//     };
//     console.log(person);
// }
// checkTask(['Sam', 'Christenson', 22]);


//! task11 ? *
// function checkTask(obj) {
//     let {name = "Aibek", age = "99"} = obj
//     console.log(name, age);
// }
// checkTask({name: 'John', age: '22', });


//! task12
function checkTask(person) {  
    let person = {
        
    };
    let {n = "Aibek", s = "Bekov", a = 99} = person;
    let name = person.n;  
    let surname = person.s;  
    let age = person.a  
    console.log(n, s,a); 
} 
checkTask()
