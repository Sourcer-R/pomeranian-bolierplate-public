import './styles.css';

export const Autor = (props) => {
  return (
    <div>
      <div> {props.author}</div>
      <br />
      <div>{props.role}</div>
    </div>
  );
};
