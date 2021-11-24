
const FormComponent=()=>{
const inputTitle=(event)=>{
    console.log( event.target.value)
   
}
const inputAmount=(event)=>{
    console.log(event.target.value)
}
const saveItem=(event)=>{
    event.preventDefault()//ไม่ให้จอเรนเดอใหม่ ดักจับข้อมูลให้เเสดงผลค้างไว้ 
    console.log('Already save')
}
    return(
        <div className="form-container">
            <form onSubmit={saveItem}>
                <div className="list-item">
                    <label>List :</label>
                    <input type="text" placeholder="Your income or expense" onChange={inputTitle}/>
                </div>
                <div className="amount-item">
                    <label>Amount :</label>
                    <input type="text" placeholder="Costs" onChange={inputAmount}/>
                </div>
                <div className="button-item">
                    <button type="submit" >&#128176; Add to your list</button>
                                      
                </div>
            </form>
        </div>
    )
}
export default FormComponent;