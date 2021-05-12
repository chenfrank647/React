import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div><h4>Warning!</h4> Are you sure</div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author = "Sam" 
                    content = "Nice Nice Nice" 
                    time = "8:45"/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author = "Alex" 
                content = " Hello Hello Hello" 
                time = "7:55"/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author = "Jane" 
                content = "OK" 
                time = "9:44"/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author = "Sandy" 
                content = "NO!" 
                time = "4:45"/>
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));