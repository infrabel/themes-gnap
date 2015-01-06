jQuery(function ($) {
    var isIos = (/iP(hone|od|ad)/.test(window.navigator.userAgent));
    var isAndroid = /Android/i.test(window.navigator.userAgent);

    //reproduces the method in chosen.js. If chosen changes, change this too.
    var browser_is_supported = function () {
        if (window.navigator.appName === 'Microsoft Internet Explorer') {
            return document.documentMode >= 8;
        }

        if (/iP(od|hone)/i.test(window.navigator.userAgent)) {
            return false;
        }

        if (isAndroid) {
            if (/Mobile/i.test(window.navigator.userAgent)) {
                return false;
            }
        }

        return true;
    };

    //input mask does not work on Android devices
    if (!isAndroid) {
        if (jQuery().mask) {
            $.mask.definitions['~'] = '[+-]';
            $('.input-mask-time').mask('99:99');
            $('.input-mask-date').mask('99-99-9999');
            $('.input-mask-product').mask('a*-999-a999', { placeholder: ' ', completed: function () { alert('You typed the following: ' + this.val()); } });
        }
    }

    if (!browser_is_supported()) {
        //because ace.css has a rule that makes all chosen-select visibility:hidden. 
        //It doesn't know the browser supported method from chosen.js.
        $('.chosen-select').removeClass('chosen-select');
    } else {
        if (jQuery().chosen) {
            $('.chosen-select').chosen();
        }

        //fix width of the single chosen and multi chosen ddl in form use
        $('.chosen-container.chosen-container-single').attr('style', '');
        $('.chosen-container.chosen-container-single').addClass('col-xs-10 col-sm-5');
        $('.chosen-container.chosen-container-multi').attr('style', '');
        $('.chosen-container.chosen-container-multi').addClass('col-xs-10 col-sm-5');
    }

    // TODO: Test on mobile devices
    if (jQuery().select2) {
        $('.select2').select2({
            allowClear: true,
            shouldFocusInput: function() { return false; }
        });
    }

    //menu-min bug - Only in safari - ('hover' transformed in 'tap' event)
    // - Cannot 'tap' on link. 
    //      Cannot solve the problem because behaviour of safari navigator.
    // - When 'taping' on a link, open an other link before the right link. bug with scroll on the page.
    //      Cannot solve the problem because behaviour of safari navigator.
    //Workaround => hide the button (arrow) which minified the menu.
    //This is done with the isIos check in the code
    if (isIos) {
        $('#sidebar-collapse').attr('style', 'display:none;');
    }

    //Used for tooltip
    if (jQuery().tooltip) {
        $('[data-rel=tooltip]').tooltip({ container: 'body' });
    }

    //Date / time picker 
    if (jQuery().datepicker) {
        $('.date-picker').datepicker({ autoclose: true }).next().on(ace.click_event, function () {
            $(this).prev().focus();
        });
    }

    var today = new Date();
    if (jQuery().daterangepicker) {
        $('.date-range-picker').daterangepicker(
        {
            format: 'DD-MM-YYYY',
            startDate: '' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear(),
            endDate: '' + (today.getDate() + 5) + '-' + (today.getMonth() + 1) + '-' + today.getFullYear(),
        }).prev().on(ace.click_event, function () {
            $(this).next().focus();
        });
    }

    if (jQuery().timepicker) {
        $('.time-picker').timepicker({
            minuteStep: 1,
            showSeconds: false,
            showMeridian: false,
            defaultTime: false
        }).next().on(ace.click_event, function () {
            $(this).prev().focus();
        });
    }

    ////////////////////////////////////////////////////////////

    //find hovers and add click event
    $('.sidebar .nav-list').on('click', 'li', function () {
        var menumin = $(this).closest('.menu-min');
        if (menumin.length === 0)
            return;

        $(this).first('.menu-text').toggle();
        $(this).first('.submenu').toggle();
    });

    $('.form-search .icon-search').on('click', function () {
        if ($('.nav-search-input').val() == '') {
            $('.nav-search-input').focus();
        } else {
            $('.nav-search-input').parents('.form-search').submit();
        }
    });

    // Confirmation Event  //////////////////////////////////////////////////////////
    $('.confirm-delete').on(ace.click_event, function (event) {
        event.preventDefault();

        var message = $(this).attr('confirm-message');

        if (!message) {
            message = 'Are you sure?';
        }

        bootbox.confirm(message, function (result) {
            if (result) {
                window.location.href = event.currentTarget.href;
            }
        });

        return false;
    });


    // Local storage //////////////////////////////////////////////////////////
    var sidebarPosition = 'sidebar-position';
    var fixed = 'fixed';
    var collapsed = 'collapsed';

    loadSidebarLocalStorage();

    // to know the position of the sidebar (collapsed or not)
    $('#sidebar-collapse').on('click', function () {
        var state = getSidebarSate();

        if (state == collapsed) {
            state = fixed;
        } else if (state == fixed) {
            state = collapsed;
        }

        setSidebarLocalStorage(state);
        loadSidebarLocalStorage();
    });

    function getSidebarSate() {
        var sidebar = $('#sidebar');

        return sidebar.hasClass('menu-min')
            ? collapsed
            : fixed;
    };

    function collapseSidebar() {
        var sidebar = $('#sidebar');
        var icon = $('#sidebar-collapse [class*="icon-"]');
        var collapseIcon = icon.attr('data-icon1');//the icon for expanded state
        var expandIcon = icon.attr('data-icon2');//the icon for collapsed state

        sidebar.addClass('menu-min');
        icon.addClass(expandIcon);
        icon.removeClass(collapseIcon);
    };

    function expandSidebar() {
        var sidebar = $('#sidebar');
        var icon = $('#sidebar-collapse [class*="icon-"]');
        var collapseIcon = icon.attr('data-icon1');//the icon for expanded state
        var expandIcon = icon.attr('data-icon2');//the icon for collapsed state

        sidebar.removeClass('menu-min');
        icon.removeClass(expandIcon);
        icon.addClass(collapseIcon);
    };

    function loadSidebarLocalStorage() {
        try {
            var result = getLocalStorage(sidebarPosition);

            if (result) {
                if (result === fixed) {
                    expandSidebar();
                } else {
                    collapseSidebar();
                }
            } else {
                setSidebarLocalStorage(getSidebarSate());
            }
        }
        catch (er) { }
        return false;
    }

    function setSidebarLocalStorage(value) {
        try {
            localStorage.setItem(sidebarPosition, value);
        }
        catch (er) { }
        return false;
    };

    function getLocalStorage(name) {
        try {
            return localStorage.getItem(name);
        }
        catch (er) { }
        return false;
    };
});