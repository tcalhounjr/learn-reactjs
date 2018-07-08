import React, { Component } from "react";
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProject extends Component {
    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobile Development']
    };

    handleSubmit(event) {
        event.preventDefault();
        if(this.refs.title.value === '') {
            alert('title is required');
        }
        else {
            this.setState({newProject: {
                id: uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function () {
                this.props.addProject(this.state.newProject);
            });
        }
        
    }

    render() {
      let categoryOptions = this.props.categories.map(category => {
          return <option key={category} value="category">{category}</option>
      });
      return (
        <div className="AddProject">
            <h3>Add Project</h3><br />
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Title</label><br />
                <input type="text" ref="title" /><br />
            </div>
            <div>
                <label>Category</label><br />
                <select ref="category">
                    {categoryOptions}
                </select>
            </div>
            <br /><input type="submit" value="submit" />
          </form>  
        </div>
      );
    }
  }
  
  AddProject.propTypes = {
    categories: PropTypes.array,
    addProject: PropTypes.func
  };

  export default AddProject;