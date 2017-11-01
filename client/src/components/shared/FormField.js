import React from 'react';

export default ({input, label, meta, id, type}) => {
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<input {...input} style={{marginBottom: '5px'}} type={type} id={id} />
			<div className="red-text" style={{marginBottom: '20px'}}>
				{meta.touched && meta.error}
			</div>
		</div>
	);
};
