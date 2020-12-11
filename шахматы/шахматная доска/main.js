
//рисуем таблицу 8 tr 9 td
//добавляем порядковые номера 

//внуть td белые 
//внуть td черные

//рисуем таблицу 8 tr 9 td
function renderBoard(){
    //рисуем таблицу 8*8
let trs  = [];
    alfanbets = 'abcdefgh',
    letters = alfanbets.split('');
    // console.log(letters);
    //цикл tr
  for(let i=8; i>=1; i--){// tr  i -индекс каждой нашей tr
    let tds = [];
    for(let j=1; j<=9; j++){ // td
      tds.push(`<td></td>`);   //получили 8 td колонок, заносим их в массив td (создали массив tds)
    }
    // console.log(tds);
    tds.unshift(`<td>${i}</td>`); //во внутрь добавляем первым еще одну tr которая хранит порядковый номер td

    //td засунуть в tr метод join
    let tr =  `<tr>${tds.join(``)}</tr>`;
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