var base_url = "http://casaestilo.in/app/";
var Timer;
var email_id = '';
var uniq_id = '';
var q1,q2,q3,q4 = '';
var a1,a3,a5,a8,a9 = '';
var ans=new Array();
var t1,t2,t3,t4 = 0;
var sumt = 0;
var dummy_var = 0;
var myApp = new Framework7({
    material: true,
    materialPageLoadDelay: 200,
    sortable: false,
    swipeout: false,
});

var $$ = Dom7;
var toast = myApp.toast();

var mainView = myApp.addView('.view-main', {
    domCache: false
});


myApp.onPageInit('page2', function (page) {

    $('.page2_button').click(function(e){
         dummy_var = 1;
         mainView.router.loadPage('page3.html');
    });
});

myApp.onPageInit('page3', function (page) {

    $('.page3_button').click(function(e){
           dummy_var = 1;
           mainView.router.loadPage('q1.html');
    });
});

myApp.onPageInit('question_1', function (page) {
    a1 = 'null_value';
    $('.anwsers').click(function(){
      $('.anwsers').css('color', '#3E4290');
      console.log(a1);
      a1 = $(this).attr('id');
      $(this).css('color', 'green');
      console.log(a1);
    })

    $('.q1_button').click(function(e){
        if (a1 === 'null_value') {
        } else {
          console.log(a1);
          dummy_var = 1;
          mainView.router.loadPage('q3.html');
        }
    });
});

myApp.onPageInit('question_3', function (page) {

    a3 = 'null_value';
    $('.anwsers').click(function(){
      $('.anwsers').css('color', '#3E4290');
      a3 = $(this).attr('id');
      $(this).css('color', 'green');
      console.log(a3);
    })

    $('.q3_button').click(function(e){
        if (a3 === 'null_value') {
        } else {
          console.log(a3);
          dummy_var = 1;
          mainView.router.loadPage('q5.html');
        }
    });
});

myApp.onPageInit('question_5', function (page) {

    a5 = 'null_value';
    $('.anwsers').click(function(){
      $('.anwsers').css('color', '#3E4290');
      a5 = $(this).attr('id');
      $(this).css('color', 'green');
      console.log(a5);
    })

    $('.q5_button').click(function(e){
        if (a5 === 'null_value') {
        } else {
          console.log(a5);
          dummy_var = 1;
          mainView.router.loadPage('q8.html');
        }
    });
});

myApp.onPageInit('question_8', function (page) {
    a8 = 'null_value';
    $('.anwsers').click(function(){
      $('.anwsers').css('color', '#3E4290');
      a8 = $(this).attr('id');
      $(this).css('color', 'green');
      console.log(a8);
    })
    $('.q8_button').click(function(e){
        if (a8 === 'null_value') {
        } else {
          console.log(a8);
          dummy_var = 1;
          mainView.router.loadPage('q9.html');
        }
    });
});


myApp.onPageInit('question_9', function (page) {
    a9 = 'null_value';
    $('.anwsers').click(function(){
      $('.anwsers').css('color', '#3E4290');
      a9 = $(this).attr('id');
      $(this).css('color', 'green');
      console.log(a9);
    })
    $('.q9_button').click(function(e){
        if (a9 === 'null_value') {
        } else {
          console.log(a9);
          dummy_var = 1;
          mainView.router.loadPage('thankyou.html');
        }
    });
});


myApp.onPageInit('gameover', function (page) {

    Timer = new radialTimer();
    Timer.init("go_timer", 5, function(){mainView.router.load({url:'index.html'})});
});

myApp.onPageInit('thankyou', function (page) {
      $('#total').empty();
      var tot=parseInt(a1)+parseInt(a3)+parseInt(a5)+parseInt(a8)+parseInt(a9);
      console.log(tot);
      var msg = 'Score : '+tot;
      $('#total').text(msg);
      $('.thankyou_button').click(function(e){
          dummy_var = 1;
          if ( tot > 35 && tot <= 50 ) {
            mainView.router.loadPage('result3.html');
          } else if ( tot >= 20 && tot <= 35 ) {
            mainView.router.loadPage('result2.html');
          } else if ( tot < 20 ) {
            mainView.router.loadPage('result1.html');
          }
    });
});

myApp.onPageInit('result1', function (page) {

});

myApp.onPageInit('result2', function (page) {

});

myApp.onPageInit('result3', function (page) {

});

myApp.onPageInit('userdetails', function (page) {

    $('.user_details_check').click(function(e){
        var errors = 0;
        var phoneno = /^\d{10}$/;
        var em_val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if ($('#txt-place').val() == 'administrator') {
            dummy_var = 1;
            mainView.router.loadPage('upload.html');
        }
        if(!$('#txt-name').val()){
            toast.show("Please enter your name");
            return false;
        }else if(!$('#txt-mobile').val()){
            toast.show("Please enter your mobile number");
            return false;
        }else if(!$('#txt-mobile').val().match(phoneno)){  
            toast.show("Please enter your valid Contact Number");
            return false;
        }else if(!$('#txt-place').val()){
            toast.show("Please enter your Place");
            return false;
        }else{
            uniq_id = $('#txt-place').val()+$('#txt-mobile').val()+$('#txt-name').val()+'megazolidplus';
            email_id = $('#txt-place').val()+$('#txt-mobile').val();
            Lockr.set(email_id, [{name: $('#txt-name').val(), place: $('#txt-place').val(), mobile: $('#txt-mobile').val()}]);
            mainView.router.loadPage('q1.html');
        }
    })
});