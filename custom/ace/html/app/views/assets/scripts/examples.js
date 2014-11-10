jQuery(function ($) {
    // Used for code highlighting
    if (typeof hljs !== 'undefined')
        hljs.initHighlightingOnLoad();

    // User for dialogs
    $('#bootbox-alert').on(ace.click_event, function () {
        bootbox.alert('Hello World!', function () {
        });
    });

    $('#bootbox-confirm').on(ace.click_event, function () {
        bootbox.confirm('Are you sure?', function (result) {
            if (result) {
                alert('You were sure!');
            } else {
                alert('You weren\'t sure!');
            }
        });
    });

    $('#bootbox-prompt').on(ace.click_event, function () {
        bootbox.prompt('What is your name?', function (result) {
            if (result === null) {
                alert('Prompt dismissed');
            } else {
                alert('Hi ' + result + '!');
            }
        });
    });


    $('#bootbox-options').on(ace.click_event, function () {
        bootbox.dialog({
            message: '<span class="bigger-110">I am a custom dialog with smaller buttons</span>',
            title: 'Custom Dialog',
            onEscape: function() {},
            buttons:
            {
                'success':
                 {
                     'label': '<i class="icon-ok"></i> Success!',
                     'className': 'btn-sm btn-success',
                     'callback': function () {
                         alert('Great Success!');
                     }
                 },
                'danger':
                {
                    'label': 'Danger!',
                    'className': 'btn-sm btn-danger',
                    'callback': function () {
                        alert('Uh Oh, Look Out!');
                    }
                },
                'click':
                {
                    'label': 'Something!',
                    'className': 'btn-sm btn-primary',
                    'callback': function () {
                        alert('Boo!');
                    }
                },
                'button':
                {
                    'label': 'Just a button...',
                    'className': 'btn-sm'
                }
            }
        });
    });

    // Used for notifications
    $('#gritter-default').on(ace.click_event, function () {
        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a default notification',
            // (string | mandatory) the text inside the notification
            text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et, nascetur ridiculus mus.',
            class_name: 'gritter-default'
        });

        return false;
    });

    $('#gritter-success').on(ace.click_event, function () {
        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a success notification',
            // (string | mandatory) the text inside the notification
            text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            class_name: 'gritter-success'
        });

        return false;
    });

    $('#gritter-error').on(ace.click_event, function () {
        $.gritter.add({
            title: 'This is a warning notification',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis neque id leo tincidunt, vel interdum tortor egestas. Quisque at massa sit amet nisl placerat euismod sit amet non leo. Suspendisse egestas, leo id scelerisque euismod, massa sapien feugiat mi, at pulvinar lorem est sit amet est.',
            class_name: 'gritter-error' 
        });

        return false;
    });

    $(".gritter-remove").on(ace.click_event, function () {
        $.gritter.removeAll();
        return false;
    });
    
    //forms elements////////////////////////////////////////////////////////////

    //for options, check following page http://rustyjeans.com/jquery-plugins/input-limiter
    $('textarea.limited').inputlimiter({
        boxId: 'limiterbox',
        boxAttach: false,
        remTextHideOnBlur: false,
        remText: '%n',
        limitTextShow: false
    });
   
    //file input
    $('#id-input-file-2').ace_file_input({
        no_file: 'No File ...',
        btn_choose: 'Choose',
        btn_change: 'Change',
        droppable: false,
        onchange: null,
        thumbnail: false //| true | large
        //whitelist:'gif|png|jpg|jpeg'
        //blacklist:'exe|php'
        //onchange:''
        //
    });

    $('#id-input-file-3').ace_file_input({
        style: 'well',
        btn_choose: 'Drop files here or click to choose',
        btn_change: null,
        no_icon: 'icon-cloud-upload',
        droppable: true,
        thumbnail: 'small'//large | fit
        //,icon_remove:null//set null, to hide remove/reset button
        /**,before_change:function(files, dropped) {
            //Check an example below
            //or examples/file-upload.html
            return true;
        }*/
        /**,before_remove : function() {
            return true;
        }*/
                    ,
        preview_error: function (filename, error_code) {
            //name of the file that failed
            //error_code values
            //1 = 'FILE_LOAD_FAILED',
            //2 = 'IMAGE_LOAD_FAILED',
            //3 = 'THUMBNAIL_FAILED'
            //alert(error_code);
        }

    }).on('change', function () {
        //console.log($(this).data('ace_input_files'));
        //console.log($(this).data('ace_input_method'));
    });

    //dynamically change allowed formats by changing before_change callback function
    $('#id-file-format').removeAttr('checked').on('change', function () {
        var before_change
        var btn_choose
        var no_icon
        if (this.checked) {
            btn_choose = "Drop images here or click to choose";
            no_icon = "icon-picture";
            before_change = function (files, dropped) {
                var allowed_files = [];
                for (var i = 0 ; i < files.length; i++) {
                    var file = files[i];
                    if (typeof file === "string") {
                        //IE8 and browsers that don't support File Object
                        if (!(/\.(jpe?g|png|gif|bmp)$/i).test(file)) return false;
                    }
                    else {
                        var type = $.trim(file.type);
                        if ((type.length > 0 && !(/^image\/(jpe?g|png|gif|bmp)$/i).test(type))
                                || (type.length == 0 && !(/\.(jpe?g|png|gif|bmp)$/i).test(file.name))//for android's default browser which gives an empty string for file.type
                            ) continue;//not an image so don't keep this file
                    }

                    allowed_files.push(file);
                }
                if (allowed_files.length == 0) return false;

                return allowed_files;
            }
        }
        else {
            btn_choose = "Drop files here or click to choose";
            no_icon = "icon-cloud-upload";
            before_change = function (files, dropped) {
                return files;
            }
        }
        var file_input = $('#id-input-file-3');
        file_input.ace_file_input('update_settings', { 'before_change': before_change, 'btn_choose': btn_choose, 'no_icon': no_icon })
        file_input.ace_file_input('reset_input');
    });

    //WYSIWYG
    function showErrorAlert (reason, detail) {
        var msg='';
        if (reason==='unsupported-file-type') { msg = "Unsupported format " +detail; }
        else {
            console.log("error uploading file", reason, detail);
        }
        $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>'+ 
         '<strong>File upload error</strong> '+msg+' </div>').prependTo('#alerts');
    }

    function supportsContentEditable() {
        //"contentEditable" in document.documentElement returns true in android 2
        var hasContentEditable = ("contentEditable" in document.documentElement);
        if (hasContentEditable) {
            var ua = navigator.userAgent;
            var match = ua.match(/Android\s([0-9\.]*)/);
            if (!match) return true;
            if (parseInt(match[1], 10) < 4)
                return false;
            return true;
        }
        return false;
    };

    if (supportsContentEditable()) {
        $('#editor1').ace_wysiwyg(
        {
            'wysiwyg': { fileUploadError: showErrorAlert }
        }).prev().addClass('wysiwyg-style1');
    } else {
        $('#editor1').text("WSYWIG Feature not supported");
    }

    ////////////////////////////////////////////////////////////

    //Tables jquery.dataTables

    var oTable1 = $('#sample-table-2').dataTable({
        "aoColumns": [
            { "bSortable": false }, null, null, null, null, null, { "bSortable": false }
        ]
    });

    $('table th input:checkbox').on('click', function() {
        var that = this;
        $(this).closest('table').find('tr > td:first-child input:checkbox')
            .each(function() {
                this.checked = that.checked;
                $(this).closest('tr').toggleClass('selected');
            });
    });
})