var
  i = 0,
  body = document.getElementsByTagName('body')[0],
  holoimg = document.getElementsByClassName("holoimg"),
  modal = document.getElementsByClassName("modal")[0],
  modalContent = document.getElementsByClassName("modal-content")[0],
  fullModal = document.getElementsByClassName("full-modal")[0],
  arrowLeft = document.getElementsByClassName("prev")[0],
  arrowRight = document.getElementsByClassName("next")[0];
// body.classList.add('loaded');
body.onkeyup =function(e){
  if(e.keyCode == 122 || e.keyCode == 27) body.classList.add('loaded');
};

holoimg[0].onclick = function(){
  modal.style.display="flex";
  modalContent.style.transform = "translate(0)"
};
window.onclick = function(e){
  if(e.target == modal) modal.style.display="none";
  if(e.target == modal2) modal2.style.display="none";

};

function toLeft(){
  if(i<1500)i+=450;
  modalContent.style.transform = "translate("+i+"px"+")";
};

function toRight(){
  if(i>-1500)i-=450;
  modalContent.style.transform = "translate("+i+"px"+")";
};
arrowRight.onmouseover = function(){toRight();};
arrowRight.onclick = function(){toRight();};
arrowLeft.onmouseover = function(){toLeft();};
arrowLeft.onclick = function(){toLeft();};
modalContent.onwheel = function(e){
  if(e.deltaY > 0){toRight()};
  if(e.deltaY < 0){toLeft()};
};

modalContent.onclick = function(e){
  var targetId = e.target.getAttribute("data-target");
  document.getElementById(targetId).style.display = "block";
  arrowRight.style.display = 'none';
  arrowLeft.style.display = 'none';
};

fullModal.ondblclick = function(e){
  for(var i=0;i<fullModal.childElementCount;i++){
    fullModal.children[i].style.display="none";
  };
  arrowRight.style.display = 'block';
  arrowLeft.style.display = 'block';
};

// fullModal.addEventListener('touchend', function(e) {
//   for(var i=0;i<fullModal.childElementCount;i++){
//     fullModal.children[i].style.display="none";
//   };
//   arrowRight.style.display = 'block';
//   arrowLeft.style.display = 'block';
// })



//=================================================



var
  j = 0,
  holoimg = document.getElementsByClassName("holoimg"),
  modal2 = document.getElementsByClassName("modal")[1],
  modalContent2 = document.getElementsByClassName("modal-content")[1],
  fullModal2 = document.getElementsByClassName("full-modal")[1],
  arrowLeft2 = document.getElementsByClassName("prev")[1],
  arrowRight2 = document.getElementsByClassName("next")[1];
// body.classList.add('loaded');
body.onkeyup =function(e){
  if(e.keyCode == 122 || e.keyCode == 27) body.classList.add('loaded');
};

holoimg[1].onclick = function(){
  modal2.style.display="flex";
  modalContent2.style.transform = "translate(0)"
};

function toLeft2(){
  if(j<1500)j+=450;
  modalContent2.style.transform = "translate("+j+"px"+")";
};

function toRight2(){
  if(j>-1500)j-=450;
  modalContent2.style.transform = "translate("+j+"px"+")";
};
arrowRight2.onmouseover = function(){toRight2();};
arrowRight2.onclick = function(){toRight2();};
arrowLeft2.onmouseover = function(){toLeft2();};
arrowLeft2.onclick = function(){toLeft2();};
modalContent2.onwheel = function(e){
  if(e.deltaY > 0){toRight2()};
  if(e.deltaY < 0){toLeft2()};
};

modalContent2.onclick = function(e){
  var targetId = e.target.getAttribute("data-target");
  document.getElementById(targetId).style.display = "block";
  arrowRight2.style.display = 'none';
  arrowLeft2.style.display = 'none';
};

fullModal2.ondblclick = function(e){
  for(var i=0;i<fullModal2.childElementCount;i++){
    fullModal2.children[i].style.display="none";
  };
  arrowRight2.style.display = 'block';
  arrowLeft2.style.display = 'block';
};
var ball   = document.querySelector('.ball');
var garden = document.querySelector('.garden');
var output = document.querySelector('.output');

var maxX = garden.clientWidth  - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;

function handleOrientation(event) {
  var x = event.beta;  // In degree in the range [-180,180]
  var y = event.gamma; // In degree in the range [-90,90]

  output.innerHTML  = "beta : " + x + "\n";
  output.innerHTML += "gamma: " + y + "\n";

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x >  90) { x =  90};
  if (x < -90) { x = -90};

  // To make computation easier we shift the range of
  // x and y to [0,180]
  x += 90;
  y += 90;

  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  ball.style.top  = (maxX*x/180 - 10) + "px";
  ball.style.left = (maxY*y/180 - 10) + "px";
}

window.addEventListener('deviceorientation', handleOrientation);
