export const LOG_USER_OUT = 'LOG_USER_OUT';
export const GET_BALANCE = 'GET_BALANCE';
export const GET_USER_INFO = 'GET_USER_INFO';


// /*
//  * action creators
//  */

// export function addTodo(text) {
//   return { type: ADD_TODO,
// text: text    
// }
// }

export function logOut() {
	console.log('logging Out')
    return { type: LOG_USER_OUT }
}

export function balance(request) {
	console.log('getting balance', request);
		return { type: GET_BALANCE,
						 payload: request
					 }
}

export function userInfo(request) {
	console.log('getting user Info', request);
		return {	type: GET_USER_INFO,
							payload: request
						}
}

// export function logIn() {
// 	console.log('logging In')
// 		return { type: LOG_USER_IN }
// }