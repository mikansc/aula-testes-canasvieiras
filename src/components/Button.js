function Button(props) {
  return (
    <div>
      <button onClick={props.aoClicar}>{props.label}</button>
    </div>
  );
}

export default Button;
