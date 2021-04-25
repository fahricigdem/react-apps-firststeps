import React from "react";
import faker from "faker";
import CommentDetail from "./CommentDetail"
import ApprovalCard from "./ApprovalCard"



const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h3>Achtung!!!</h3>
                    <p>Bist du sicher? Denk doch noch mal!</p>
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Onur" timeAgo="Today at 4:45PM" content="Sehr schööön!" avatar={faker.image.image()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Fahri" timeAgo="Today at 2:00AM" content="Du hast recht!" avatar={faker.image.image()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Cigdem" timeAgo="Yesterday at 5:00PM" content="Ohh nooo!" avatar={faker.image.image()} />
            </ApprovalCard>
        </div>
    );
}

export default App;