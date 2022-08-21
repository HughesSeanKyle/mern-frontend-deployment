export const signup = (userName, userEmail, userPassword) => {
	var myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	var raw = JSON.stringify({
		name: userName,
		email: userEmail,
		password: userPassword,
	});

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow',
	};

	fetch('https://aqueous-retreat-11852.herokuapp.com/api/user', requestOptions)
		.then((response) => response.text())
		.then((result) => {
			// Note token to be received here and must be stored to state
			// result must be returned
			console.log(result);
		})
		.catch((error) => console.log('error', error));
};
