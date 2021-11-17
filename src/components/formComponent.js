
const FormComponent=()=>{
    return(
        <div className="form-container">
            <form>
                <div className="list-item">
                    <label>List :</label>
                    <input type="text" placeholder="Your income or expense"/>
                </div>
                <div className="amount-item">
                    <label>Amount :</label>
                    <input type="text" placeholder="Costs"/>
                </div>
                <div className="button-item">
                    <button type="submit" >&#128176; Add to your list</button>
                                      
                </div>
            </form>
        </div>
    )
}
export default FormComponent;