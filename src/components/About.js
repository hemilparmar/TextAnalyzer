


export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',

    // })

    let myStyle = {
        color:props.mode ==='dark'?'white':'rgb(15,15,15)',
        backgroundColor:props.mode ==='dark'?'rgb(15,15,15)':'white',
        border:'1px solid',
        borderColor:props.mode ==='dark'?'white':'#101020'
    }






    return (
        <div className="container" style={myStyle}>
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample" style={{color:props.mode ==='dark'?'white':'#101025'}}>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>About This Website</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Hello Friends, Welcome to Text Analyzer. Here you can analyze your text.This Website has features like Conver to Uppercase, Convert to Lowercase, Remove Extraspaces, Word Counter, Character Counter, Time for a word to read, Reverse text etc.  
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Why This Website?</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        This Website is only for Practice.Here you can also contribute efforts.You can add your own features. For more details visit last section.Thank You.
                        
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Contact Details</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        
                        Hello Friends, this is <strong>Hemil parmar</strong>,<br/>
                        <strong>Email</strong> : hptaken2000@gmailcom
                        
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btnText}</button>
            </div> */}


        </div>
    )
}
