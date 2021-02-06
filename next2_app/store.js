import {createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyCa6dAGQ9qoLu17TZGOP7YZQ43UpS0VNDA",
    authDomain: "sample-app-97b76.firebaseapp.com",
    databaseURL: "https://sample-app-97b76-default-rtdb.firebaseio.com",
    projectId: "sample-app-97b76",
    storageBucket: "sample-app-97b76.appspot.com",
    messagingSenderId: "576321913666",
    appId: "1:576321913666:web:30c88e9203d9acd67b3edb",
    measurementId: "G-5KZ75ZK78E"
  };
  // Initialize Firebase
  var fireapp;
  // ページ移動で二重に呼び出される可能性があるため
  // try構文を使ってエラーが発生してもそのまま処理を続行するようにする
  try {
  firebase.initializeApp(firebaseConfig);
  } catch (error) {
    console.log(error.message);
  }
  export default fireapp;

// ステートの初期値
const initial = {
}

function fireReducer(state = initial, action) {
  switch (action.type) {
    case 'TESTACTION':
      return state;
    default:
      return state;
  }
}

// initStore関数
export function initStore(state = initial) {
  return createStore(fireReducer, state, applyMiddleware(thunkMiddleware))
}