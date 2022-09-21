// // // alert("hello");
// // var fullName;
// // fullName = 'Ha Nguyen'; //dấu '' thế hiện dữ liệu dạng chuỗi, dạng số thì ko cần dấu ''
// // console.log(fullName);//in ra thông báo trong console, tương tự với warn và error
// // confirm('xác nhận đủ tuổi');
// // prompt('nhập số');// hiển thj một ô input
// // setTimeout(function() {
// //     alert('thông báo ')
// // },1000) // đoạn code sẽ đc chạy trong 1 khoảng thời gian .vd:1000m/s
// // setInterval(function() {
// //     console.log('thongbao' + Math.random());
// // }) //thực hiện liên tục sau 1 khoảng thòi gian 
// // var number=10;
// // var a=++number*3- number--*2;
// // var b=number++*2- --number*3;
// // console.log('output',number =a+b);

// // var a = 1;
// // var b = 2;
// // if (a==1){
// //     console.log('đúng')
// // }
// // else{
// //     console.log('sai ')
// // }
// // var result = 'A' && null && 'c';
// // console.log(result);

// // var String = 'nguyen \'kjlkj\'';
// // console.log(String.length);
// // console.log(String.indexOf('nguyen'));
// // console.log(String.replace(/nguyen/g,'nguyen hà'));
// // var firstname = 'ha';
// // var lastname = 'nguyen';
// // console.log(`my name is:${firstname} ${lastname}`);
// // var number =1e10;
// // console.log(number);
    
// // var Pi = 3.1415926535;
// // console.log(Pi.toFixed(2));
// // var language = [
// //     'ruby',
// //     'javascript',
// //     'php',55,
// //     function(){}
// // ];
// // console.log(Array.isArray(language));
// // console.log(language.toString());
// // console.log(language.pop()); // xóa phần tử cuối mảng và trả về phần tử đã xóa. 
// // console.log(language);
// // console.log(language.push('dfsdfds'));// thêm phần tử vào cuối mảng và trả về độ dài mới.
// // console.log(language.shiff()); // xóa phần tử đầu mảng và trả về phần tử đã xóa.
// // console.log(language.unshift('dfds'));// thêm phần tử và đầu mảng và trả về độ dài mới 
// // console.log(language.splice(1,2,'dart')); // xóa vị trí được chọn và số lượng cần xóa.
// // console.log(language.concat()); //nối 2 mảng, hợp nhất vào mảng được gọi ben trái.
// // console.log(language.slice(1,2)); // cắt vị trí được chọn- 1 và 2 điểm đầu và điểm cuối.
// // console.log(language);
// // //array co the luu moi kieu du lieu ke ca funtion



// // function resolveAfter2seconds(){
// //     return new Promise(resolve =>{
// //         setTimeout(()=>{resolve('resolved');},2000);
// //     });
// // }
// // async function asyncCall(){
// //     console.log('calling');
// //     var result = await resolveAfter2seconds();
// //     console.log(result);
// // }
// // asyncCall();
// // console.log('has called');
// // function mystery(...params){
// //     return params;

// // }
// // let a = mystery(1,23,4);
// // console.log(a);
// // const array = [1,2,3];
// // const extentions = [4,5,6];
// // const newArray =[...array, ...extentions];
// // console.log(newArray);
// // const {foo,bar}={
// //     foo :"FOO",
// //     bar :"BAR"
// // };
// // console.log(foo,bar);\

// // let arr =[1,2,3,4];
// // let pushOne =arr.map(n=> n+1);
// // console.log(arr);
// // console.log(pushOne);
// // const add = (a= 10,b =5) => a+b;
// // add(5,4);
// // add (3);
// // add(null,9);
// // add(undefined,9);
// // add();
// // console.log(a);
// // console.log(b);

// // const input = [
// //    'one','two','three','four','five'
// //   ];
// //   const result = input.reduce((total, value) => {
// //        total[value] = (total[value] || 0) + 1;
// //        return total;
// //   }, {});
// //   console.log(result);

// // var groupBy = function(xs, key) {
// //     return xs.reduce(function(rv, x) {
// //       (rv[x[key]] = rv[x[key]] || []).push(x);
// //       return rv;
// //     }, {});
// //   };
  
// //   console.log(groupBy(['one', 'two', 'three','four','five'], 'length'));

