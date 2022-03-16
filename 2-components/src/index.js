import React from 'react';
import ReactDOM from 'react-dom';
import faker from '@faker-js/faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatarImg={faker.image.avatar()}
          author={faker.name.findName()}
          text={faker.lorem.sentence()}
          timeAgo="Sun at 4:05PM"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatarImg={faker.image.avatar()}
          author={faker.name.findName()}
          text={faker.lorem.sentence()}
          timeAgo="Tues at 7:33PM"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatarImg={faker.image.avatar()}
          author={faker.name.findName()}
          text={faker.lorem.sentence()}
          timeAgo="Fri at 4:20PM"
        />
      </ApprovalCard>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.querySelector('#root'));
