
window.onload = function()
{
    var iloscpunktow = 0;
    var zegar = document.getElementById("ikonkazegar");
    var ikonkajablko = document.getElementById("ikonkajablko");
    var koniec = document.getElementById("koniec");
    var jablko = document.getElementById("jablko");
    var punkty = document.getElementById("punkty");
    var glowa = document.getElementById("glowa");
    var cialo = document.getElementById("cialo");
    var cialo2 = document.getElementById("cialo2");
    var cialo3 = document.getElementById("cialo3");
    var cialo4 = document.getElementById("cialo4");
    var cialo5 = document.getElementById("cialo5");
    var cialo6 = document.getElementById("cialo6");
    var cialo7 = document.getElementById("cialo7");
    var cialo8 = document.getElementById("cialo8");
    var cialo9 = document.getElementById("cialo9");
    var cialo10 = document.getElementById("cialo10");
   
    ikonkajablko.style.zIndex =2;
    zegar.style.zIndex = 2;
    koniec.style.zIndex = 1000;
    jablko.style.zIndex = 100;
    glowa.style.zIndex = 11;
   
    
    
    
    
    
    
    
    
    

    var start = document.getElementById("start");
    start.style.position = "relative";
    start.style.left = "auto";
    start.style.width = "75%";
   
    

    start.style.zIndex = 1000;

    jablko.style.display = "none";
    punkty.style.display = "none";
  


    start.onclick = function(){
        punkty.style.display = "block";
        zegar.style.display = "block";
        ikonkajablko.style.display ="block";
        var czas = document.getElementById("czas");
        czas.style.display = "block";
        var czasmax = 60;
        czas.style.zIndex = 1; 
        
        this.style.display = "none";
        jablko.style.display = "block";
        
        var licznikczas = setInterval(timer, 1000);

        function timer(){
            czasmax=czasmax-1;
            czas.textContent = czasmax;
            if(czasmax <=0){
                clearInterval(licznikczas);
                var powtorka= document.getElementById("powtorka");
                powtorka.style.display ="block";
                powtorka.style.position = "relative";
                powtorka.style.left = "auto";
                powtorka.style.top ="10px"
                powtorka.style.width = "50%";
               
                powtorka.style.zIndex = 100;

                powtorka.onclick = function(){
                    location.reload();
                    return false;

                };



                ikonkajablko.style.display ="none";
                jablko.style.display = "none";
                punkty.style.display = "none";
                czas.style.display = "none";
                koniec.style.display = "block";
                
                zegar.style.display = "none";
                
                return;
            }
        }


    }


    document.onmouseover = function (e){
        document.onmousemove = function(e)
        {
            glowa.style.left = e.clientX - 150/ 2 + "px";
            var x = e.clientX - 75 / 2 + "px";
            glowa.style.top = e.clientY - 150 / 2  + "px";
            var y =e.clientY - 90 / 2  + "px";
           
            jablko.onmouseover = function ()
            {
                var wys =  Math.floor(Math.random() * window.innerHeight );
                var szer =  Math.floor(Math.random() * window.innerWidth );

                var wysz = parseInt(wys);
                var szerz = parseInt(szer);

                var wysminus =  0;
                if(wysz < 200){
                    wysminus = wysz + 100;
                }
                else{
                    wysminus = wysz - 100;
                }
                var szerminus = 0;
                if(szerz < 200){
                    szerminus = szerz + 100;
                }
                else{
                    szerminus = szerz - 100;
                }
                iloscpunktow = iloscpunktow + 1;
            
                jablko.style.top = wysminus + "px";
                jablko.style.left =szerminus + "px";
                
            };


            punkty.textContent =   iloscpunktow;
            koniec.textContent = " Zdobyłeś " + iloscpunktow +" punktów!";


           if(iloscpunktow > 5){
            
            cialo.style.display = "block";
            
            setTimeout(function()
            {   
                cialo.style.zIndex = 1;
                cialo.style.left = x;
                cialo.style.top = y;
                cialo.style.zIndex = 10;
            },50);
            
            };
            
            

            if(iloscpunktow > 10){
                
                
                cialo2.style.display = "block";
                setTimeout(function()
                {
                    cialo2.style.zIndex = 1;
                    cialo2.style.left = x;
                    cialo2.style.top = y;
                    cialo2.style.zIndex = 9;
                },100);
                
            };
           

            if (iloscpunktow > 20){
                
                cialo3.style.display = "block";
                setTimeout(function()
                {
                    cialo3.style.zIndex = 1;
                    cialo3.style.left = x;
                    cialo3.style.top = y;
                    cialo3.style.zIndex = 8;
                },150);
                
            };
            
            if (iloscpunktow > 30){
                
                cialo4.style.display = "block";
                setTimeout(function()
                {
                    cialo4.style.zIndex = 1;
                    cialo4.style.left = x;
                    cialo4.style.top = y;
                    cialo4.style.zIndex = 7;
                },200);
                
            };
            
            
            if (iloscpunktow > 40){
               
               cialo5.style.display = "block";
                setTimeout(function()
                {
                    cialo5.style.zIndex = 1;
                    cialo5.style.left = x;
                    cialo5.style.top = y;
                    cialo5.style.zIndex = 6;
                },250);
               
            };

            if (iloscpunktow > 50){
                
                cialo6.style.display = "block";
                 setTimeout(function()
                 {
                    cialo6.style.zIndex = 1;
                    cialo6.style.left = x;
                    cialo6.style.top = y;
                    cialo6.style.zIndex = 5;
                 },300);
                 
             };

             if (iloscpunktow > 60){
                
                cialo7.style.display = "block";
                 setTimeout(function()
                 {
                     cialo7.style.zIndex = 1;
                     cialo7.style.left = x;
                     cialo7.style.top = y;
                     cialo7.style.zIndex = 4;
                 },350);
                 
             };

             if (iloscpunktow > 70){
                
                cialo8.style.display = "block";
                 setTimeout(function()
                 {
                     cialo8.style.zIndex = 1;
                     cialo8.style.left = x;
                     cialo8.style.top = y;
                     cialo8.style.zIndex = 3;
            
                 },400);}
                 


             if (iloscpunktow > 80){
                
                cialo9.style.display = "block";
                 setTimeout(function()
                 {
                     cialo9.style.zIndex = 1;
                     cialo9.style.left = x;
                     cialo9.style.top = y;
                     cialo9.style.zIndex = 2;
                 },450);
                 
             };

             if (iloscpunktow > 90){
                cialo10.style.display = "block";
                 setTimeout(function()
                 {
                     cialo10.style.left = x;
                     cialo10.style.top = y;
                     cialo10.style.zIndex = 1;
                 },500);
                 
             };
             
            
         
        };
       

    };



};
