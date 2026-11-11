let students=[];
function addStudent(){
 let n=document.getElementById('name').value;
 let g=document.getElementById('grade').value;
 if(!n||!g) return alert('دخل الاسم والدرجة');
 students.push({n,g});
 render();
}
function render(){
 let html='';let sum=0;
 students.forEach((s,i)=>{
  html+=`<tr><td>${s.n}</td><td>${s.g}</td><td><button onclick="students.splice(${i},1);render()">حذف</button></td></tr>`;
  sum+=Number(s.g);
 });
 document.getElementById('list').innerHTML=html;
 document.getElementById('avg').innerText= students.length? 'المتوسط: '+(sum/students.length).toFixed(2) : '';
}