// //creat a simple Obj
// var myInfo = {
//    name: 'ha',
//    age:18,
//    address: 'hanoi',
//    getName: function() {
//      return this.name;
//    }
// };
// myInfo.email='fhdjkhfsdjk';
// myInfo['my-email']='dffdsfsd';
// console.log(myInfo);
// console.log(myInfo.name);
// delete myInfo.name; //xóa đối tượng đc chọn
// console.log(myInfo);
// // console.log(myInfo.getName());

// //quy ước tên gọi
// //function-> phương thức /method



// // Object constructor tạo nên bản thiết kế cho đối tượng.
// function User(firstname,lastname,avatar){ // cú pháp khởi tạo obj constructor
//   //thuộc tính chung 
//   this.firstname= firstname;
//   this.lastname= lastname;
//   this.avatar= avatar;
//   this.getName =function(){
//     return `${this.firstname} ${this.lastname}`;
//   }
// };
// var author = new User('Ha','Nguyen','picture'); // tao object moi
// var user = new User('Hai','Nguyen','picture');
// //Object prototype doi tuong nguyen mau
// /*
// co the them thuoc tinh va phuong thuc, từ khóa this là để chỉ các đối tượng đc hàm,phương thức gọi đến 
// */
// User.prototype.className = 'User';
// User.prototype.getClassName = function(){
//   return this.className;
// }
// //
// author.title = 'fjdkfjsdkl';
// user.comments='fdfds'; // them thuoc tinh mà ko gây ảnh hưởng.
// console.log(author.getName());
// console.log(user.getName());
// console.log(user.className);
// console.log(user.getClassName());

// // date

// var date=new Date();
// var year= date.getFullYear();
// var month= date.getMonth() +1;
// var day= date.getDate();
// console.log(date.toString());

// //math object (math is not a obj constructor)
// console.log(Math.round(1.9)); // lam tron
// console.log(Math.abs(4))//gia tri tuyet doi
// console.log(Math.ceil(1.2))// output 2 lam tron tren 
// console.log(Math.floor(4.9)) // nguoc lai ceil.
// console.log(Math.floor(Math.random()*5));// tao random trong khoang 5 so(0 den 4) 
// var random = Math.floor(Math.random()*100)
// if (random < 50) { //ti le random la 50%
//   console.log('u lucky !')
// }

// //if else in Javacript

// // re nhanh switch 
// var date = 2;
// switch (date){
//   case 2: 
//     console.log('số 2 ');
//     break;
//   case 3: 
//     console.log('số 3');
//     break;
// }
// // toan tu 3 ngoi - ternary operator
// var coures = {
//   name: 'javascript',
//   coin: 500
// }
// var result = coures.coin > 0 ? `${coures.coin} Coin`: 'miễn phí' // gon hon su dung if else( áp dụng với điều kiện đơn giản //
// console.log(result);

// //vòng lặp loop

// for (var i = 1; i<=10;i++){
//   console.log(i);
// } //in dãy số tăng dần từ 1 đến 1000
// var myArray = ["java",'php','javascript','dart'];
// var myArrayLength = myArray.length;
// for(i=0;i <=myArrayLength/*giảm khối lượng tính toán vì đã lưu biến trc r  */;i++){ 
//   console.log(myArray[i]);
// }

// var inFor = "chuỗi" //lấy phần tử từ object
// //   name:'Nguyen Van A',
// //   age:16,
// // }
// for(var key in inFor){
//   console.log(inFor[key]);
// }
// // array in for in
// //for of loop
// var language = "chuỗi" // lấy phần tử của mảng hoặc có thể dùng tách chuỗi 
// //   'javascript',
// //   'php',
// //   'java'
// // ]
// for (var value of language){
//   console.log(language);
// }

// // while loop
// var i = 0;
// while(i< 20){
//   i++;
//   console.log(i);
// }
// //do while loop
// var i = 0;
// var isSuccess = false;
// do {
//   i++;
//   console.log("nap lan" +i);
//   if (false){
//     isSuccess = true;
//   }
// }while(!isSuccess && i<=3); //kiem tra tu lan lap thu 2 bo qua lan1.

