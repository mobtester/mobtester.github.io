//what browser
var cssFix = function(){
$('html').removeClass('opera9');
var u = navigator.userAgent.toLowerCase(),
is = function(t){return (u.indexOf(t)!=-1)};
$("html").addClass([
	(!(/opera|webtv/i.test(u))&&/msie (\d)/.test(u))?('ie ie'+RegExp.$1)
	:is('firefox/2')?'gecko ff2'
	:is('firefox/3')?'gecko ff3'
	:is('gecko/')?'gecko'
	:is('opera/')?'opera'+Math.floor(window.opera.version())
	:is('konqueror')?'konqueror'
	:is('applewebkit/')?'webkit safari'
	:is('mozilla/')?'gecko':'',
	(is('x11')||is('linux'))?' linux'
	:is('mac')?' mac'
	:is('win')?' win':''
].join(''));
}();
//end what browser
$(window).load(function () {

	$(".formCreateProfile .deleteLine").hover(
		function () {
			$(this).find(".linkDeleteBlock").show();
		}, 
		function () {
			$(this).find(".linkDeleteBlock").hide();
		}
	);
	
    function pageHeight() {
        var contentHeight = $("#Wrap").height();
        var windowHeight = $(window).height();
        if (contentHeight < windowHeight) {
            $(".modal-backdrop").height(windowHeight);
        }
        else {
            $(".modal-backdrop").height(contentHeight);
        }
    };
    
    pageHeight();
    
    /* start fix block */
    var elOffsetTop = $(".fixBl").offset(),
        winHeight = $(window).height(),
        docHeight = $(document).height(),
        timerScroll,
        pageScrollTop;
    
    $(window).bind('scroll',function () {
        clearTimeout(timerScroll);
        timerScroll = setTimeout( refreshStopScroll , 10 );
        
        var scrollTop = $(document).scrollTop();
        
        if (scrollTop > 60) {
            $(".socialButtonFix").addClass("fixed");
        } else if (scrollTop < 60) {
            $(".socialButtonFix").removeClass("fixed");
        }
    });
    var refreshStopScroll = function () { 
        pageScrollTop = $(document).scrollTop();
        fixBlock(".fixBl");
    };
    $(window).resize(function () {
        winWidth = $(window).width(),
        winHeight = $(window).height(),
        docHeight = $(document).height();
        fixBlock(".fixBl");
    });
    
    function fixBlock(el) {
        var elHeight = $(el).height(),
            sendMassegeHeight = $(".orderSendMessage").height(),
            bottomHeight = docHeight-sendMassegeHeight-510;
        
        if (elHeight+60>winHeight) {
            return false
        } else if(pageScrollTop<elOffsetTop.top-25){
            $(el).removeClass("fixBlActive fixBlBottom");
        }
        
        if (bottomHeight<=pageScrollTop+elHeight) {
            $(el).removeClass("fixBlActive");
            $(el).addClass("fixBlBottom");
        } else if(pageScrollTop>elOffsetTop.top-25) {
            $(el).addClass("fixBlActive");
            $(el).removeClass("fixBlBottom");
        };
    }
    
    //fixBlock(".fixBl");
    /* end fix block */
    
    $(".faqList > li").click(function () {
       if ($(this).hasClass("open")) {
           setTimeout(function () {
               fixBlock(".fixBl");
           }, 10);
           $(this).removeClass("open");
       } else {
           $(".faqList > li").removeClass("open");
           setTimeout(function () {
               fixBlock(".fixBl");
           }, 10);
           $(this).addClass("open");
       }
       return false;
    });
    
    $(".myLessons .btn").click(function () {
        return false;
    });
    
    $(".myLessons .hover").click(function () {
        if ($(this).hasClass("openLesson")) {
            $(this).removeClass("openLesson").next().find(".myLessonSubMenu").addClass("myLessonSubMenuHide");
        } else {
            $(this).addClass("openLesson").next().find(".myLessonSubMenu").removeClass("myLessonSubMenuHide");
        }
    });
    
    $(".screenSearchInp").click(function () {
        if ($(".screenSearchMenuCity").is(":visible")) {
            $(".screenSearchMenu").hide();
        } else {
            $(".screenSearchMenu").show();
        }
    });
    
    $(".screenSearchMenuCity > li").click(function() {
        var city = $(this).text();
        $(".screenSearchInp").find("span").html(city);
        $(".screenSearchMenu").hide();
        return false; 
    });

    $(".mfShow, .mfHide").click(function(){
        var hc = $(this).parent().parent();
        if(hc.hasClass("messageFormOpen")){
            hc.removeClass("messageFormOpen");
        } else {
            hc.addClass("messageFormOpen");
        }
        return false;
    });

    $("#showAllFilter").click(function(){
        var hc = $(this).prev().parent();
        if(hc.hasClass("allFilterOpen")){
            $(this).html("<span>Все фильтры</span> ↓");
            hc.removeClass("allFilterOpen");
        } else {
            $(this).html("<span>Свернуть</span> ↑");
            hc.addClass("allFilterOpen");
        }
        return false;
    });

    $(".nameLink > .icPencil").on("click", function(){
        var hc = $(this).parent().parent();
        hc.addClass("editFieldMode");
        $(this).parent().next().focus();
        return false;
    });
    $(".editField").on("click", function(){
        event.stopPropagation();
    });
    $(".labelList label").on("click", function() {
        if ($(this).hasClass("labelOther")) {
            $(this).next("textarea").addClass("labelOtherVisible");
        } else {
            $(".labelList").find("textarea").removeClass("labelOtherVisible");
        }
    });

    $(".searchBoxBl").on("click", ".underlineDashed", function(){
        var currLanguege = $(this).text();
        $("#autocomplete_languages").val(currLanguege);
        return false
    });

    $(".languageTutor > .underlineDottedGray").on("click", function(){
        $(this).parent().addClass("languageTutorOpen");
        return false
    });

    $("#filter_list").keyup(function(){
 
        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;
 
        // Loop through the comment list
        $(".filterList li").each(function(){
 
            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
 
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                //count++;
            }
        });
 
        // Update the count
        //var numberItems = count;
        //$("#filter-count").text("Number of Comments = "+count);
    });

    $("#checkAllList input").on("change", function(){
        if ($(this).hasClass("allChecked")) {
            console.log("allChecked");
            $(this).removeClass("allChecked");

            $(".filterList li input").each(function(){
                $(this).prop( "checked", false );
            });
        } else {
            console.log("NOallChecked");
            $(this).addClass("allChecked");

            $(".filterList li input").each(function(){
                $(this).prop("checked", true);
            });
        }
        checkCount();
    });

    $(".tabsGray > li").on("click", function(){
        $(this).parent().find("li").removeClass("current");
        $(this).addClass("current");
    });

    $("#show_learner_info").on("click", function(){
        $(this).hide();
        $("#hide_learner_info, #learner_info").show();
        return false;
    });
    $("#hide_learner_info").on("click", function(){
        $(this).hide();
        $("#show_learner_info").show();
        $("#learner_info").hide();
        return false;
    });

    $("#local_lesson").on("click", function(){
        $("#local_lesson_bl").show();
        $("#skype_lesson_bl").hide();
        return false;
    });
    $("#skype_lesson").on("click", function(){
        $("#local_lesson_bl").hide();
        $("#skype_lesson_bl").show();
        return false;
    });

    $("#tutor_lesson").on("click", function(){
        $("#home_lesson_address").hide();
        $(".tutor_lesson_address").show();
        return false;
    });

    $("#home_lesson").on("click", function(){
        $("#home_lesson_address").show();
        $(".tutor_lesson_address").hide();
        return false;
    });

    var checkFlag = [];

    function checkCount() {
        var checkCountNumber = 0;

        $(".filterList li input").each(function(i){
            if($(this).is(":not(:checked)")){
                checkFlag[i] = false;
            }
            else {
                checkFlag[i] = true;
                checkCountNumber++;
            }
        });
        if (checkCountNumber === 1) {
            $("#filter-count").text("Пригласить "+checkCountNumber+" друга");
        } else if (checkCountNumber > 1) {
            $("#filter-count").text("Пригласить "+checkCountNumber+" друзей");
        } else {
            $("#filter-count").text("Пригласить друзей");
        };
    }

    $(".filterList li input").on("click", function(){
        checkCount();
        $.each(checkFlag, function( index, value ) {
            if (checkFlag[index] === false) {
                $("#checkAllList input").removeClass("allChecked").prop( "checked", false );
                return false
            } else {
                $("#checkAllList input").addClass("allChecked").prop( "checked", true );
            }
        });
    });

});