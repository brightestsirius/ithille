

function renderBoard(){
let trs  = [];
  for(let i=1; i<=8; i++){// tr
    let tds = [];
    for(let j=1; j<=8; j++){ // td
        tds.push(`<td></td>`);   //получили 8 td колонок, заносим их в массив td (создали массив tds)
    }
  
    let tr =  `<tr>${tds.join(``)}</tr>`;
  
    trs.push(tr);
  }
  console.log(trs);
  document.write(`<table class="board">${trs.join(``)}</table>`);
 

}
renderBoard();