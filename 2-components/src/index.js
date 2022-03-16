import React from 'react';
import ReactDOM from 'react-dom';
import faker from '@faker-js/faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatarImg={faker.image.avatar()}
        author={faker.name.findName()}
        text={faker.lorem.sentence()}
        timeAgo="Sun at 4:05PM"
      />
      <CommentDetail
        avatarImg={faker.image.avatar()}
        author={faker.name.findName()}
        text={faker.lorem.sentence()}
        timeAgo="Tues at 7:33PM"
      />
      <CommentDetail
        avatarImg={faker.image.avatar()}
        author={faker.name.findName()}
        text={faker.lorem.sentence()}
        timeAgo="Fri at 4:20PM"
      />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.querySelector('#root'));
