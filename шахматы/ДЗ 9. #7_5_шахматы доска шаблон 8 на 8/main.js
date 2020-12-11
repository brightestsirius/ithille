
//рисуем таблицу 8 tr 9 td
//добавляем порядковые номера 

//внуть td белые 
//внуть td черные

//рисуем таблицу 8 tr 9 td
function renderBoard(){
    //рисуем таблицу 8*8
let trs  = [];
    alfanbets = 'abcdefgh',
    letters = alfanbets.split(''),
     //массив создали фигуры
    figuresRow = ['rook','horse','bishop','king','queen','bishop','horse','rook'];
    // console.log(letters);
    //цикл tr
  for(let i=8; i>=1; i--){// tr  i -индекс каждой нашей tr
    let tds = [];
    for(let j=1; j<=8; j++){ // td
      //есди я работаю с со второй строкой 
      let figure = '';
      position = `${letters[j-1]}${i}`;
      if(i==2){
        //ставим белую пешку
        figure = getFigure('pawn','white',position);
        // figure = `<img scr="images/white/pawn.svg" data-name="pawn" data-color="white">`;
      }else if(i==7){
        figure = getFigure('pawn','black',position);
        // figure = `<img scr="images/black/pawn.svg" data-name="pawn" data-color="black">`;
      }else if(i==1){
        //figuresRow[j] это имя картинки фигур
        figure = getFigure(figuresRow[j-1],'white',position);
        // figure = `<img scr="images/white/${figuresRow[j]}.svg" data-name="${figuresRow[j]}" data-color="white">`;
      }else if(i==8){
        // figure = `<img scr="images/black/${figuresRow[j]}.svg" data-name="${figuresRow[j]}" data-color="black">`;
        figure = getFigure(figuresRow[j-1],'black',position);
      }

      tds.push(`<td data-id="${position}" data-empty="${figure === `` ? true : false}">${figure}</td>`);
         //получили 8 td колонок, заносим их в массив td (создали массив tds)
      //<td data-id="${letters[j-1]}${i}"> - это вывод в html 
      //<td data-id="a6"></td>
    }
    // console.log(tds);
    tds.unshift(`<td>${i}</td>`); //во внутрь добавляем первым еще одну tr которая хранит порядковый номер td

    //td засунуть в tr метод join
    let tr =  `<tr>${tds.join(``)}<td></td></tr>`;
    // console.log(tr);//вывод 8tr (строк ). в которых через зяпятую td
    //создаем массив trs
    //и каждую tr push в этот массив
    trs.push(tr);
  }
  // буквы
  lettersTR = letters
    .map(function(letter){
      //вернут строку ,к-я представляет собой td и в каждой td находиться наша буква
      return `<td>${letter}</td>`;
    })
    //склеили буквы в одну строку
    .join('');

  console.log(lettersTR);// вывод <td>a</td>" и тд 
  //выводим
  lettersTR = `<tr><td></td>${lettersTR}</tr>`;

  // console.log(trs);
// ${lettersTR} выводим наверх и вниз
  document.write(`<table class="board">${lettersTR} ${trs.join(``)} ${lettersTR}</table>`);
 

}
renderBoard();

//ф-ция которая дает правильную каринку
function getFigure(figureName, figureColor, figurePosition){
  return `<img src="images/${figureColor}/${figureName}.svg" data-name="${figureName}" data-color="${figureColor}" data-position="${figurePosition}">`;
}