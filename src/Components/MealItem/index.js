const MealItem = (props) => {
  const { details } = props;
  const { name, picture, description } = details;
  return (
    <li>
      <div classname="head-desc">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <img src={picture} />
    </li>
  );
};
