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
};

function toLeft(){
  if(i<900)i+=450;
  modalContent.style.transform = "translate("+i+"px"+")";
};

function toRight(){
  if(i>-900)i-=450;
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
//=================================================
