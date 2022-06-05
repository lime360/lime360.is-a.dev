(function($) {

    $.fn.simpleContactForm = function(params) {

        params = $.extend({

            errorClass : 'error',	

            senderEmail : '',

            subject : 'Message From TMX Contact Request',	

            url : 'php/simpleContactForm.php',		

            type: 'POST',

            clearAfterSend: 'true',

            success : function() {

                alert('Thank you! Your email has been sent to our web administrator at TMX.');

            }

        }, params);



        function init() {

            var _self = $(this);



            _self.submit(function(e) {



                var data = '';

                var inputElement;

                var labelElement;

                var label;

                var value;

                var error = false;

                var emailSender = params.senderEmail;

                var sendUrl = params.url;

				

                if (_self.is('[action]')) {

                    sendUrl = _self.attr('action');

                }

                _self.find('input,textarea,select').each(function() {					

                    if(this.type  != 'submit') {

                        inputElement = $(this);						

                        _self.find('label').each(function() {													

                            if($(this).attr('for') == inputElement.attr('id')) {

                                labelElement = $(this);	

                                label = labelElement.html();

                            }							

                        });						

                        inputElement.removeClass(params.errorClass);

                        labelElement.removeClass(params.errorClass);						

                        if(inputElement.is('select')) {

                            value = inputElement.find(':selected').val();

                        } else if (inputElement.attr('type') == "checkbox" )

                        {

                            if (inputElement.is(':checked')) {

                                value = 'true';

                            }

                            else {

                                value = 'false';

                            }

                        }

                        else if  (inputElement.attr('type') == "radio" )						

                        {

                            if (inputElement.is(':checked')) {

                                value = 'true';

                            }

                            else {

                                value = 'false';

                            }

                        }

                        else {

                            value = inputElement.val();

                        }

                        if((inputElement.is('.required')) && (value.length == 0)) {

                            error = true;

                            inputElement.addClass(params.errorClass);							

                            labelElement.addClass(params.errorClass);

                        }

                        if((inputElement.is('.required')) && (inputElement.attr('type') == "checkbox" ) && (value == 'false')) {

                            error = true;

                            labelElement.addClass(params.errorClass);

                        }

                        if((inputElement.is('.required')) && (inputElement.attr('type') == "radio" ) && (value == 'false')) {

                            error = true;

                            labelElement.addClass(params.errorClass);

                        }

						

                        if((inputElement.is('.email')) || (inputElement.is('.senderEmail'))) {

                            if(!checkEmail(value)) {

                                error = true;

                                inputElement.addClass(params.errorClass);															

                                labelElement.addClass(params.errorClass);

                            }

                        }

                        if(inputElement.is('.senderEmail')) {

                            emailSender = inputElement.val();

                        }

                        if((inputElement.is('.email')) && (emailSender.length == '')) {

                            emailSender = inputElement.val();

                        }

                        data += '&' + inputElement.attr('id') + '=' + label + '||' + value;

                    }

                });

                data = data.substr(1, data.length);

                if(!error) {

                    $.ajax({

                        url  	: sendUrl,

                        type 	: params.type,

                        data 	: data + '&emailSubject=' + params.subject + '&emailSender=' + emailSender,

                        success : function()

                        {

                            if (params.clearAfterSend)

                            {

                                _self.find('input,textarea,select').each(function() {

                                    if ((this.type != 'submit')&& (this.type  != 'checkbox' )) {

                                        $(this).val('');	

                                    }

                                    else if (this.type  != 'checkbox' )

                                    {

                                        $(this).removeAttr('checked');

                                    }

                                });

                            }

                            params.success();

                        }

                    });

                }

                return false;

            });

            function checkEmail(email) {

                if(email.indexOf("@") != "-1" && email.indexOf(".") != "-1" && email != "")

                    return true;

                return false;

            }

        }

        $(this).each(init);

        return $(this);

    }

})(jQuery);

