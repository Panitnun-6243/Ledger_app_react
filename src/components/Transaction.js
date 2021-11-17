import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';

const Transaction = () => {
    const data = [
        {title:"Hospital expense", amount:700},
        {title:"Food expense", amount:300},
        {title:"Travel expense", amount:2000},
        {title:"Salary", amount:30000},
        {title:"Credit expense", amount:10000}
    ]
    return (
      <ul className="item-list">
        
        {data.map(e=>{
            // return <Item title={e.title} amount={e.amount}/>
            return <Item {...e} key={uuidv4()}/>
        })}
      </ul>
    );
  }
  export default Transaction;