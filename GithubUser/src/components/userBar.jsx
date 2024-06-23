import "./userBar.css"

function UserBar({value, onChange , onClick}){
    return(
        <div className="main-container" >

            <h2>Project:5 Github User Search</h2>
            <div className="submain-section">
                <input type="text" placeholder="enter the username"  onChange={onChange} value={value}/>
                <button type="submit" onClick={onClick}>Search</button>

            </div>
            
        </div>
    )


}
export default UserBar