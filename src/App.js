import React, { Component } from "react";

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor() {
    super();
    this.state = {
      frase: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      frase: e.target.value,
    });
    if (e.key === "Enter") {
      let $capture = document.querySelector(".todo");
      let $create = document.createElement("li");
      $create.textContent = `${this.state.frase}`;
      $capture.appendChild($create);
      e.target.value = null;
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input
              onKeyUp={this.handleChange}
              type="text"
              id="new-task"
              placeholder="Ingresa una tarea y oprime Enter"
            />
          </form>
        </div>
      </div>
    );
  }
  handleSubmit(e) {
    e.preventDefault();
  }
}

export default App;
