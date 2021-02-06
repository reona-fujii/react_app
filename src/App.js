import React, { Component } from 'react';
import './App.css';
import Sampledata from './fire/SampleData';
import firebase from "firebase";

// firebaseの設定
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
  firebase.initializeApp(firebaseConfig);

// Appコンポーネント
class App extends Component {
  render() {
    return (
      <div>
        <h1>Fire</h1>
        <h2>Sample data.</h2>
        <Sampledata />
      </div>
    );
  }
}


export default App;