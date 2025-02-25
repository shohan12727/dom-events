// option 2 
function makeGreen (){
    document.body.style.backgroundColor ='green';
   }
   function makeRed (){
    document.body.style.backgroundColor ='red';
   }
// option 3 

const btnMakeGray = document.getElementById ('btn-make-gray');
//    console.log(btnMakeGray);
btnMakeGray.onclick = function makeGray (){
    document.body.style.backgroundColor = 'gray';
}
// option 4  ------  best way to do it 
document.getElementById('make-it-pink').addEventListener('click',function(){
    // console.log(777);
    document.body.style.backgroundColor ='pink';
})