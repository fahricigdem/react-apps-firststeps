function Memes(props) {
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


            <div style={{ height: "50%", width: "70vw", margin: 'auto' }}>
                <h1 style={{ position: 'absolute', marginTop: "3vh", marginLeft: '20vw', color: 'yellow' }}>{props.topTextSubmitted}</h1>
                <img
                    style={{ height: "30%", width: "50vw" }}
                    src={props.randomImg}
                />
                <h1 style={{ position: 'absolute', marginTop: "-12vh", marginLeft: '20vw', color: 'yellow' }}>{props.bottomTextSubmitted}</h1>
            </div>


        </div>
    );
}

export default Memes