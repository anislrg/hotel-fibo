
$(document).ready(function(){
    //Je crée une fenêtre pop-up et je déclare au click //
     $('.pop-up').on('click', function(){
     // au passage de la souris et au cick de la souris //  
         $('#overlay').fadeIn(300); 
         $('.calendar').fadeIn(300); 
         let clickedbutton = $("input",$(this).parent()).attr('id');
         $('.dates').data('type',clickedbutton);
     });
     // Les évennement au click //
     $('table').on('click', function(event){
     // si je cible cet élément je veux que  si'', il me renvoi à ""//  
       let that=$(event.target);
        if(that.is('td') && !that.hasClass('notCurMonth') && !that.hasClass('holiday') && !that.hasClass('curDay')){
          
            $('td.curDay').toggleClass('curDay');
            that.toggleClass('curDay');
        }
    }); 
    
    $('#add_event').on('click', function(){
      
        let value= $('td.curDay').html();
        $('#overlay').fadeOut(300);
         $('.calendar').fadeOut(300);
         let id=($('.dates').data()).type;
         $('#' + id).val(value+" DECEMBRE, 2021");
    }); 
    // au click "rechercher" //
    $('#search').on('click', function(e){
        
        if ( confirm( "Merci de bien vérifier avant réservation" ) )
         {e.preventDefault();
            var popup = alert("réservation confirmée");
            // Code à éxécuter si le l'utilisateur clique sur "OK"
        } else {
            // Code à éxécuter si l'utilisateur clique sur "Annuler" 
        }
              if (!popup) {
                window.location.href = "index.html";
              }

    });
      
    });