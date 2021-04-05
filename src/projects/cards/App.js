import React from "react";
import faker from "faker";
import CommentDetail from "./CommentDetail"
import ApprovalCard from "./ApprovalCard"



const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h3>Warning!!!</h3>
                    <p>Are You sure to do this?</p>
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="Nice blog post!" avatar={faker.image.image()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2:00AM" content="You are right!" avatar={faker.image.image()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" content="Ohh nooo!" avatar={faker.image.image()} />
            </ApprovalCard>
        </div>
    );
}

export default App;