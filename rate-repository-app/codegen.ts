module.exports = {
    schema: 'http://192.168.32.191:4000/graphql',
    documents: ['src/graphql/*.ts'],
    overwrite: true,
    generates: {
    "./src/gql/": {
        preset:'client',
        config: {
          skipTypename: false,
          withHooks: true,
          withHOC: false,
          withComponent: false,
          apolloReactHooksImportFrom: "@apollo/client"
        }
      }
    }
  };