import React, { Component } from "react";

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor() {
    super();
    this.state = {
      frase: "",
      tareas: [],
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      tareas: [...this.state.tareas, this.state.frase],
      frase: "",
    });
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
            {this.state.tareas.map((tarea, index) => (
              <li key={index}>{tarea}</li>
            ))}
          </ul>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              value={this.state.frase}
              onChange={(e) => {
                this.setState({
                  frase: e.target.value,
                });
              }}
              type="text"
              id="new-task"
              placeholder="Ingresa una tarea y oprime Enter"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
