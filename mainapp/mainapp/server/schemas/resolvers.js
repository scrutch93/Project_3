const resolvers = {
    Query: {
      carriers: async () => {
        return await Carriers.find({}).populate('carriers').populate({
          path: '',
          populate: ''
        });
      },
      services: async () => {
        return await Services.find({}).populate('packages');
      },
      // Define a resolver to retrieve individual classes
      packages: async (parent, args) => {
        // Use the parameter to find the matching class in the collection
        return await Packages.findById(carrier_id).populate('tracking');
      },
      tracking: async () => {
        return await Tracking.find({}).populate('packages');
      }
    }
  };
  
  module.exports = resolvers;
  