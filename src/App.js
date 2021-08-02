import React, { useEffect, useState } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Thoughts from './api/Thoughts';
import ThoughtCards from './components/ThoughtCards';

const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    try {
      const { data } = await Thoughts.get('/thoughts');
      setThoughts(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log('Error:- ', err);
    }
  }, []);
  return (
    <div id="flashcard-app" className="container">
      {loading ? (
        <div>Loading...</div>
      ) : loading === false ? (
        <ThoughtCards data={{ thoughts }} />
      ) : (
        <div>No Data Found</div>
      )}
    </div>
    // <Query
    //   query={gql`
    //     {
    //       thoughts {
    //         id
    //         name
    //         thought
    //       }
    //     }
    //   `}
    // >
    //   {({ loading, error, data }) => {
    //     return (
    //       <div id="flashcard-app" className="container">
    //         {loading ? (
    //           <div>Loading...</div>
    //         ) : (
    //           <ThoughtCards data={data ? data : []} />
    //         )}
    //       </div>
    //     );
    //   }}
    // </Query>
  );
};

export default App;
