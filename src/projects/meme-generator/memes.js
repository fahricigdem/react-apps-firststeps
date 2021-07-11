function Memes(props) {
    console.log(props);

    let topStyle = {

        margin: 'auto',
        marginTop: "1vh",
        color: 'orange',

    }

    let bottomStyle = {

        margin: 'auto',
        marginTop: "67vh",
        color: 'orange'
    }


    return (
        <div style={{ textAlign: 'center', backgroundColor: '#28527a', padding: "10px 3px" }}>
            <form className="ui form" onSubmit={props.handleSubmit} >
                <div className="field">
                    <input style={{ width: "40vw" }}
                        className="form-control"
                        type="text"
                        name="topText"
                        value={props.topText}
                        onChange={props.handleChange}
                    />
                    <input style={{ width: "40vw" }}
                        className="form-control"
                        type="text"
                        name="bottomText"
                        value={props.bottomText}
                        onChange={props.handleChange}
                    />

                    <button className="btn btn-sm-m-2" style={{ backgroundColor: "#8F4068", color: "whitesmoke" }}>click for the picture</button>
                </div>
            </form>


            <div style={{
                width: "65vw", height: "80vh", margin: 'auto', backgroundImage: `url(${props.randomImg})`,
                textAlign: 'center',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <h1 style={topStyle}><span style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "20%" }}>{props.topTextSubmitted}</span></h1>
                <h1 style={bottomStyle}><span style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "20%" }}>{props.bottomTextSubmitted}</span></h1>
            </div>





        </div>
    );
}

export default Memes