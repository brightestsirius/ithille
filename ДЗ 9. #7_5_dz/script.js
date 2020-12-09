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





//ф-ция рез-т и вывод Task amount
function taskAmount(newArr){
	return newArr
	//Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
	 .map(function(element){
	  // console.log(element[1]);
	  element[1] = element[1]/60;
	  return element;
	 })
	 //Отфильтровать задачи, на выполнение, которых ушло два часа или больше
	 .filter(
		function(element){
		  return element[1]>2;
		} 
	)
   }
   let taskAmountMonday = taskAmount(monday);
   let taskAmountTuesday = taskAmount(tuesday);
   console.log(taskAmountMonday);
   console.log(taskAmountTuesday);