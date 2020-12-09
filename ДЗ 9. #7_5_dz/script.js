//Для массива tasks необходимо выполнить следующую цепочку методов:

//Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
//Отфильтровать задачи, на выполнение, которых ушло два часа или больше.
//Умножить результат на часовую ставку.
//Вывести в html таблицу, которая состоит из ячеек с отфильтрованными задачами в виде:
var amount = 100;
var monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
var tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',180],
   ['A whole lot of nothing',240]
];
var tasks = [monday,tuesday];
var sumAmount = 0;

var ArrayFinish = [
	['Task name'],
	['Taks duration'],
	['Task amount']
];

//ф-ция рез-т и вывод Task amount
function taskAmount(newArr){
	newArr
		//Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
		.map(function(element){
			// console.log(element[1]);
			newElement = element[1]/60;
			return newElement ;
		})
		//Отфильтровать задачи, на выполнение, которых ушло два часа или больше.
		//Умножить результат на часовую ставку.
		.filter(
			function(element){
				// console.log(element);// вывод 3,2
				if(element>2){
					return sumAmount = element*amount; //sumAmount = 3*100=300 , вывод $ 300
				}
			} 
		)
		.forEach(function(element){
			element = sumAmount;
			console.log(`$ ${sumAmount}`);
		})

}
let taskAmountMonday = taskAmount(monday);
let taskAmountTuesday = taskAmount(tuesday);
console.log(taskAmountMonday); // undefined--?????

//массив для таблицы 
console.log(monday);
// console.log(tuesday);
//Task name: Write a tutorial
function newArrayFinish(valuenewArray){
	
	console.log(valuenewArray);
}

newArrayFinish(ArrayFinish);



// //Вывести в html таблицу, которая состоит из ячеек с отфильтрованными задачами в виде: