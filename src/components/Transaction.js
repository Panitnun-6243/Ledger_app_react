import Item from "./Item";

const Transaction = (props) => {
  return (
    <div>
      <ul className="item-list">
        {props.items.map((e) => {
          // return <Item title={e.title} amount={e.amount}/>
          return <Item {...e} key={e.id} />;
        })}
      </ul>
    </div>
  );
};
export default Transaction;
