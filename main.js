let task = [];
let text = '';

task[0] = '아무말';

function addTask(){
  let value = document.getElementById('get_text').value;
  
  if (value !== '') {
    task.unshift(value); //텍스트 박스에서 값 받기
    writeHtml(text);
  }
}

function clearTask(num) {
  num = Number(num);
  task.splice(num,1);
  writeHtml(text);
}

function writeHtml(txt){
    for (let i=0; i<task.length;i++){
      txt += '<p><input id="acp" type="checkbox">'+task[i]+'<button class="delete" id="'+i+'" onclick="clearTask(this.id)">지우기</button></p>';
    }
    document.getElementById('tasks').innerHTML = txt;
    console.log(txt+'\n'+task);
}
