# 변수

js에서는 오브젝트, 어레이, 함수 등 모든 자료들을 담을 수 있음

변수를 만들 때는 **var, let, const**라는 3개 키워드를 사용

변수를 선언하면 처음에는 쓰레기 값이 아닌 undefined가 들어감

#### var

재선언 **가능**, 재할당 **가능**, 존재범위 : **함수**

```javascript
var hello='hello!'
function sayHello() {
  var hello='hello in function!';
  console.log(hello);
}
sayHello(); // hello in function!
console.log(hello); // hello!
```

```javascript
var hello='hello';
if(true)  {
  var hello = 'hello in if';
} // var의 존재범위는 {}가 아니고 function이므로 변수가 {}바깥에서도 변경됨
console.log(hello); // hello in if
```



#### let

재선언 **불가능**, 재할당 **가능**, 존재범위 : **중괄호**, **블록 단위**

```javascript
let hello='first hello';  
{
  let hello = 'inner hello';  
  console.log(hello); // inner hello
} // 존재범위가 {}이기 때문에 재선언이 가능함
console.log(hello); // first hello
```

```javascript
let hello='first hello';  
let hello='second hello'; // error
```



#### const

재선언 **불가능**, 재할당 **불가능**, 존재범위 : **중괄호**, **블록 단위**

```javascript
const hello='hello!';
{
  const hello='inner hello!'; 
  console.log(hello); // inner hello!
} // 존재범위가 {}이기 때문에 hello상수를 또 선언이 가능함
console.log(hello); // hello! 
```

```javascript
const hello='hello';
hello='change hello'; // error
```



### 할당

이름 = 값;

### 선언

키워드(var, let....)  변수 이름;

## 호이스팅

모든 선언을 변수 범위 맨위로 끌고오는 현상
var은 선언이 올라가면, 선언 후 undefined가 할당이 되고, let이랑 const는 할당이 안됨