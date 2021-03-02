import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const SignupForm = () => {
  const formik = useFormik({
	initialValues: {
	  firstName: '',
	  lastName: '',
	  email: '',
	  password: '',
	  mobile: '',
	},
	validationSchema: Yup.object({
	  firstName: Yup.string()
	    .min(3,'Must be between 3 and 15 characters')
		.max(15, 'Must be between 3 and 15 characters')
		.required('Cannot be empty'),
	  lastName: Yup.string()
	  .min(3,'Must be between 3 and 15 characters')
	  .max(15, 'Must be between 3 and 15 characters')
	  .required('Cannot be empty'),
	  email: Yup.string().email('Invalid email address').required('Required'),
	  mobile: Yup.number()
	  .typeError("That doesn't look like a phone number")
	  .positive("A phone number can't start with a minus")
	  .min(10,"Enter 10 digit phone number")
	  .required('A phone number is required'),
	  password:Yup.string()
	    .min(6,"minimum length should be 6")


	}),
	onSubmit: values => {
	  alert(JSON.stringify(values, null, 2));
	},
  });
  return (
	<div className="wrapper">
		<div className="form-wrapper">
		<h1>Register</h1>
		<form onSubmit={formik.handleSubmit}>
	  	<div className="firstName">
		  <label htmlFor="firstName">First Name</label>
			<input
				id="firstName"
				name="firstName"
				type="text"
				placeholder="First Name"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.firstName}
			/>
			{formik.touched.firstName && formik.errors.firstName ? (
				<div>{formik.errors.firstName}</div>
			) : null}
		  </div>

			<div className="lastName">
			<label htmlFor="lastName">Last Name</label>
			<input
				id="lastName"
				name="lastName"
				type="text"
				placeholder="last Name"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.lastName}
			/>
			{formik.touched.lastName && formik.errors.lastName ? (
				<div>{formik.errors.lastName}</div>
			) : null}
			</div>

		<div className="email">
		<label htmlFor="email">Email Address</label>
			<input
				id="email"
				name="email"
				type="email"
				placeholder="Enter Email"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.email}
			/>
			{formik.touched.email && formik.errors.email ? (
				<div>{formik.errors.email}</div>
			) : null}
		</div>

		<div className="mobile">
		<label htmlFor="mobile">Mobile</label>
		<br></br>
		<input
			id="mobile"
			name="mobile"
			type="mobile"
			className="mobile"
			placeholder="Enter Mobile no."
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			value={formik.values.mobile}
		/>
		{formik.touched.mobile && formik.errors.mobile ? (
			<div>{formik.errors.mobile}</div>
		) : null}
		</div>

		<div className="password">
		<label htmlFor="password">Password</label>
			<input
				id="password"
				name="password"
				type="password"
				placeholder="Enter password"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.password}
			/>
			{formik.touched.password && formik.errors.password ? (
				<div>{formik.errors.password}</div>
			) : null}
		</div>

		<div className="Reg">
		<button type="submit" >Submit</button>
			</div>		
	  
	</form>
		</div>
	</div>
  );
};
export default SignupForm;