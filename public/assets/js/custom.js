// {{-- animated counter on scroll starts here --}}
class countUp {
    constructor(el) {
        this.el = el;
        this.setVars();
        this.init();
    }
    setVars() {
        this.number = this.el.querySelectorAll("[data-countup-number]");
        this.observerOptions = {
            root: null,
            rootMargin: "0px 0px",
            threshold: 0,
        };
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const end = parseFloat(
                    entry.target.dataset.countupNumber.replace(/,/g, "")
                );
                const decimals = this.countDecimals(end);
                if (entry.isIntersecting) {
                    this.iterateValue(entry.target, end, decimals);
                }
            });
        }, this.observerOptions);
    }
    init() {
        if (this.number.length > 0) {
            this.number.forEach((el) => {
                this.observer.observe(el);
            });
        }
    }
    iterateValue(el, end, decimals) {
        const start = 0;
        const duration = 2500;
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsedPercent = (timestamp - startTimestamp) / duration;
            const easedProgress = Math.min(
                this.easeOutQuint(elapsedPercent),
                1
            );
            let interimNumber = Math.abs(easedProgress * (end - start) + start);
            el.innerHTML = this.formatNumber(interimNumber, decimals);
            if (easedProgress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        // requestAnimationFrame returns DOMHighResTimeStamp as a callback (used as timestamp)
        window.requestAnimationFrame(step);
    }
    easeOutQuad(x) {
        return 1 - Math.pow(1 - x, 3);
    }
    easeOutQuint(x) {
        return 1 - Math.pow(1 - x, 5);
    }
    countDecimals(val) {
        if (Math.floor(val) === val) return 0;
        return val.toString().split(".")[1].length || 0;
    }
    formatNumber(val, decimals) {
        return val.toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
        });
    }
}
const dataModules = [...document.querySelectorAll('[data-module="countup"]')];
dataModules.forEach((element) => {
    element.dataset.module.split(" ").forEach(function() {
        new countUp(element);
    });
});
// {{-- animated counter on scroll ends here --}}


// contact validation
$("#contactForm").on("click", function() {
    var signInSuccess = {
        type: "success",
        title: "Thank you",
        text: "Celebrating your selection of us as your cricketing partner. We're honored to join you on your voyage through the world of fantasy cricket.",
    };
    // $.validator.addMethod("regExp_pan", function(value, element) {
    //     return this.optional(element) || /[a-zA-z]{5}\d{4}[a-zA-Z]{1}/.test(value);
    // }, "PAN Number Like ASDFQ4567G");
    $.validator.addMethod(
        "regExp_pan",
        function(value, element) {
            return (
                this.optional(element) ||
                /^([a-zA-Z']+(?: [a-zA-Z']+)?)$/.test(value)
            );
        },
        "Please enter atleast two characters are allowed"
    );

    // $.validator.addMethod("Exp_pan", function(value, element) {
    //     return this.optional(element) || /^([a-zA-Z']+(?: [a-zA-Z']+)?)$/.test(value);
    // }, "Please enter atleast two characters are allowed");

    $.validator.addMethod(
        "phone_regex",
        function(value, element) {
            return this.optional(element) || /[6-9][0-9]{9}$/.test(value);
        },
        "Please enter Valid Phone Number Format"
    );
    $.validator.addMethod(
        "email_regex",
        function(value, element) {
            return (
                this.optional(element) ||
                /^[-+.\w]{5,64}@[-.\w]{1,64}\.[-.\w]{2,3}$/.test(value)
            );
        },
        "Please enter a valid email address."
    );
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $(this).validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            name: "required",
            phone: "required",
            phone: "required",
            message: "required",
            email: "required",
            name: {
                required: true,
                regExp_pan: true,
                minlength: 3,
            },
            phone: {
                required: true,
                minlength: 10,
                maxlength: 10,
                phone_regex: true,
            },
            email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email_regex: "true",
            },
            message: {
                required: true,
                minlength: 20,
                maxlength: 200
            }
        },
        // Specify validation error messages
        messages: {
            phone: {
                required: "The phone field is required!",
                minlength: "Please enter 10 digits",
                // maxlength: "The phone field must 10 numbers",
            },
            email: {
                required: "The email field is required!",
            },
            name: {
                required: "The name field is required!",
                regExp_pan: "Please enter only characters",
                minlength: "Please enter atleast 3 characters",
            },
            message: {
                required: "The message field is required!",
            },
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function() {
            $("#contactForm").removeClass('d-block');
            $("#contactFormSuccess").addClass('d-block');
        },
    });
    $("button.confirm").on("click", function() {
        $("#contactFormSuccess").removeClass('d-block');
        $("#contactForm").addClass('d-block');
        $("#contactForm").find("input").val("");
        $("#contactForm").find("textarea").val("");
    });
});

// {{-- for empty text area starts here --}}
$("textarea").on("keydown", function(e) {
    var c = $("textarea").val().length;
    if (c == 0) return e.which !== 32;
});

// {{-- for empty space mail starts here --}}
$("input[type='email']").on("keydown", function(e) {
    var c = $("textarea").val().length;
    if (c == 0) return e.which !== 32;
});

// for input type number disable arrow keydown
var ar = new Array(38, 40);
$('input[name=phone]').keydown(function(e) {
    var key = e.which;
    if ($.inArray(key, ar) > -1) {
        e.preventDefault();
        return false;
    }
    return true;
});

// for input type number field max length  
$('input[name=phone]').keypress(function() {
    if (this.value.length == 10) {
        return false;
    }
});




// {{-- for nav active for header starts here --}}
var url = window.location;
$('.menu_links ul li a[href!="' + url + '"]').removeClass('active');
$('.menu_links ul li a').filter(function() {
    return this.href == url;
}).addClass('active');
// {{-- for nav active for header ends here --}}



// for ponits table tabs starts here
$(function() {
    $('.p_t_head a').on('click', function() {
        var pnts_tab_h_id = $(this).data('value');

        $('.p_t_head a').removeClass('active');
        $(this).addClass('active');

        $('.p_t_head ~ .pnts_tab_c').removeClass('active');
        $(pnts_tab_h_id).addClass('active');
    })
})
// for ponits table tabs ends here



// for faq only one active
$(function() {
    function checkWidth() {
        var windowWidth = $(window).width();
        if (windowWidth < 992) {
            // Perform actions for small screens
            $('#accordionExample2 .accordion-item:first .accordion-button').addClass('collapsed');
            $('#accordionExample2 .accordion-item:first #collapseseven').removeClass('show');


            $('.tp-faq-accordion .accordion-button').on('click', function() {
                // alert('entered');
                if ($(this).parents().hasClass('accordionExample')) {
                    $('#accordionExample2 .accordion-item .accordion-button').addClass('collapsed');
                    $('#accordionExample2 .accordion-item .accordion-collapse').removeClass('show');
                } else if ($(this).parents().hasClass('accordionExample2')) {
                    $('#accordionExample .accordion-item .accordion-button').addClass('collapsed');
                    $('#accordionExample .accordion-item .accordion-collapse').removeClass('show');
                }
            })
        }
    }

    // Run on page load
    checkWidth();

    // Run on window resize
    $(window).resize(checkWidth);
});