import Item from "./Item";

const Transaction = (props) => {
  return (
    <ul className="item-list">
      {props.items.map((e) => {
        // return <Item title={e.title} amount={e.amount}/>
        return <Item {...e} key={e.id} />;
      })}
    </ul>
  );
};
export default Transaction;
