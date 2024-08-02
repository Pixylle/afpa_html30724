function creetab(x,y){
   let minmax=Math.round((x*y)/7.5); //высчитываем количество мин, х - высота, у - длина
   let min=0; //начальное количество мин
   let minres=minmax-min;
   for (let r=1;r<=x;r++)  //запускаем цикл по созданию строк таблы с ограничением по количеству строк
          {  var newDiv = document.createElement("div");
            let parentElement = document.getElementById("pole");
            parentElement.appendChild(newDiv);
            newDiv.classList.add('row');
            newDiv.id = 'r' + r; // присваиваем id

                for (let c=1;c<=y;c++) { //запускаем цикл для заполнения ячеек
                var newcell= document.createElement("div");
                document.getElementById(newDiv.id).appendChild(newcell); //определяем родиельский элемент 
                      if (min<minmax)  { //если мины еще не израсходованы, запускаем рандом
                        getRandomClass();
                        let type=getRandomClass();
                        newcell.classList.add(type);
                             if (type="bomb") { //если случайно был выбран класс с миной, увеличиваем счетчик
                                min++;
                                
                             }
                             else if(((x*y)*0.13) < minres) {
                             

                                }
                             else {
                                continue;
                             }   
                                
                             }

                      }   
                      else {
                        continue;
                      }


                      //minres осталось мин, x*y-min осталось пустых ячеек
                      //если процент пустых ячеек меньше
                      //проверка после заполнения строки
                     // risk - соотношение
                      else {
                        newcell.classList.add(no); //если мины израсходованы, автоматом будет отсутствие мины


                      }
                      
                        
                        


                }
           
            }



   








       for (i=1;i<=x*y;i++){
        let r=1;
            for (i=1;i<x;i++)   {
                var newDiv = document.createElement("div");

                if (min<minmax){
                newDiv.setAttribute("data-boolean", randomBoolean);
                       if (newDiv.setAttribute.data-boolean(true)){
                           min++;
                       }
                       else {}
            
                let parentElement = document.getElementById("row");
                parentElement.appendChild(newDiv);
            }
            }
       

}
}


function getRandomClass() {   //создаем функцию, возвращающую случайный класс
    // Возвращаем случайный класс 'cell1' или 'cell2'
    return Math.random() < 0.5 ? 'bomb' : undefined;
}

function remplirow(r) { //цикл создания строк
    var newDiv = document.createElement("div");
    let parentElement = document.getElementById("pole");
    parentElement.appendChild(newDiv);
    newDiv.classList.add('row');
    newDiv.id = 'r' + r; // присваиваем id

}