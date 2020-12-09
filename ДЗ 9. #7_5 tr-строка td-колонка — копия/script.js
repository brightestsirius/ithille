var amount = 100;
var monday = [
  ['Write a tutorial',180],//td
  ['Some web development',120]//td
];
var tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',180],
   ['A whole lot of nothing',240]
];
var tasks = [monday,tuesday];
// console.log(monday);
// console.log(tuesday);


//пройтись по массиву. преобразовать каждый эл в td
//создали новую переменную, тк map возвращает в новый массив
let newArr = monday
	.map(function(element,index){
		console.log(element);
		console.log(element[index]);
		//нужно получить <td>Task name: Write a tutorial</td>
		return `${element[index]}`; // получили 
	})
	.join(': ');
	
	console.log(newArr);








//1. сделать новый массив, в котором будут элементы находиться в td
//пройтись по массиву. преобразовать каждый эл в td
//создали новую переменную, тк map возвращает в новый массив
//преобразовать ,что б каждый элемент выглядел как td (колонка) - метод map
//получили новый  массив arraM - эт острока в которой все td (строки)
//["<td>Write a tutorial,180</td>" - строка, "<td>Some web development,120</td>" - строка]


