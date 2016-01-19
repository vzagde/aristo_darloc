// Initialize your app
// ********* Do not remove dummy_var from any where ********* //
var base_url = "http://192.168.1.15/newsroom-backend/";
var Timer;
var email_id = '';
var uniq_id = '';
var q1,q2,q3,q4 = '';
var a1,a2,a3,a4 = '';
var t1,t2,t3,t4 = 0;

var dummy_var = 0;
var myApp = new Framework7({
    material: true,
    materialPageLoadDelay: 200,
    sortable: false,
    swipeout: false,
    //init: false
});


// function store_que_and(q, a, page_name, t){
//     Lockr.set(uniq_id+q, [{que: q, ans: a, time: t, email: email_id}]);
//     mainView.router.loadPage(page_name);
// }

// Export selectors engine
var $$ = Dom7;
var toast = myApp.toast();
// Add view
var mainView = myApp.addView('.view-main', {
    domCache: false
});


myApp.onPageInit('upload_1', function (page) {

    $('.upload_button').click(function(e){
        var data = Lockr.getAll();
        $.each(data , function(index, val) {
            console.log(val);
            if (val.length == 1) {
                $.ajax({
                    url: base_url+'index.php/api1/get_userdata',
                    type: 'POST',
                    data: {name: val[0].name, email: val[0].email, mobile: val[0].mobile, },
                    success: function(data){
                        console.log(data);
                    }
                })
                .fail(function() {
                    toast.show("Ulable to update data Plaese check your internet connection");
                });
            } else if (val.length == 4) {
                for (var i = 0; i < 4; i++) {
                    $.ajax({
                        url: base_url+'index.php/api1/que_ans',
                        type: 'POST',
                        data: {email: val[i].email, que: val[i].que, ans: val[i].ans, time: val[i].time,},
                        success: function(data){
                            console.log(data);
                        }
                    })
                    .fail(function() {
                        toast.show("Ulable to update data Plaese check your internet connection");
                    });
                };
            } 
        });        
    });

});


myApp.onPageInit('question_11', function (page) {

    $('.q11_button').click(function(e){
        if(!$('#q11_answer').val()) {
            toast.show("Please enter an answer");
            return false;
        }else{
            dummy_var = 1;
            var t = $('.n').text().slice(2,4);
            q1 = $('.q').text();
            a1 = $('#q11_answer').val();
            t1 = t;
            mainView.router.loadPage('q12.html');
        }
    });

  Timer = new radialTimer();
  Timer.init("q11_timer", 60, function(){mainView.router.load({url:'gameover.html'})});
});

myApp.onPageInit('question_12', function (page) {

    $('.q12_button').click(function(e){
        if(!$('#q12_answer').val()) {
            toast.show("Please enter an answer");
            return false;
        }else{
            dummy_var = 1;
            var t = $('.n').text().slice(2,4);
            q2 = $('.q').text();
            a2 = $('#q12_answer').val();
            t2 = t;
            mainView.router.loadPage('q13.html');
        }
    });

    Timer = new radialTimer();
    Timer.init("q12_timer", 60, function(){mainView.router.load({url:'gameover.html'})});
});

myApp.onPageInit('question_13', function (page) {

    $('.q13_button').click(function(e){
        if(!$('#q13_answer').val()) {
            toast.show("Please enter an answer");
            return false;
        }else{
            dummy_var = 1;
            var t = $('.n').text().slice(2,4);
            q3 = $('.q').text();
            a3 = $('#q13_answer').val();
            t3 = t;
            mainView.router.loadPage('q14.html');
        }
    });

    Timer = new radialTimer();
    Timer.init("q13_timer", 60, function(){mainView.router.load({url:'gameover.html'})});
});


myApp.onPageInit('question_14', function (page) {

    $('.q14_button').click(function(e){
        if(!$('#q14_answer').val()) {
            toast.show("Please enter an answer");
            return false;
        }else{
            dummy_var = 1;
            var t = $('.n').text().slice(2,4);
            q3 = $('.q').text();
            a3 = $('#q14_answer').val();
            t3 = t;
            mainView.router.loadPage('q15.html');
        }
    });

    Timer = new radialTimer();
    Timer.init("q14_timer", 60, function(){mainView.router.load({url:'gameover.html'})});
});

myApp.onPageInit('question_15', function (page) {

    $('.q15_button').click(function(e){
        if(!$('#q15_answer').val()) {
            toast.show("Please enter an answer");
            return false;
        }else{
            dummy_var = 1;
            var t = $('.n').text().slice(2,4);
            q4 = $('.q').text();
            a4 = $('#q15_answer').val();
            t4 = t;
            Lockr.set(uniq_id, [{que: q1, ans: a1, time: t1, email: email_id}, {que: q2, ans: a2, time: t2, email: email_id}, {que: q3, ans: a3, time: t3, email: email_id}, {que: q4, ans: a4, time: t4, email: email_id}]);
            mainView.router.loadPage('thankyou.html');
        }
    });

    Timer = new radialTimer();
    Timer.init("q4_timer", 60, function(){mainView.router.load({url:'gameover.html'})});
});

myApp.onPageInit('gameover', function (page) {
    Timer = new radialTimer();
    Timer.init("go_timer", 5, function(){mainView.router.load({url:'index.html'})});
});

myApp.onPageInit('thankyou', function (page) {
    Timer = new radialTimer();
    Timer.init("ty_timer", 5, function(){mainView.router.load({url:'index.html'})});
});

myApp.onPageInit('userdetails', function (page) {
  Timer = new radialTimer();
  Timer.init("timer", 60, function(){mainView.router.load({url:'gameover.html'})});

  $('.user_details_check').click(function(e){
    var errors = 0;
    var phoneno = /^\d{10}$/;
    var em_val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if ($('#txt-email').val() == 'administrator') {
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
    }else if(!$('#txt-email').val()){
        toast.show("Please enter your email");
        return false;
    }else if(!$('#txt-email').val().match(em_val)){  
        toast.show("Please enter your valid email");
        return false;
    }else{
        dummy_var = 1;
        Lockr.set($('#txt-email').val(), [{name: $('#txt-name').val(), email: $('#txt-email').val(), mobile: $('#txt-mobile').val()}]);
        uniq_id = $('#txt-email').val()+$('#txt-mobile').val();
        email_id = $('#txt-email').val();
        mainView.router.loadPage('q1.html');
    }

  })

});