// // break and continue 
// for(i=0;i<10;i++){
//   if(i%2 !==0){
//     continue; //bỏ qua số lẻ 
//   }
//   console.log(i);
// }
// //vòng lặp lồng nhau
// var mArray=[
//   [1,1],[1,1],[2,2]
// ];
// for(var i=0; i<mArray.length; i++){
//   for(var j=0;j<mArray[i].length; j++){
//     console.log(mArray[i][j]);
//   }
// }
// //
// for(var i =100; i>= 0; i-=5){
//   console.log(i);
// }
// //recursive đệ quy

// var array=['a','b','c','a','b','c'];
// console.log(array);

// console.log(giaiThua(6));
// function giaiThua(num){
//   if(num > 0){
//     return num *giaiThua(num-1);
//   }
//   return 1;
// }
// // for each 
// var array = [{name:'1',coin:0},{name:'1',coin:1},{name:'3',coin:2},{name:'4',coin:3}];
// array.forEach(function(arrays,index){ // duyet qua tung phan tu cua mang
//   console.log(arrays,index);
// });
// var isFree = array.every(function(arrays,index){ // kiem tra tat ca cac phan tu thoa man 1 dieu kien nao do 
//   return arrays.coin ===0;
// })
// console.log(isFree); 
// // cú pháp tương tự với các hàm some()"ngược lại với every",find()"tìm kiếm được 1 đối tượng", filter()"giống find nhưng trả về tất cả các phần từ thỏa mãn".
// var list =array.filter(function(arrays,index){
//   return array.name === "1";
// });
// console.log(list);


// //map() sau nay se su dung nhieu 

// var newArray = array.map(function courseHandler(course,index){// function return lai cai ji thi map nhan gia tri do.
//   return {
//     id:123,
//     name :`Khoa hoc ${course.name}`,
//     coin :array.coin,
//     coinText : `Gia: ${course.coin}`,


//     index :index
//   }
// });
// console.log(newArray);


// // làm tập làm phẳng array(flat array) từ depth array 
// var depthArray = [1,2,[3,4],5,6,[7,8,9]];
// var flatArray = depthArray.reduce(function(FlatOutput,Flatitem){
//   return FlatOutput.concat(Flatitem);
// },[])
// console.log(flatArray);

// // 
// cách mà phương thức reduce hoạt động
// Array.prototype.reduce1 = function(callback,result){
//   let i =0;
//   if(arguments.length<2){
//     i =1;
//     result = this[0];
//   }
//   for (;i<this.length;i++){
//     result = callback(result,this[i],i,this);
//   }
//   return result;
// }
// //test
// const number =[1,2,3,4,5];
// const result = number.reduce1(function(total/*biến lưu trữ*/,number/*current value */){
//   return total+number
// },0)
// console.log(result);

// // include method
// var title = ['method','this']
// console.log(title.includes('this',0));


// for each method
// Array.prototype.forEach2 = function(cb){
//   for (var index in this){
//     if(this.hasOwnProperty(index)){
//       cb(this[index],index,this);
//     };
//     }
//   };
//   var numbers =[1,2,3,4,5,6,7,8,9,10];
//  numbers.forEach2(function(numbers,index,array){
//     console.log(numbers);
//   });

  // filter method
//   Array.prototype.filter2= function(cb){
//     var output =[];
//     for(var i in this){
//       if(this.hasOwnProperty(i)){
//         var result = cb(this[i]);
//         if(result){
//             output.push(this[i]);
//         }
//       }
//     }
//     return output;
//   }
// var course = [
//   {name: '123',cost:100},
//   {name: '456',cost:200},
//   {name: '789',cost:300}
// ];
// var filterCourse = course.filter2(function(course,index){
//   return course.cost > 100;
// });
// console.log(filterCourse);

//Some()method
// Array.prototype.some2= function(callback){
//   var output = false;
//   for(var i in this){
//     if(this.hasOwnProperty(i)){
//       if(callback=this[i],i,this){
//         output = true;
//         break;
//       };
//     };
//   };
//   return output;
// };
// var Course = [
//   {name:"true",isFinished:true},{name:"false",isFinished:true},{name:'undefine',isFinished:false}
// ]
// var result =Course.some2(function(course,index){
//   return course.isFinished;
// });
// console.log(result);

// every() method


// Array.prototype.every2= function(callback){
//     var output = true;
//     for(var i in this){
//       if(this.hasOwnProperty(i)){
//         var result = callback(this[i],i,this)
//         if(!result){
//           output = false;
//           break;
//         };
//       };
//     };
//     return output;
//   };

