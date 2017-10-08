/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Back */
    
    
        /* button  .uib_w_1 */
    $(document).on("click", ".uib_w_1", function(evt)
    {
         /*global activate_page */
         activate_page("#info"); 
         return false;
    });
    
        /* button  camera */
    $(document).on("click", ".uib_w_1", function(evt)
    {
         /*global activate_page */
         activate_page("#camera"); 
         return false;
    });
    
        /* button  .uib_w_11 */
    $(document).on("click", ".uib_w_11", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_12 */
    $(document).on("click", ".uib_w_12", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_13"));  
         return false;
    });
    
        /* button  IFTITAH / ISTIFTAH */
    $(document).on("click", ".uib_w_14", function(evt)
    {
         /*global activate_page */
         activate_page("#Iftitah"); 
         return false;
    });
    
        /* button  IFTITAH / ISTIFTAH */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_page */
         activate_page("#Iftitah"); 
         return false;
    });
    
        /* button  Iftitah / Istiftah */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_page */
         activate_page("#Iftitah"); 
         return false;
    });
    
        /* button  .uib_w_78 */
    $(document).on("click", ".uib_w_78", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_80 */
    $(document).on("click", ".uib_w_80", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_110 */
    $(document).on("click", ".uib_w_110", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_127 */
    $(document).on("click", ".uib_w_127", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Isti’adzah / Ta’awwudz */
    $(document).on("click", ".uib_w_15", function(evt)
    {
         /*global activate_page */
         activate_page("#Istiadzah"); 
         return false;
    });
    
        /* button  Ruku’ */
    $(document).on("click", ".uib_w_16", function(evt)
    {
         /*global activate_page */
         activate_page("#ruku"); 
         return false;
    });
    
        /* button  I’tidal */
    $(document).on("click", ".uib_w_17", function(evt)
    {
         /*global activate_page */
         activate_page("#Itidal"); 
         return false;
    });
    
        /* button  Prostration (Sujood) */
    $(document).on("click", ".uib_w_18", function(evt)
    {
         /*global activate_page */
         activate_page("#Sujud"); 
         return false;
    });
    
        /* button  .uib_w_236 */
    $(document).on("click", ".uib_w_236", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_210 */
    $(document).on("click", ".uib_w_210", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_191 */
    $(document).on("click", ".uib_w_191", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_174 */
    $(document).on("click", ".uib_w_174", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  .uib_w_19 */
    $(document).on("click", ".uib_w_19", function(evt)
    {
         /*global activate_page */
         activate_page("#Sitting"); 
         return false;
    });
    
        /* button  Tasyahud */
    $(document).on("click", ".uib_w_20", function(evt)
    {
         /*global activate_page */
         activate_page("#Tasyahud"); 
         return false;
    });
    
        /* button  Selawat After Tasyahud */
    $(document).on("click", ".uib_w_21", function(evt)
    {
         /*global activate_page */
         activate_page("#Selawat"); 
         return false;
    });
    
        /* button  Dua Before Salaam */
    $(document).on("click", ".uib_w_22", function(evt)
    {
         /*global activate_page */
         activate_page("#Salam"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
