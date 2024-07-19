// date.js

// 1.현재날짜 가져오기

let today = new Date();
console.log(today);

// 2. 특정날짜 가져오기

let date1 = new Date("2024-06-21");
console.log(date1);

// 3. 날짜 객체 메서드

let date2 = new Date(2024, 7, 16, 14, 2, 3);
date2 = new Date();
console.log(date2);
// 년도
console.log(date2.getFullYear());
// 월 (1월 : 0 , 2월 : 1 , ...)
console.log(date2.getMonth());
// 일
console.log(date2.getDate());
// 요일 ( 일요일 : 0, 월요일 : 1, 화요일 : 2 ...)
console.log(date2.getDay());
// 시간
console.log(date2.getHours());
// 분
console.log(date2.getMinutes());
// 초
console.log(date2.getSeconds());
// 밀리초
console.log(date2.getMilliseconds());

// 4. 날짜 설정하기
let date4 = new Date();
date4.setFullYear(2023);
console.log(date4);
date4.setMonth(1);
console.log(date4);

// 5. 날짜 계산하기
let curDate = new Date(); // 7-17
let afterDate = new Date(); // 7-20
afterDate.setDate(20);
afterDate.setMonth(6);
console.log(afterDate);
let diff = afterDate - curDate;
console.log(diff);
let diffSecond = diff / 1000;
let diffMinutes = diffSecond / 60;
let diffHours = diffMinutes / 60;
let diffDay = diffHours / 24;

console.log(diffDay);

// 특정 날짜와 특정 날짜 사이의 일수 구하기
let remainDay = diff / (1000 * 60 * 60 * 24);

console.log(remainDay);
// 소수점 올림
console.log(Math.ceil(remainDay));

let dateString = date4.toISOString().split("T");
[0];
console.log(dateString);
