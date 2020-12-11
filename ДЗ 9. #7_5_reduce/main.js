let arr = [10,20,30,40,50];
console.log(arr);

// .reduce(cb,100)

//возвращает что то
//перебирает , 
//входящие 3 элемента
//summ промежуточная переменная в которую возвращаем 
let summResult = arr.reduce(
  	function(summ,element,index,arr){
      // console.log(summ);
  		return summ+element
  	}
);
console.log(`сумма значений summResult: ${summResult}`);//вывод 150

// то же самое делали циклом
let summA=0;
for(let i=0; i<arr.length; i++){
	summA += arr[i];
}
console.log(`сумма всех значений маассива summA: ${summA}`);//вывод 150

let prev = arr.reduce(
  function(prev,element,index,arr){
    // console.log(prev);
    return prev+element
  },50 //изначально значение промежуточной переменной
);
console.log(`сумма всех значений маассива prev: ${prev}`);//вывод 200  сумма всех значений маассива + 50

array = [10,20 ,5,500];
let minValue = array.reduce(
	function(min, element){
    // console.log(min);
    //если текущий элемент element <min ,в то в таком случае в пременную element буду возвращать element
    //иначе будет возвращаться то значение что, там находиться , а именно min
		return element<min ? element : min;
	}
)

console.log(`минимальное значение = ${minValue}`);//вывод минимальное значение моего массива, а именоо 5