			
arrA = [10, 'hello', undefined, true, 20, 3, -15, 'world'];
arrB = [1, 2, 23, -105];
arrC = [1, 2, 23, 10000,365,189];
	
	console.log(arrA);
				
//  chain methods 
//отфильтровать в тип number - метод filter
//преобразовать отфильтрованные элементы - метод map
//вывод на страницу - метод 

let resultArrAarrA = arrA
	.filter(
		function(element){
			return typeof element ==='number' || typeof element ==='boolean';//вывод [10, 20, 3, -15]
			// return typeof element ==='number';
		}//получу массив отфильтрованных данны по типу number
	)
	//к отфильтрованным значениям сумирование 
	.map(
		function(element){
			return element+10;//вывод [20, 11б 30, 13, -5]
		}
	)
	//вывод  на страницу
	.forEach(
		function(element){
		document.write(`<div>${element}</div>`);
		}
	);
// console.log(resultArrAarrA);