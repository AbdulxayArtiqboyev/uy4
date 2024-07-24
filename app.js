// {
//     // masala 1
//     let number = +prompt('uch xonali son kiriting')
//     let birlik = Math.floor(number / 100)
//     let onlik = Math.floor(number % 100/10)
//     let yuzlik = number % 10 
//     console.log(birlik + yuzlik / onlik + ' :katta');
// }

// {
//     // masala 2
//     let number = +prompt('son kiriting');
//     let sum = 0
//     for(let i = 1; i <= number;i++){
//         if(number % i == 0){
//             sum += i
//         }
//     }
//     console.log(`boluvchilarning yigindisi: ${sum}`);
// }

// {
//     // masala 3
//     let array = ['salom',1,true,undefined];
//     for(let i = 0; i < array.length;i++){
//         if(typeof array[i] === 'string'){
//             array[i] = null
            
//         }
//         console.log(array[i]);
//     }
// }

// {
//     // masala 4
//     let array = [2,4,55,66,5,4,3];
//     let engKatta = 0;
//     for(let i = 1; i < array.length;i++){
//         if(array[i] > engKatta){
//             engKatta = array[i]
//         }
//     }
//     console.log(`eng katta son: ${engKatta}`);
// }
        
// {
//     // masala 5
//     let array = [2,4,5,5];
//     let sum = 0;
//     for(let i = 0; i< array.length; i++){
//         sum += array[i]
//     }
//     console.log(sum);

// }

// {
//     // masala 7
//     let array = [2,4,5,6,77,6];
//     for(let i = 0; i< array.length;i++){
//         if(array[i] % 2 == 0){
//             array[i] = 0
//         }
//         console.log(array[i]);
//     }

// }

// {
//     // masala 8
//     let firstNum = +prompt('birinchi son kiriting')
//     let amal = prompt('qanday amal bajarasz')
//     let secondNum = +prompt('ikkinchi son kiriting')
//     switch(amal){
//         case '+':
//             console.log(firstNum + secondNum);
//             break
//             case '-':
//                 console.log(firstNum - secondNum );
//                 break
//                 case '*':
//                     console.log(firstNum * secondNum);
//                     break
//                     case '/':
//                         console.log(firstNum - secondNum);

//     }
// }

// {
//     // masala 9
//     let names = prompt('ism kiriting')
//     let array = ['nurridin','komiljon','suxrob'];
//     for(let i = 0; i< array.length;i++){
//         if(names == array[i]) {
//             console.log(`bor: ${array[i]}`);
//         }
//         else{
//             console.log('yoq');
//         }
//     }
// }
        
    
// {
//     // masala 10
//     let name = prompt('ism kiriting')
//     let users = [
//         {
//             id:123,
//             name:'Abdulxay',
//             age:18,
//             gmail:'aaaa@gmail.com'
//         },
//         {
//             id:223,
//             name:'bexruz',
//             age:22,
//             gmail:'bbb@gmail.com'
//         },
//         {
//             id:145,
//             name:'komiljon',
//             age:15,
//             gmail:'bbb@gmail.com'
//         },
//     ]
//     let found = false
//     for(let i = 0; i < users.length;i++){
//         if(name.toLowerCase() === users[i].name.toLowerCase()){
//             console.log(users[i]);
//             found = true;
//             break;
//         }
        
//     }
//     if(!found){
//         console.log('bunday malumot yoq');
//     }
// }

// {
    // masala 11
//     let users = [
//         {
//             id:123,
//             name:'Abdulxay',
//             age:18,
//             gmail:'aaaa@gmail.com'
//         },
//         {
//             id:223,
//             name:'bexruz',
//             age:22,
//             gmail:'bbb@gmail.com'
//         },
//         {
//             id:145,
//             name:'komiljon',
//             age:15,
//             gmail:'bbb@gmail.com'
//         },
//     ]
//     let maxAge = users[0].age
//     for(let value of users){
//         if(value.age > maxAge){
//             console.log(`eng katta yosh: ${value.age}`);
//         }
//     }
    
// }
    
// {
//     // masala 12
//     let users = [
//                 {
//                     id:123,
//                     name:'Abdulxay',
//                     age:18,
//                     gmail:'aaaa@gmail.com'
//                 },
//                 {
//                     id:223,
//                     name:'bexruz',
//                     age:22,
//                     gmail:'bbb@gmail.com'
//                 },
//                 {
//                     id:145,
//                     name:'komiljon',
//                     age:15,
//                     gmail:'bbb@gmail.com'
//                 },
//             ]        
//             for(let i = 0; i<users.length;i++){
//                 console.log(`orta arifmetigi : ${users[i].age / 3}`);
//             }

// }

// {
//     // masala 13
//     let array = [23,54,21,76,23,87];
//     let sum = array[0] + array[5];
//     array.unshift(sum)
//     console.log(array);
// }

// {
//     // masala 14
//     let array = [1,2,3,4,5,6,7,8,9];
//     let juft = []
//     let toq = []
//     for(let i = 0; i< array.length;i++){
//         if(array[i] % 2 == 0){
//             juft.push(array[i])
//         }
//         else{
//             toq.push(array[i])
//         }
//     }
//     console.log(juft);
//     console.log(toq);
// }

// {
//     // masala 15
//     let array = [8,7,6,5,4];
//     let a = []
//     for(let i of array){
        
//         a.push(i)
        
//     }
//     console.log(a.reverse());
// }