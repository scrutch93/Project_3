import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// const { ApolloServer } = require('apollo-server');
// const { typeDefs, resolvers } = require('./schema');

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,

//   introspection: true,
//   playground: true,
// });


// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });


// const { GraphQLServer } = require("graphql-yoga");

// const typeDefs =


// type Shipmentdetails  {
  
//     "tracking_number": "9405511899223197428490", INTEGER
//     "tracking_url": "https://www.fedex.com/fedextrack/?action=track&trackingnumber=9405511899223197428490", BOOLEAN
//     "status_code": "UN", STRING
//     "carrier_code": "fedex", BOOLEAN
//     "carrier_id": 4, INTEGER
//     "carrier_detail_code": null, STRING  
//     "ship_date": null, STRING
//     "estimated_delivery_date": null, STRING
//     "actual_delivery_date": null, STRING
//     "events": []
// }


// type Package {

// "carrier_id": "se-739693", STRING 
// "carrier_code": "stamps_com", STRING
// "account_number": "test_account_739693", STRING
// "balance": 8888.9800, INTEGER
// "primary": false, BOOLEAN

// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