//   var Course = [
//       {name:"true",isFinished:true},{name:"false",isFinished:true},{name:'undefine',isFinished:false}
//     ]
//     var result =Course.every2(function(course,index){
//       return course.isFinished;
//     });
//     console.log(result);
// console.log(document);
// document.write('helloo')
// var headingNode =document.getElementById('heading');
// var headingNode = document.querySelector;

// var headingElement = document.querySelector('h1');
// console.log(headingElement);
// headingElement.className= 'test';

// var boxElement = document.querySelector('.box');

// // boxElement.style.height = '100px';
// // boxElement.style.width = '100px';
// // boxElement.style.backgroundColor = 'red';
// Object.assign(boxElement.style,{
//   height: '100px',
//   width: '100px',
//   // backgroundColor: 'red'
// });

// boxElement.classList.toggle('blue');
// setTimeout(
//   () => {
//     boxElement.classList.toggle('red');
//   },5000
// )
// console.log([boxElement]);
// var h1Elements = document.querySelectorAll('h1')
// for (var i = 0; i < h1Elements.length; ++i){
//   h1Elements[1].onclick = function(e){
//     console.log(e.target);
//   }
// }
// h1Element.onclick= function(e){
//   console.log(e.target);
// };



// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeydown = function(e){
//  console.log(e.which);
//  switch(e.which){
//    case 27:
//      console.log('thoát')
//      break;
//  }
// }
// document.onkeypress = function(e){
//   console.log(e.which);
//   switch(e.which){
//     case 27:
//       console.log('thoát');
//       break;
//     case 13:
//       console.log('enter'); 
//       break;
//   }
// }

// var aElements = document.links;
// for (var i = 0; i < aElements.length; ++i){
//   aElements[i].onclick = function(e){
//     if(e.target.href.startsWith('https://www.google.com.vn/')){
//       e.preventDefault();
//     }
//   }
// }
// var ulElements = document.querySelector('ul');
// ulElements.onmousedown = function(e){
//   e.preventDefault();
// }
// ulElements.onclick = function(e){
//   console.log(e.target)
// } 


//stringify : từ javascript sang JSON  
// parse : từ JSON sang javascript


// var a = '1';
// console.log(typeof JSON.parse(a));

// console.log( JSON.stringify({
  
//   name: 'fdfs',
//   age:21312,
//   test: function(){},
// }));


// promise 
// executor
// var promise = new Promise(function(resolve, reject){
//   //logic
//   // 
//   reject();
// })
// promise
// .then(function(){ //resolve
//   console.log('1');
// })
// .catch(function(){ //reject (bẫy bắt lỗi)
//   console.log('2');
// })
// .finally(function(){// have both in resovle, reject
//   console.log('3');
// })

// Chain

/*bad code (hell) */
// function hell(value,cb){
//   cb(value);
// }
// hell(1,function(valueA){
//   hell(valueA+1,function(valueB){
//     hell(valueB+1,function(valueC){
//       console.log(valueC);
//     })
//   })
// })

// clean code with Promise
// function clean (value) {
//   return new Promise(function(resolve){
//     resolve(value);
//   })
// }
// clean(0)
// .then(function(value){
//   return value+1;
// })
// .then(function(value){
//   return value+1;
// })
// .then(function(value){
//   console.log(value+1);
// })

// var promise = Promise.reject("thành công!");

// promise.then(function(result){
//   console.log(result);
// });
// promise.catch(function(result){
//   console.log('thất bại ', result);
// })


// var promise1 = new Promise(function(resolve){
//   setTimeout(function(){
//     resolve([2,3]);
//   },2000)
// });
// var promise2 = new Promise(function(resolve){
//   setTimeout(function(){
//     resolve([4]);
//   },3000)
// });

// Promise.all([promise1, promise2]).then(function(result1, result2){
//   console.log(result1.concat(result2)); 
// })


//fetch
// var postApi = 'https://jsonplaceholder.typicode.com/posts';

