
  var
    i = 0,
    body = document.getElementsByTagName('body')[0],
    holoimg = document.getElementsByClassName("holoimg"),
    modal = document.getElementsByClassName("modal")[0],
    modalContent = document.getElementsByClassName("modal-content")[0],
    fullModal = document.getElementsByClassName("full-modal")[0],
    arrowLeft = document.getElementsByClassName("prev")[0],
    arrowRight = document.getElementsByClassName("next")[0];

  // body.onkeyup =function(e){
  //   if(e.keyCode == 122 || e.keyCode == 27) body.classList.add('loaded');
  // };



  // body.classList.add('loaded');


  holoimg[0].onclick = function(){
    modal.style.display="flex";
    modalContent.style.transform = "translate(0)"
  };
  window.onclick = function(e){
    if(e.target == modal) modal.style.display="none";
    if(e.target == modal2) modal2.style.display="none";

  };
  var screenWidth = screen.width,i;
  function toLeft(){
    // if(i<modalContent.clientWidth/2.5)i+=450;
    // modalContent.style.transform = "translate("+i+"px"+")";
    arrowLeft.onclick = function(){
      if(modalContent.clientWidth/2 > screenWidth*i+500 ){
        i++
        modalContent.style.transform = "translate("+screenWidth*i+"px"+")"
      }
      console.log(screenWidth*i)
    }
  };

  function toRight(){
    // if(i>-modalContent.clientWidth/2.5)i-=450;
    // modalContent.style.transform = "translate("+i+"px"+")";
    arrowRight.onclick = function(){
      if(-modalContent.clientWidth/2 < screenWidth*i-500 ){
        i--
      }
        modalContent.style.transform = "translate("+screenWidth*i+"px"+")"
        console.log(screenWidth*i)
        console.log(-modalContent.clientWidth/2)
    }

  };
  arrowRight.onmouseover = function(){toRight();};
  arrowRight.onclick = function(){toRight();};
  arrowLeft.onmouseover = function(){toLeft();};
  arrowLeft.onclick = function(){toLeft();};
  window.onwheel = function(e){

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
    if(j<modalContent2.clientWidth/2.5)j+=450;
    modalContent2.style.transform = "translate("+j+"px"+")";
  };

  function toRight2(){
    if(j>-modalContent2.clientWidth/2.5)j-=450;
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


  var startY, endY;
  window.addEventListener("touchstart",function(e){
    startY = e.touches[0].clientY;
    // console.log(startY)
  });
  window.addEventListener("touchend",function(e){
    endY = e.changedTouches[0].clientY;
    deltaY = startY - endY
    // console.log(endY);
    // console.log(deltaY)
    if (deltaY > 80){
      console.log("swipe Up")
      var targetId = e.target.getAttribute("data-target");
      document.getElementById(targetId).style.display = "block";
      arrowRight.style.display = 'none';
      arrowLeft.style.display = 'none';
    }
    else if( deltaY < -80){
      console.log("swipe Down")
      for(var i=0;i<fullModal.childElementCount;i++){
        fullModal.children[i].style.display="none";
      };
      arrowRight.style.display = 'block';
      arrowLeft.style.display = 'block';
      for(var i=0;i<fullModal2.childElementCount;i++){
        fullModal2.children[i].style.display="none";
      };
      arrowRight2.style.display = 'block';
      arrowLeft2.style.display = 'block';
    }
  });
  //========gyroscope==========
  // window.addEventListener('deviceorientation', function(e){
  //
  //   modalContent.style.transform = "translate("+(e.alpha*-50)+"px"+")";
  //   modalContent2.style.transform = "translate("+(e.alpha*-50)+"px"+")";
  // });
