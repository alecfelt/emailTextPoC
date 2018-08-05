// import React from "react";
// import ReactDOM from "react-dom";
//
// // main app
// import AppRoutes from "./routes.js";
// import {Provider} from "react-redux";
// import store from "./store";
//
// ReactDOM.render(
//     <Provider store={store}>
//         <AppRoutes />
//     </Provider>,
//     document.getElementById("app"));

const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('HEY!')
})
app.listen(3000, () => console.log('Server running on port 3000'))
