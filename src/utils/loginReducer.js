// const initialState = {
//   loginData: {
//     name: '',
//     email: '',
//     password: '',
//     phoneNumber: '',
//     imgProfile: '',
//   },
//   isLoggedIn: false,
// };

// const LoginReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_DATA_LOGIN':
//       return {
//         ...state,
//         isLoggedIn: true,
//         loginData: action.data,
//       };
//     case 'RESET_DATA_LOGIN':
//       return {
//         ...state,
//         loginData: {
//           nama: '',
//           email: '',
//           phoneNumber: '',
//           imgProfile: '',
//           password: '',
//         },
//         isLoggedIn: false,
//       };
//     case 'LOGIN':
//       return {
//         ...state,

//         isLoggedIn: true,
//       };
//     case 'LOGOUT':
//       return {
//         ...state,
//         isLoggedIn: false,
//       };
//     default:
//       return state;
//   }
// };

// export default LoginReducer;
