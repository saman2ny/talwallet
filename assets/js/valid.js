$(function() {
    $("#contactForm").validate({
        rules: {
            firstName: {
                required: !0,
                minlength: 2,
                lettersonly: !0
            },
            email: {
                required: !0,
                minlength: 6,
                email: !0

            },
            mobile: {
                required: !0,
                digits: !0,
                minlength: 10,
                maxlength: 15
            },
            message: {
                required: !0,
                minlength: 6
            }
        },
        messages: {
            firstName: {
                required: "Please enter your name",
                minlength: "Minimum 2 characters",
                lettersonly: "Only letters please!"
            },
            email: {
                required: "Please enter your email address",
                minlength: "Minimum 6 characters",
                email: "That's an invalid email"
            },
            mobile: {
                required: "Please enter your phone number",
                digits: "Only digits (no spaces)",
                minlength: "Minimum 10 characters",
                maxlength: "Maximum 15 characters"
            },
            message: {
                required: "Please enter your message",
                minlength: "Minimum 6 characters"
            }
        },
        success: function(e) {
            e.addClass("valid").text("Perfect!")
        },
        submitHandler: function(e) {
            var t = $(e),
                i = t.attr("action"),
                a = t.attr("method"),
                n = {};
            return $(t).find('[name="submit"]').html('<i class="fa fa-circle-o-notch fa-spin fa-fw"></i> Sending...'), t.find("[name]").each(function(e, t) {
                var i = $(this),
                    a = i.attr("name"),
                    t = i.val();
                n[a] = t
            }), $.ajax({
                url: i,
                type: a,
                data: n,
                success: function(e) {
                    "success" == e.type ? ($("#contactForm").before("<div class='alert alert-success' role='alert'><a href='#' class='close' data-dismiss='alert'>&times;</a>" + e.text + "</div>"), $(t).each(function() {
                        this.reset(), $(this).find('[name="submit"]').html('<i class="fa fa-paper-plane fa-fw"></i> Send')
                    }).find(".valid").each(function() {
                        $(this).remove("label.valid")
                    })) : "error" == e.type && ($("#contactForm").before("<div class='alert alert-danger' role='alert'><a href='#' class='close' data-dismiss='alert'>&times;</a>" + e.text + "</div>"), $(t).find('[name="submit"]').html('<i class="fa fa-paper-plane fa-fw"></i> Send'))
                }
            }), !1
        }
    });
});

$(function() {
    $("#sendermail").validate({
        rules: {
              email: {
                required: !0,
                minlength: 6,
                email: !0

            }

        },
        messages: {
               email: {
                required: "Please enter your email address",
                minlength: "Minimum 6 characters",
                email: "That's an invalid email"
            }
    
        },
        success: function(e) {
            e.addClass("valid").text("Perfect!")
        },
        submitHandler: function(e) {
            var t = $(e),
                i = t.attr("action"),
                a = t.attr("method"),
                n = {};
            return $(t).find('[name="submit"]').html('<i class="fa fa-circle-o-notch fa-spin fa-fw"></i> Sending...'), t.find("[name]").each(function(e, t) {
                var i = $(this),
                    a = i.attr("name"),
                    t = i.val();
                n[a] = t
            }), $.ajax({
                url: i,
                type: a,
                data: n,
                success: function(e) {
                    "success" == e.type ? ($("#sendermail").before("<div class='alert alert-success' role='alert'><a href='#' class='close' data-dismiss='alert'>&times;</a>" + e.text + "</div>"), $(t).each(function() {
                        this.reset(), $(this).find('[name="submit"]').html('<i class="fa fa-paper-plane fa-fw"></i> Send')
                    }).find(".valid").each(function() {
                        $(this).remove("label.valid")
                    })) : "error" == e.type && ($("#sendermail").before("<div class='alert alert-danger' role='alert'><a href='#' class='close' data-dismiss='alert'>&times;</a>" + e.text + "</div>"), $(t).find('[name="submit"]').html('<i class="fa fa-paper-plane fa-fw"></i> Send'))
                }
            }), !1
        }
    });
});