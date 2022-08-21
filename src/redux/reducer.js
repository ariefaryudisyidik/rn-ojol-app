import {combineReducers} from 'redux';

const initialState = {
  name: 'Arief Aryudi Syidik',
};

const initialStateRegister = {
  form: {
    fullName: '',
    email: '',
    password: '',
  },
  title: 'Register Page',
  desc: 'Ini adalah desc untuk Register',
};

const initialStateLogin = {
  info: 'Tolong masukkan password anda',
  isLogin: true,
};

const RegisterReducer = (state = initialStateRegister, action) => {
  if (action.type === 'SET_TITLE') {
    return {
      ...state,
      title: 'Register ganti title',
    };
  }
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const LoginReducer = (state = initialStateLogin, action) => {
  return state;
};

const reducer = combineReducers({RegisterReducer, LoginReducer});

export default reducer;
