function Form(props) {

    // console.log(props)
    var style = props.display ? { display: 'block' } : { display: 'none' }

    var style1 = props.firstName ? { display: 'block' } : { display: 'none' }
    var style2 = props.lastName ? { display: 'block' } : { display: 'none' }
    var style3 = props.comment ? { display: 'block' } : { display: 'none' }
    var style4 = props.isOk ? { display: 'block' } : { display: 'none' }
    var style5 = props.gender ? { display: 'block' } : { display: 'none' }
    var style6 = props.favColor ? { display: 'block' } : { display: 'none' }

    return (
        <div className="container">
            <h1>Forms</h1>
            <form onSubmit={props.onSubmit}>
                <input
                    type="text"
                    name="firstName"
                    // value={props.firstName}
                    className="form-control"
                    style={{ width: "45vw" }}
                    placeholder="First Name"
                    onChange={props.onHandle}
                />
                <span> {props.firstName}</span>
                <br />

                <input
                    type="text"
                    name="lastName"
                    // value={props.lastName}
                    className="form-control"
                    style={{ width: "45vw" }}
                    placeholder="Last Name"
                    onChange={props.onHandle}
                />
                <span> {props.lastName}</span>

                <textarea
                    name="comment"
                    className="form-control"
                    style={{ width: "60vw", display: "inline-block" }}
                    id="comment"
                    // cols="30"
                    // rows="10"
                    // value={props.comment}
                    placeholder="Your Comment"
                    onChange={props.onHandle}
                />
                <span> {props.comment}</span>

                <br />

                <input
                    type="checkbox"
                    name="isOk"
                    // checked={props.isOk}
                    onChange={props.onHandle}
                />is ok?
                    <span> {props.isOk && "Yes"}</span>
                <br />
                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={props.onHandle}
                />Male
                    <br />
                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={props.onHandle}
                />Female
                    <p> Gender: {props.gender}</p>

                <label >Favorite Color:</label>
                <select
                    name="favColor"
                    value={props.favColor}
                    onChange={props.onHandle}
                    className="form-select form-select-sm"

                >
                    <option selected>Open this select menu</option>
                    <option value="red">red</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>_

                    </select>
                <p> Favorite Color: {props.favColor}</p>

                <button>Submit</button>


            </form>

            <br />
            <div style={style}>
                <h4 style={style1}>Your First Name: {props.firstName}</h4>
                <h4 style={style2}>Your Last Name: {props.lastName}</h4>
                <h4 style={style3}>Your Comment: {props.comment}</h4>
                <h4 style={style4}>Your Choice: {props.isOk && "Yes"}</h4>
                <h4 style={style5}>Your Gender: {props.gender}</h4>
                <h4 style={style6}>Your Favorite Color: {props.favColor}</h4>
            </div>

        </div>
    );
}

export default Form;