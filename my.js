window.addEventListener("load", event => {
    var donut = document.querySelector(".donut"),
        btnDonut = document.querySelector(".btnDonut"),
        btnRefresh = document.querySelector(".btnRefresh"),
        btnIcecream = document.querySelector(".btnIcecream"),
        question = document.querySelector(".question"),
        icecream = document.querySelector(".icecream"),
        btn = document.querySelectorAll('.js-btn');
       
    btn.forEach((element) => {
       element.addEventListener("click", anime);
    })
    
    btnRefresh.addEventListener("click", removeAll);
    
    function anime(event){
       let target = event.currentTarget;
       if(target.contains(btnDonut)){
          donut.classList.remove("donutAnimeOut");
          donut.classList.add("donutAnimeIn");
          
         if(btnIcecream.classList.contains('selected')){
            icecream.classList.add("icecreamAnimeOut");
            icecream.classList.remove("icecreamAnimeIn");
         }
        
       }else{
          icecream.classList.remove("icecreamAnimeOut");
          icecream.classList.add("icecreamAnimeIn");
          
          if(btnDonut.classList.contains('selected')){
            donut.classList.add("donutAnimeOut");
            donut.classList.remove("donutAnimeIn");
         }
       }
       
       btn.forEach((element) =>{
          element.classList.remove('selected');
       })
       target.classList.add('selected');
       btnRefresh.style.display = "";
       question.classList.add("clicked");
    }
    
 
    function removeAll() {
       
       if(btnDonut.classList.contains('selected')){
           donut.classList.remove("donutAnimeIn");
       donut.classList.add("donutAnimeOut");
       }else{
           icecream.classList.remove("icecreamAnimeIn");
       icecream.classList.add("icecreamAnimeOut");
       }
    
       btnRefresh.style.display = "none";
       btnDonut.classList.remove("selected");
       btnIcecream.classList.remove("selected");
       question.classList.remove("clicked");
    }
 });