function Memes(props) {

    let topStyle = {

        margin: 'auto',
        marginTop: "5%",
        color: 'orange'
    }

    let bottomStyle = {

        margin: 'auto',
        marginTop: "70%",
        color: 'orange'
    }


    return (
        <div style={{ textAlign: 'center', backgroundColor: '#28527a' }}>
            <form onSubmit={props.handleSubmit} >
                <input style={{ width: "40vw" }}
                    type="text"
                    name="topText"
                    value={props.topText}
                    onChange={props.handleChange}
                />
                <input style={{ width: "40vw" }}
                    type="text"
                    name="bottomText"
                    value={props.bottomText}
                    onChange={props.handleChange}
                />

                <button style={{ width: "10vw" }}>ok</button>
            </form>


            <div style={{ width: "400px", height: "400px", margin: 'auto', backgroundImage: `url(${props.randomImg})`, textAlign: 'center' }}>
                <h1 style={topStyle}>{props.topTextSubmitted}</h1>
                <h1 style={bottomStyle}>{props.bottomTextSubmitted}</h1>
            </div>





        </div>
    );
}

export default Memes