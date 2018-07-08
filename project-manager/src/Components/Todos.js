import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {

        return (
          <TodoItem key={todo.title} todo={todo} />
        )
      });
    }
    
    return (
      <div className="Projects">
      <h3>Latest Todos</h3><br />
        {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array,
};

export default Todos;