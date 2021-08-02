import ApolloClient from 'apollo-boost';
import axios from 'axios';
export default axios.create({
  baseURL: 'https://my-json-server.typicode.com/paragdev441/fake-server',
});

// export default new ApolloClient({
//   uri: 'http://localhost:8000',
// });
