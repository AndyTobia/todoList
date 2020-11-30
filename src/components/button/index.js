function Button(props) {
  function handleClick(e) {
    const { value } = e.target;
    props.handleChange(value);
  }

  return (
    <button className="button" onClick={handleClick}>
      Agregar
    </button>
  );
}

export default Button;
