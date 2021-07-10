import Matt from "./matthew.png"
import Moll from "./molly.png"
import Ely from "./elyse.png"
function Form(props) {

    // console.log(props)


    return (
        <>
            <div className="ui grid">
                <div className="twelve wide column">

                    <h1>Forms</h1>
                    <form className="ui form" onSubmit={props.onSubmit}>
                        <div className="field">
                            <label>First Name</label>
                            <input type="text" name="firstName"
                                onChange={props.onChange}
                                value={props.firstName}
                                placeholder="First Name"
                                required
                            />
                        </div>

                        <div className="field">
                            <label>Last Name</label>
                            <input type="text" name="lastName"
                                onChange={props.onChange}
                                value={props.lastName}
                                placeholder="Last Name"
                                required
                            />
                        </div>

                        <div className="field">
                            <label>Frei Text</label>
                            <textarea rows="2"
                                name="comment"
                                id="comment"
                                value={props.comment}
                                placeholder="About You"
                                onChange={props.onChange}
                            />
                        </div>

                        <div className="ui toggle checkbox">
                            <input type="checkbox"
                                name="isOk"
                                checked={props.isOk}
                                onChange={props.onChange}
                            />
                            <label>is Ok?</label>
                        </div>

                        <br />

                        <div className="grouped fields">
                            <label>Gender</label>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="gender" value="Male" onChange={props.onChange} />
                                    <label>Male</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="gender" value="Female" onChange={props.onChange} />
                                    <label>Female</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="gender" value="Diverse" onChange={props.onChange} />
                                    <label>Diverse</label>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label>Favorite Color: </label>
                            <select className="ui search dropdown"
                                name="favColor"
                                value={props.favColor}
                                onChange={props.onChange}
                            >
                                <option value="">Favorite Color</option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                            </select>
                        </div>

                        {props.display ?
                            <button className="negative ui button">Hide</button>
                            :
                            <button className="positive ui button">Display</button>
                        }
                    </form>

                </div>



                <div className="four wide column">

                    <div className="ui link cards" >
                        <div className="card">
                            <div className="image">
                                {props.display ?
                                    <img src={props.gender === "Male" ? Matt : props.gender === "Female" ? Moll : Ely} />
                                    :
                                    <img src={Ely} />
                                }
                            </div>
                            <div className="content">
                                <div className="ui small header"> <h2>{props.display ? props.firstName : "Max"} {props.display ? props.lastName : "Mustermann"}</h2></div>
                                <div className="meta">
                                    <p style={{ fontSize: "1.5rem" }} >{props.display ? props.gender : "Gender"}</p>
                                </div>
                                <div className="description" style={{ fontSize: "1.5rem" }}>
                                    {props.display ? props.comment : "Description"}
                                </div>
                            </div>
                            <div className="extra content" style={{ fontSize: "1.5rem" }}>
                                {props.display ?
                                    <span >
                                        Group {props.favColor === "red" ? <span style={{ color: "red" }} >Red</span> : props.favColor === "green" ? <span style={{ color: "green" }} >Green</span> : props.favColor === "green" ? <span style={{ color: "blue" }} >Blue</span> : "Color"}
                                    </span> :
                                    <span>Group RGB</span>}
                                {props.display ?
                                    <span className="right floated">
                                        {props.isOk ? <i className="thumbs up outline icon"></i> : <i className="thumbs down icon"></i>}
                                    </span> :
                                    <span className="right floated">
                                        <i className="hand peace outline icon"></i>
                                    </span>}
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </>
    );
}

export default Form;