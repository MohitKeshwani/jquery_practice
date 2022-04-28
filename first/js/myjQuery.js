
$(document).ready(function () {
 

   
     
    $('p').click(function () {
         $('p').hide();
        
    }); 

    $('p').on(
        {
            click: function () {
                console.log('Thanks for clicking', this);
            },
            mouseleave: function () {
                console.log("mouseleave");

            }



        })
 
    $('#but').click(function () {
        $('#wiki').fadeToggle(5000);
    })
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
      });



});


