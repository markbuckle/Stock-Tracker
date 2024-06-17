import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://makhshevad.eu-central-a.ibm.stepzen.net/api/precise-porcupine/__graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization: 
            'Apikey makhshevad::local.net+1000::e49e76c8e1b06bfec38832c97f9dca3e390ee5a2e04458c2c2da0de52dee5902',
    },
  });

  export default client;