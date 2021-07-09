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
                <CommentDetail author="Onur" timeAgo="Heute um 4:45 Uhr" content="Sehr schööön!" avatar={faker.image.image()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Fahri" timeAgo="Heute um 2:00 Uhr" content="Du hast recht!" avatar={faker.image.image()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Cigdem" timeAgo="Gestern um 17:00 Uhr" content="Ohh nooo!" avatar={faker.image.image()} />
            </ApprovalCard>
        </div>
    );
}

export default App;