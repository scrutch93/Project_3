const { gql } = require('apollo-server-express');
 const { ApolloServer } = require('apollo-server');
 const { typeDefs, resolvers } = require('./schema');

 const server = new ApolloServer({
   typeDefs,
   resolvers,

   introspection: true,
   playground: true,
 });



 server.listen().then(({ url }) => {
   console.log(`🚀 Server ready at ${url}`);
 });




 const typeDefs = gql`

type Auth {
    token: ID!
    user: User
  }

 type Shipmentdetails  {
  
     tracking_number: "9405511899223197428490", INTEGER
     tracking_url: "https://www.fedex.com/fedextrack/?action=track&trackingnumber=9405511899223197428490", BOOLEAN
     status_code: "UN", STRING
     carrier_code: "fedex", BOOLEAN
     carrier_id: 4, INTEGER
     carrier_detail_code: null, STRING  
     ship_date: null, STRING
     estimated_delivery_date: null, STRING
     actual_delivery_date: null, STRING
     events: []
 }


 type Package {

 carrier_id: "se-739693", STRING 
 carrier_code: "stamps_com", STRING
 account_number: "test_account_739693", STRING
 balance: 8888.9800, INTEGER
 primary: false, BOOLEAN

 }
 `;

 module.exports = typeDefs;
