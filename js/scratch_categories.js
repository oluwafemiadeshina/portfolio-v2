//Photography ta
const badgee = document.querySelector(".cat");


//Photo_Tab_Category declaration
const cat_tab1 = document.querySelector(".cat1");
const cat_tab2 = document.querySelector(".cat2");
const cat_tab3 = document.querySelector(".cat3");
const cat_tab4 = document.querySelector(".cat4");


loadEventListeners();

function loadEventListeners() {
    badgee.addEventListener('click', photo_Category);
}

function photo_Category(e){

  if(e.target.classList.contains('badge') && e.target.classList.contains('cat1')){
    cat_tab1.style="background-color:#D4D4D4";
    cat_tab2.style="background-color:#FFFFFF";
    cat_tab3.style="background-color:#FFFFFF";
    cat_tab4.style="background-color:#FFFFFF";
 }else if(e.target.classList.contains('badge') && e.target.classList.contains('cat2')){
  cat_tab1.style="background-color:#FFFFFF";
  cat_tab2.style="background-color:#D4D4D4";
  cat_tab3.style="background-color:#FFFFFF";
  cat_tab4.style="background-color:#FFFFFF";
  }else if(e.target.classList.contains('badge') && e.target.classList.contains('cat3')){
    cat_tab1.style="background-color:#FFFFFF";
    cat_tab2.style="background-color:#FFFFFF";
    cat_tab3.style="background-color:#D4D4D4";
    cat_tab4.style="background-color:#FFFFFF";
  }else if(e.target.classList.contains('badge') && e.target.classList.contains('cat4')){
    cat_tab1.style="background-color:#FFFFFF";
    cat_tab2.style="background-color:#FFFFFF";
    cat_tab3.style="background-color:#FFFFFF";
    cat_tab4.style="background-color:#D4D4D4";
  }else {
    return null;
    console.log('Null');
  }
}