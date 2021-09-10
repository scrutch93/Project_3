const resolvers = {
    Query: {
      carriers: async () => {
        return carriers.find({});
      },
      services: async () => {
        return await Services.find({});
      },
      
      packages: async (parent, args) => {
        
        return await Packages.findById(carrier_id).populate('tracking');
      },
      tracking: async () => {
        return await Tracking.find({}).populate('packages');
      }
    }
  };
  
  module.exports = resolvers;
  