var
  il=350,
  ir=350,
  body = document.getElementsByTagName('body')[0],
  holoimg = document.getElementsByClassName("holoimg"),
  modal = document.getElementsByClassName("modal")[0],
  arrowLeft = document.getElementsByClassName("prev")[0],
  arrowRight = document.getElementsByClassName("next")[0],
  modalContent = document.getElementsByClassName("modal-content")[0],
  fullModal = document.getElementsByClassName("full-modal")[0];
// body.classList.add('loaded');
body.onkeyup =function(e){
  if(e.keyCode == 122 || e.keyCode == 27) body.classList.add('loaded');
};

holoimg[0].onclick = function(){modal.style.display="flex";};
window.onclick = function(e){
  if(e.target == modal) modal.style.display="none";
};

function toLeft(){
  if(il==350){ir=350}
  modalContent.style.transform = "translate("+il+"px"+")";
  console.log(il)
};

function toRight(){
if(ir==350){il=350}
  modalContent.style.transform = "translate("+-ir+"px"+")";
  console.log(ir)
};
arrowRight.onmouseover = function(){toRight();};
arrowRight.onclick = function(){toRight();};
arrowLeft.onmouseover = function(){toLeft();};
arrowLeft.onclick = function(){toLeft();};
modalContent.onwheel = function(e){
  if(e.deltaY > 0){toRight();console.log()};
  if(e.deltaY < 0){toLeft();console.log()};
};

modalContent.onclick = function(e){
  var targetId = e.target.parentNode.getAttribute("data-target"),
      mySlide = document.getElementById(targetId);
      console.log(targetId);
      mySlide.style.display= "block";
      fullModal.style.display= "block";
      arrowLeft.style.display= "none";
      arrowRight.style.display= "none";
      modal.style.diplay = "none";
};

fullModal.ondblclick = function(){
  fullModal.style.display = "none";
  arrowLeft.style.display= "block";
  arrowRight.style.display= "block";
  modal.style.display = "flex";
};
