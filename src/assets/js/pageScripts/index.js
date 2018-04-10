window.openTestimonial = function (sectionId) {
    var sections = document.querySelectorAll('.protfolio-inner-section');
    sections.forEach(function (section) {
        section.classList.add('testhide','hide');
    });
    
    var arrowSections = document.querySelectorAll('.arrow_box');
    arrowSections.forEach(function (section) {
        section.classList.remove('testactive');
    });

    var showSection = document.getElementById(sectionId);
    showSection.classList.remove('testhide','hide');
    
    var activeImg = document.getElementById(`${sectionId}-img`);
    activeImg.classList.add('testactive');
}
window.submitEbookData = function (e) {
    e.preventDefault(), jQuery("#ebook-error").html("");
    var o = jQuery("#ebook-email").val(),
        t = jQuery("#ebook-name").val();
    return "" == o || "" == t ? void jQuery("#ebook-error").html("Please fill in the required fields") : void jQuery.ajax({
        url: "js/ebookhandler.php",
        type: "POST",
        data: {
            email: o,
            name: t,
            group_id: 4043919
        },
        beforeSend: function() {
            jQuery("#ebook-submit").html("Preparing your course ... ")
        },
        success: function(e) {
            var a = JSON.parse(e);
            a.error ? (jQuery("#ebook-error").html("There were some errors in the data you provided"), jQuery("#ebook-submit").html('Get Access<i class="material-icons">arrow_downward</i>')) : (jQuery("#ebook-submit").fadeOut(), -1 != window.location.href.indexOf("outgrow.co") && sendNotification(o, t), setTimeout(function() {
                window.location.href = "http://resources.outgrow.co/courses/lead-generation-with-calculators/ebook"
            }, 200))
        },
        error: function(e) {
            jQuery("#ebook-error").html("We are a little backed right now. Please try again."), jQuery("#ebook-submit").html('Get Access<i class="material-icons">arrow_downward</i>')
        }
    })
}

window.sendNotification = function (e, o) {
    jQuery.ajax({
        url: "js/mailer.php",
        data: {
            email: e,
            name: o
        },
        method: "POST",
        success: function(e) {
            console.log(e)
        },
        error: function(e) {
            console.log(e)
        }
    })
}

window.runTimeout = function() {
    setTimeout(function () {
        jQuery('.content-loader').addClass('hide');   
    }, 5000);
    setTimeout(function () {
        console.log('Loading timeout calculate height');
        calculateMinHeight();
    }, 500);
}

window.display = function (url) {
    document.getElementById('og-iframe').src = url;
    jQuery('#og-iframe').addClass('iframeHeight')
    calculateMinHeight();
    
    setTimeout(calculateMinHeight, 2000);
}


jQuery.noConflict();
jQuery.material.init();

jQuery(document).ready(function () {
    calculateMinHeight();

    jQuery('.calc-links a').on('click', function () {
        jQuery('a').removeClass('active');
        jQuery(this).addClass('active');
    });

    var iframes = iFrameResize({
        log: false,
        autoResize: true,
        enablePublicMethods: true,
        checkOrigin: false,
    }, '#og-iframe');

    var url = setLoginSignup();

    console.log(url);

    jQuery('#btnBuildCalc1 > a').prop('href', url);

    runTimeout();
    // initTestimonial();
})