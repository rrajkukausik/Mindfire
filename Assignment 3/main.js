
		$.validator.setDefaults( {
			submitHandler: function () {
				alert( "submitted!" );
			}
		} );

		$( document ).ready( function () {
			$( "#signupForm" ).validate( {
				rules: {
					firstname: "required",
					lastname: "required",
                    mobilenumber: {
                        required: true,
                        digits: true
                    },
					password: {
						required: true,
						minlength: 5
					},
					confirm_password: {
						required: true,
						minlength: 5,
						equalTo: "#password"
					},
					email: {
						required: true,
						email: true
					},
                    city: "required",
					agree: "required"
				},
				messages: {
					firstname: "Enter a valid firstname",
					lastname: "Enter a valid lastname",
					password: {
						required: "Please enter a password",
						minlength: "Your password must be at least 5 characters long"
					},
					confirm_password: {
						required: "Please wnter a password",
						minlength: "Your password must be at least 5 characters long",
						equalTo: "Password doesnt match!!!"
					},
					email: "Please enter a valid email address",
					agree: "Please accept our policy to continue signing up",
                    city: "Please select a city"
				},
				errorElement: "em",
				errorPlacement: function ( error, element ) {
					
					error.addClass( "help-block" );

					element.parents( ".col-sm-5" ).addClass( "has-feedback" );

					if ( element.prop( "type" ) === "checkbox" ) {
						error.insertAfter( element.parent( "label" ) );
					} else {
						error.insertAfter( element );
					}


					if ( !element.next( "span" )[ 0 ] ) {
						$( "<span class='glyphicon glyphicon-remove form-control-feedback'></span>" ).insertAfter( element );
					}
				},
				success: function (element ) {
					if ( !$( element ).next( "span" )[ 0 ] ) {
						$( "<span class='glyphicon glyphicon-ok form-control-feedback'></span>" ).insertAfter( $( element ) );
					}
				},
				highlight: function ( element ) {
					$( element ).parents( ".col-sm-5" ).addClass( "has-error" ).removeClass( "has-success" );
					$( element ).next( "span" ).addClass( "glyphicon-remove" ).removeClass( "glyphicon-ok" );
				},
				unhighlight: function ( element) {
					$( element ).parents( ".col-sm-5" ).addClass( "has-success" ).removeClass( "has-error" );
					$( element ).next( "span" ).addClass( "glyphicon-ok" ).removeClass( "glyphicon-remove" );
				}
			} );
		} );