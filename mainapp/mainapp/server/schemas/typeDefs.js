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

 type Carriers  {
  
     
     carrier_code: BOOLEAN
     carrier_id: INTEGER
     carrier_detail_code:  STRING  
     ship_date:  STRING
     estimated_delivery_date: STRING
     actual_delivery_date: STRING
     
 }

 type Services {
   service_code: STRING
 }


 type Package {

 carrier_id:  STRING 
 carrier_code:  STRING
 account_number: STRING
 balance:  INTEGER
 primary:  BOOLEAN

 }


 type tracking {
   tracking_number: STRING
  status_code: STRING
  status_description: BOOLEAN
  carrier_status_code: STRING
  carrier_status_description: BOOLEAN
  ship_date: STRING
  estimated_delivery_date: STRING
  actual_delivery_date: STRING
 
 
 }
 `;

 module.exports = typeDefs;
