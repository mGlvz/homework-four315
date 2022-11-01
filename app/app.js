function changeRoute(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#","");
    // console.log(hashTag + " " + pageID);
    if(pageID != ""){
    $.get(`pages/${pageID}/${pageID}.html`, function(data){
        // console.log("data" + data);
        $("#app").html(data);
    })
  }else{
    $.get(`pages/home/home.html`, function(data){
        // console.log("data" + data);
        $("#app").html(data);
    })
  }
} 

function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

function initListener(){
    $(".bars").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });

    $(".links a").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").removeClass("active");
    });
}

function initSubmitListener (){
    $("#submit").click(function(e){
        e.preventDefault();
        let username = $("#username").val();
        let password = $("#password").val();
        console.log("inputs" + username + " " + password);
    });

    $("#edit").click(function(e){
        e.preventDefault();
        let userObj = {
            username: "Monica",
            password: "mypassword"
        };
        console.log(userObj);
        $("#username").val(userObj.username);
        $("#password").val(userObj.password);
        // console.log("inputs" + username + " " + lastname);
    });
}


$(document).ready(function(){
    initURLListener();
    initListener();
    initSubmitListener();
});