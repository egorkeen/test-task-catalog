interface IProps {
  title: string,
}

function EmptyContainer (props: IProps) {
  return (
    <div className="empty-container">
      <h2 className="empty-container__title">{props.title}</h2>
    </div>
);

};

export default EmptyContainer;