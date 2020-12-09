
//рисуем таблицу 8 tr 9 td
//добавляем порядковые номера 

//внуть td белые 
//внуть td черные

//рисуем таблицу 8 tr 9 td
function renderBoard(){
    //рисуем таблицу 8*8
let trs  = [];
  for(let i=1; i<=8; i++){// tr
    let tds = [];
    for(let j=1; j<=8; j++){ // td
        tds.push(`<td></td>`);   //получили 8 td колонок, заносим их в массив td (создали массив tds)
    }
    // console.log(tds);

    //td засунуть в tr метод join
    let tr =  `<tr>${tds.join(``)}</tr>`;
    // console.log(tr);//вывод 8tr (строк ). в которых через зяпятую td
    //создаем массив trs
    //и каждую tr push в этот массив
    trs.push(tr);
  }
  console.log(trs);
  document.write(`<table class="board">${trs.join(``)}</table>`);
 

}
renderBoard();