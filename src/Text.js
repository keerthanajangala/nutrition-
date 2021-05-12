import './Text.css';

const Text = ({input,analyze,reset,removebtn}) => {
    return(
        <div id="main" className="col-sm-4" style={{marginTop:'20px'}}>
            <p>
                <textarea cols="20" rows="10" className="form-control" onChange={input} ></textarea>
            </p>
            <p className="buttons">
                <button type="button" className="btn btn-primary button1" onClick={analyze}>Analyze</button>
                {removebtn?<button type="button" className="btn btn-primary button2" onClick={reset}>New Recipe</button>:''}
            </p>
        </div>
    )
}

export default Text;