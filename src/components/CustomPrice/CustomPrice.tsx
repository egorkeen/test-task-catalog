interface IProps {
  price: number,
}

function CustomPrice(props: IProps) {
  const customTotalPrice = props.price.toLocaleString('ru-RU', { style: 'currency', currency: "RUB", minimumFractionDigits: 0 });

  return <>{customTotalPrice}</>
};

export default CustomPrice;