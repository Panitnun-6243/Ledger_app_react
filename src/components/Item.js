import PropTypes from "prop-types";

const Item = (props) => {
  const { title, amount } = props;
  const status = amount > 0 ? "income" : "expense";
  const symbol = amount > 0 ? "+" : "-";
  return (
    // ค่าตัวเลขติดลบจะเข้าเอาเครื่องหมายลบเข้ามาด้วย ดังนั้นต้องเคลียค่าโดยใช้ absolute
    <li className={status}>
      {title}{" "}
      <span>
        {symbol}
        {Math.abs(amount)}
      </span>
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Item;
