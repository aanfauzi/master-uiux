      
        function validate_form(form) {
            var er = 0;
            form.find(".is-invalid").removeClass("is-invalid");
            form.find(".url_invalid").removeClass("url_invalid");
            form.find(".email_invalid").removeClass("email_invalid");

            form.find(".check_url").each(function () {
                if (jQuery(this).val() || jQuery(this).is(".required")) {
                    if (!jQuery(this).val().match(/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|studio|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/)) {
                        if (jQuery(this).val().indexOf("ailto:") > 0) {

                        } else {
                            er = 1;
                            jQuery(this).addClass("is-invalid").addClass("url_invalid");
                        }
                    }
                }
            });

            form.find(".check_https_url").each(function () {

                var val = jQuery(this).val();

                if ( val || jQuery(this).is(".required")) {
                    
                    if( val.substr(0, 8) != 'https://' ) {
                        jQuery(this).addClass("is-invalid").addClass("url_invalid");
                    }

                }
            });            

            form.find(".check_email").each(function () {
                if (!jQuery(this).val().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                    er = 1;
                    jQuery(this).addClass("is-invalid").addClass("email_invalid");
                }
            });

            if (jQuery("#upload_cover").length) {
                if (!jQuery("#upload_cover").val().length && jQuery(".upload-image__cover__overlay").css("background-image") !== "none") {
                    jQuery("#cover_input_feedback").hide();
                    jQuery(".upload-image__cover__overlay").removeClass("invalid-img");
                } else {
                    if (!jQuery("#upload_cover").val().length) {
                        jQuery("#cover_input_feedback").show();
                        jQuery(".upload-image__cover__overlay").addClass("invalid-img");
                        er = 1;
                    } else {
                        if (parseInt(jQuery(".upload-image__cover__overlay").attr("data-width")) < 1200) {
                            jQuery(".upload-image__cover__overlay").addClass("invalid-img");
                            jQuery("#cover_input_feedback").html("Cover images need to be at least 1200px wide").show();
                            er = 1;
                        } else {
                            jQuery("#cover_input_feedback").hide();
                            jQuery(".upload-image__cover__overlay").removeClass("invalid-img");
                        }
                    }
                }
            }

            if (jQuery("#preview_screenshot").length) {
                if (!jQuery("#preview_screenshot").val().length && jQuery(".upload-image__cover__overlay").css("background-image") !== "none") {
                    jQuery("#cover_input_feedback").hide();
                    jQuery(".upload-image__cover__overlay").removeClass("invalid-img");
                } else {
                    if (!jQuery("#preview_screenshot").val().length) {
                        jQuery("#cover_input_feedback").show();
                        jQuery(".upload-image__cover__overlay").addClass("invalid-img");
                        er = 1;
                    } else {
                    
                        if (parseInt(jQuery(".upload-image__cover__overlay").attr("data-width")) < 1200 || parseInt(jQuery(".upload-image__cover__overlay").attr("data-height")) < 900) {
                            jQuery(".upload-image__cover__overlay").addClass("invalid-img");
                            jQuery("#cover_input_feedback").html("Cover images need to be at least 1200px wide and 900px tall").show();
                            er = 1;

                        } else if ( jQuery(".upload-image__cover__overlay").attr("data-size") > 300 ) {
                            jQuery(".upload-image__cover__overlay").addClass("invalid-img");
                            jQuery("#cover_input_feedback").html("Cover images must not be larger than 300kb").show();
                            er = 1;

                        } else {
                            jQuery("#cover_input_feedback").hide();
                            jQuery(".upload-image__cover__overlay").removeClass("invalid-img");
                        }
                    }
                }
            }

            if (jQuery("#upload_avatar").length) {
                if (!jQuery("#upload_avatar").val().length && jQuery(".upload-image__avatar").css("background-image") !== "none") {
                    jQuery("#avatar_input_feedback").hide();
                    jQuery(".upload-image__avatar").removeClass("invalid-img");
                } else {
                    if (!jQuery("#upload_avatar").val().length) {
                        jQuery("#avatar_input_feedback").show();
                        jQuery(".upload-image__avatar").addClass("invalid-img");
                        er = 1;
                    } else {
                        if (parseInt(jQuery(".upload-image__avatar").attr("data-width")) < 300) {
                            jQuery("#avatar_input_feedback").html("Avatar images need to be at least 300px wide").show();
                            jQuery(".upload-image__avatar").addClass("invalid-img");
                            er = 1;
                        } else {
                            jQuery("#avatar_input_feedback").hide();
                            jQuery(".upload-image__avatar").removeClass("invalid-img");
                        }
                    }
                }
            }

            if (jQuery("#theme_file").length) {
                if (jQuery("#theme_file_label a").length) {
                    jQuery("#theme_input_feedback").hide();
                } else {
                    if (!jQuery("#theme_file").val().length) {
                        jQuery("#theme_input_feedback").show();
                        er = 1;
                    } else {
                        if (parseInt(jQuery("#theme_file_label").attr("data-size")) > 200000) {
                            jQuery("#theme_input_feedback").html("The maximum size of uploaded files is 200MB").show();
                            er = 1;
                        } else {
                            jQuery("#theme_input_feedback").hide();
                        }
                    }
                }
            }


            form.find(".required, input[required], select[required]").each(function () {
                if (jQuery(this).is("select")) {
                    if (jQuery(this).is("[multiple]") == false) {
                        if (!jQuery(this).val() || jQuery(this).val() == "" || jQuery(this).val() < 0) {
                            //alert("bbbb");
                            jQuery(this).addClass("is-invalid");
                            jQuery(this).parent().find(".customSelect").addClass("is-invalid");
                        }
                    } else {
                        if (!jQuery(this).find("option:selected").length) {
                            jQuery(this).addClass("is-invalid");
                            jQuery(this).parent().find(".customSelect").addClass("is-invalid");
                        }
                    }
                } else if (jQuery(this).is('[type="checkbox"]') || jQuery(this).is('[type="radio"]')) {
                    if (!form.find('input[name="' + jQuery(this).attr("name") + '"]:checked').length) {
                        form.find('input[name="' + jQuery(this).attr("name") + '"]').addClass("is-invalid");
                    }
                } else if (jQuery(this).find('input:file').length && !jQuery(this).find('input:file').val()) {
                    jQuery(this).addClass("is-invalid");
                } else if ((jQuery(this).is("input, select, textarea") && !jQuery(this).val()) || jQuery(this).is(".is-invalid_exists")) {
                    //er = 1;
                    if (!jQuery(this).is("#user_core_password") && !jQuery(this).is("#user_core_password_confirm2")) {
                        jQuery(this).addClass("is-invalid");
                        jQuery(this).parent().find(".customSelect").addClass("is-invalid");
                    }
                }
            });
            form.find(".is-invalid_exists").each(function () {
                er = 1;
                jQuery(this).addClass("is-invalid");
            });
            var passok = 1;
            var passmatch = 1;
            form.find("#user_core_password").each(function () {
                if (form.find("#user_core_password_confirm2").length && form.find("#user_core_password").val() != form.find("#user_core_password_confirm2").val()) {
                    passmatch = 0;
                }
                var validated = true;
                if (jQuery(this).val().length < 8) {
                    validated = false;
                }
                //                var res = /[a-z]/;
                //                if (!res.test(jQuery(this).val())) {
                //                    validated = false;
                //                }
                //                var res = /[A-Z]/;
                //                if (!res.test(jQuery(this).val())) {
                //                    validated = false;
                //                }
                //                var res = /[0-9]/;
                //                if (!res.test(jQuery(this).val())) {
                //                    validated = false;
                //                }
                if (validated == true) {
                } else {
                    passok = 0;
                }
                if (!passok || !passmatch) {
                    form.find("#user_core_password").addClass("is-invalid");
                    form.find("#user_core_password_confirm2").addClass("is-invalid");
                } else {
                    form.find("#user_core_password").removeClass("is-invalid");
                    form.find("#user_core_password_confirm2").removeClass("is-invalid");
                }
            });
            if (form.find(".is-invalid").length) {
                er = 1;
            }
            if (!passmatch || !passok) {
                if (!passok) {
                    jQuery("#pass_input_feedback").html("Password must be at least 8 characters in length.");
                } else {

                }
            }
            if (form.find(".email_exists").length) {
                form.find(".email_exists").addClass("is-invalid");
                jQuery("#email_input_feedback").html("That email is already registered.");
            }
            if (form.find(".username_exists").length) {
                jQuery("#email_input_feedback").html("That user name is already registered.");
            }
            if (form.find(".url_invalid").length) {
            }
            if (form.find(".email_invalid").length) {
                jQuery("#email_input_feedback").html("Please input a valid email address.");
            }
            if (er) {
                //form.find(".is-invalid").removeClass("is-invalid");
            }
            if (form.find(".terms").length && !form.find(".terms:checked").length) {
                er = 1;
            }
            if (jQuery("#captcha_completed").val() == 0) {
                er = 1;
            } else {

            }



            if (!er) {
                form.find(".alert-danger").slideUp();
            } else {
                if (form.find(".is-invalid:first").length) {
                    jQuery('html, body').animate({
                        scrollTop: form.find(".is-invalid:first").offset().top - 80
                    }, 1000);
                }
            }
            return er;
        }

        jQuery(document).ready(function () {
            jQuery(".show_if_seller").remove();
            jQuery("form.register p").each(function () {
                jQuery(this).find('input[type="text"], input[type="email"], input[type="password"]').addClass("form-control").prop("required", true);
                jQuery(this).append('<div class="invalid-feedback">This field is required</div>');
            });
            jQuery("form.register").unbind("submit").submit(function (e) {
                var er = validate_form(jQuery("form.register"));
                if (er) {
                    e.stopPropagation();
                    e.preventDefault();
                    return false;
                } else {
                    return true;
                }
            });

            jQuery(".fixed_price").change(function () {
                if (parseInt(jQuery(this).attr("min"))) {
                    if (parseInt(jQuery(this).attr("min")) > parseInt(jQuery(this).val())) {
                        jQuery(this).val(parseInt(jQuery(this).attr("min")));
                    }
                }
                var pr = parseFloat(jQuery(this).val());
                jQuery(this).val(pr.toFixed(2));
            });
            jQuery(".fixed_price").change();

            jQuery(".search-box select").change(function () {
                jQuery(this).closest("form").submit();
            });
        });
