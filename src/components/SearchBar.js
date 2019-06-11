import React, { useState } from 'react';

export default function SearchBar({ handleSearch }) {
	const [value, setValue] = useState('');

	const handleChange = event => setValue(event.target.value);

	const handleSubmit = event => {
		event.preventDefault();
		handleSearch(value);
		setValue('');
	};

	return (
		<div className='search-bar ui segment'>
			<form className='ui form' onSubmit={handleSubmit}>
				<div className='field'>
					<label>Video Search</label>
					<input type='text' value={value} onChange={handleChange} />
				</div>
			</form>
		</div>
	);
}
