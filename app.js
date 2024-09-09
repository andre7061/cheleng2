const url = "https://jsonplaceholder.typicode.com";

const getApi = (text) =>
  fetch(`${url}${text}`).then((el) => el.json());

// 1) /todos - Сколько всего задач у каждого пользователя?

getApi('/todos?userId=1').then(el=>console.log(el.length)) // 20

// 2) /todos - Сколько задач выполнил пользователь с id = 9? completed


getApi('/todos?userId=9').then(el => el.filter(user=>user.completed === true)).then(el=>console.log(el.length)); // 8

  
 

// 3) /todos - Сколько постов написал каждый пользователь?

getApi("/posts").then(el=>el.forEach(user=>console.log(user.userId))) //10

// 4) /todos - Сколько комментариев под постом с id = 11? 

getApi("/comments?postId=11").then(el=>console.log(el.length)) //5

// 5) /todos - Сколько комментариев под постом с id = 11?

// Дублируеться задание!!!

// 6) /todos - Какая почта у автора комментария с id = 104?

getApi("/comments?id=104").then(el=>console.log(el[0].email)) //Gabriel@oceane.biz

// 7) /todos - Как называется альбом с id = 84?

getApi("/albums?id=84").then(el=>console.log(el[0].title)) //est et at eos expedita


// 8) /todos - сколько фотографий в альбоме с id = 5?

getApi("/photos?albumId=5").then(el=>console.log(el.length)) // 50 

// 8) /todos - какого цвета изображение с id = 224? img.src=el.url

getApi('/photos//224').then(el => document.querySelector('img').src = el.url) //сиреневый

// 9) /todos - какой id имеет последняя фотография в альбоме с id = 32?

getApi("/photos?albumId=32").then(el=>console.log(el[el.length-1].id)) //1600

// 10) /todos - Какой id у альбома с названием "repellendus praesentium debitis officiis"?

getApi('/albums').then(el=>el.filter(user=>{
  if(user.title =="repellendus praesentium debitis officiis"){
    console.log( user.id) //91
  }}))
