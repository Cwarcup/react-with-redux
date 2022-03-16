import React from 'react';
import ReactDOM from 'react-dom';
import faker from '@faker-js/faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author={faker.name.findName()}
        text={faker.lorem.sentence()}
      />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.querySelector('#root'));
