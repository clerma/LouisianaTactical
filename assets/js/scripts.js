        jQuery(".menu_side_button").on("click", function (e) {
            jQuery(this).parent().toggleClass("opened");
            e.preventDefault();
            return false;
        });
        jQuery('.sc_layouts_menu li[class*="image-"]').each(function () {
            var classes = jQuery(this).attr("class").split(" ");
            var icon = "";
            for (var i = 0; i < classes.length; i++) {
                if (classes[i].indexOf("image-") >= 0) {
                    icon = classes[i].replace("image-", "");
                    break;
                }
            }
            if (icon) {
                jQuery(this)
                    .find(">a")
                    .css("background-image", "url(" + TACTICOOL_STORAGE["theme_url"] + "trx_addons/css/icons.png/" + icon + ".png");
            }
        });
        jQuery(".menu_mobile .menu-item-has-children > a,.sc_layouts_menu_dir_vertical .menu-item-has-children > a").append('<span class="open_child_menu"></span>');
        jQuery(".sc_layouts_menu_mobile_button > a,.menu_mobile_button,.menu_mobile_description").on("click", function (e) {
            if (jQuery(this).parent().hasClass("sc_layouts_menu_mobile_button_burger") && jQuery(this).next().hasClass("sc_layouts_menu_popup")) {
                return;
            }
            jQuery(".menu_mobile_overlay").fadeIn();
            jQuery(".menu_mobile").addClass("opened");
            jQuery(document).trigger("action.stop_wheel_handlers");
            e.preventDefault();
            return false;
        });
        jQuery(document).on("keypress", function (e) {
            if (e.keyCode == 27) {
                if (jQuery(".menu_mobile.opened").length == 1) {
                    jQuery(".menu_mobile_overlay").fadeOut();
                    jQuery(".menu_mobile").removeClass("opened");
                    jQuery(document).trigger("action.start_wheel_handlers");
                    e.preventDefault();
                    return false;
                }
            }
        });
        jQuery(".menu_mobile_close, .menu_mobile_overlay").on("click", function (e) {
            jQuery(".menu_mobile_overlay").fadeOut();
            jQuery(".menu_mobile").removeClass("opened");
            jQuery(document).trigger("action.start_wheel_handlers");
            e.preventDefault();
            return false;
        });
        jQuery(".menu_mobile,.sc_layouts_menu_dir_vertical").on("click", "li a, li a .open_child_menu", function (e) {
            var $a = jQuery(this).hasClass("open_child_menu") ? jQuery(this).parent() : jQuery(this);
            if ($a.parent().hasClass("menu-item-has-children")) {
                if ($a.attr("href") == "#" || jQuery(this).hasClass("open_child_menu")) {
                    if ($a.siblings("ul:visible").length > 0) {
                        $a.siblings("ul").slideUp().parent().removeClass("opened");
                    } else {
                        jQuery(this).parents("li").eq(0).siblings("li").find("ul:visible").slideUp().parent().removeClass("opened");
                        $a.siblings("ul")
                            .slideDown(function () {
                                if (!jQuery(this).hasClass("layouts_inited") && jQuery(this).parents(".menu_mobile").length > 0) {
                                    jQuery(this).addClass("layouts_inited");
                                    jQuery(document).trigger("action.init_hidden_elements", [jQuery(this)]);
                                }
                            })
                            .parent()
                            .addClass("opened");
                    }
                }
            }
            if (!jQuery(this).hasClass("open_child_menu") && jQuery(this).parents(".menu_mobile").length > 0 && tacticool_is_local_link($a.attr("href"))) {
                jQuery(".menu_mobile_close").trigger("click");
            }
            if (jQuery(this).hasClass("open_child_menu") || $a.attr("href") == "#") {
                e.preventDefault();
                return false;
            }
        });