// fetch(postApi)
//   .then(function(response){
//     return response.json();
//   })
//   .then(function(posts){
//     var htmls = posts.map(function(post){
//       return `<li>
//       <h2> ${post.title} </h2>
//       <p> ${post.body} </p> 
//       </li>`;
//     })
//     var html = htmls.join('');
//     document.getElementById('post-block').innerHTML = html;
//   })
  // .catch(function(err){
  //   alert('ERRoR!')
  // });




  // var postApi = 'http://localhost:3000/posts'

  // fetch(postApi)
  //   .then(function(response){
  //     return response.json();
  //   })
  //   .then(function(posts){
  //     console.log(posts);
  //   })

  // var listCoursesBlock = document.querySelector('#listCourses');

  // var couresApi = 'http://localhost:3000/course';
  // function start(){
  //   getCourse(renderCourse);
  // }
  // start();

  // function getCourse(callback){
  //   fetch(couresApi)
  //   .then(function(response){
  //     return response.json();
  //   })
  //   .then(callback);
  // }
  // function renderCourse(){

  // }

//   {
//     let course = 123;
//     {
//       console.log(course);
//     }
//   }

//   class Course { // class constructor
//     contructor(name,price){
//       this.name = name;
//       this.price = name;
//     }
//   }
  
//   const PHP = new Course("PHP",100);
//   const JS = new Course("JS",200);
//   console.log(PHP);
//   console.log(JS);

//   // inhanced object literals
//   var name = 'HA nguyen ';
//   var cost = 5;

//   var course ={
//     name,
//     cost,
//     getName: function(){
//       return name;
//     }
//   }
// var {name,cost}= course;
// console.log(name,cost);
// var array = ['a', 'b', 'c'];
// // var [a,b,c] = array lay phan tu trong mang 
// var[a,...rest] = array; //lay phan tu con lai trong mang
// console.log(a);
// console.log(rest);

// function logger(...params) {
//   console.log(params);
// }
// console.log(logger(13,23,33));

// //spread- toan tu giai 

// var array1 = ['javascript','Ruby','PHP'];
// var array2 =['ReactJS','dart'];
// var array3 =[...array2,...array1];
// console.log(array3);

// var array4 =['javascript','Ruby','PHP']
// function logger(...rest) {
//   for (var i=0; i<rest.length ;i++){
//     console.log(rest[i]);
//   }
// };
// console.log(logger(...array4));


// // taggged template literals 
// function highlight([first,...rest],...value){
//   return value.reduce(function(acc,curr){
//     [...acc,`<span>${curr}</span>`,rest.shift()],[first]
//   }).join('');
// }
// var brand = 'panda';
// var name = 'Ha nGuyen';
// const html = highlight`hjfhjfdh ${brand} fdsfsd ${name}j`;
// console.log(html);


// modules Gồm impport và export
// import logger,{ TYPE_LOG,TYPE_WARN,TYPE_ERRO} from './logger.js';
// import * as logger from './logger.js';
// console.log('message',TYPE_LOG)


// const obj = {
//   getName(value) {
//     console.log(value);
//   }
// }
// obj.getName?.(123);
// var array = ['a','b','c']
// var [a,b,c] = array; //destructoring
// console.log(a,b,c);

// var Arr = ['a','b','c','d','a','b','c','d'];

// console.log(new Set(Arr));



const Arr = [
  {id:1,name: 'a'},
  {id:2,name:'b'},
  {id:3,name : 'c'},
]
Arr.forEach((value)=>{
  console.log(value);
})


// const number = [1,2,3,4,5,6,7,8,9,10]

// const result = number.reduce((a,b)=>{
//   return a + b;
// },0)
// console.log(result)


// function khongtrung(arr) {
//   var newArr = []
//   newArr = arr.filter(function (item) {
//     return newArr.includes(item) ? '' : newArr.push(item)
//   })
//   return newArr
// }
// console.log((khongtrung([1, 2, 3,4, 5, 1,2,3,4,5])))

// const trung = [1, 2, 3,4, 5, 1,2,3,4,5]
// console.log(...(new Set(trung)))

Array.prototype.mapTest = function(callback){
  const arrayLength = this.length
  for (var i =0; i < arrayLength;i++){
    callback(this[i],i);
  }
}


var mang = ['dajdksa','dsadjaskj','dasjdajshk']


mang.mapTest((mang,index)=>console.log(index,mang))

Array.prototype.myMap = function(cb) {
  const arrNew = []
  const arraylength = this.length;
  for(var i = 0; i < arraylength ; i++){
      var results =cb(this[i],i)
      arrNew.push(results)
  }
  return arrNew;
}