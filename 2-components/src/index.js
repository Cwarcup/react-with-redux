import React from 'react';
import ReactDOM from 'react-dom';
import faker from '@faker-js/faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>WARNING</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

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
      <ApprovalCard>Test</ApprovalCard>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.querySelector('#root'));
