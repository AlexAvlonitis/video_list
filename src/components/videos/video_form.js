import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addVideo } from '../../redux/actions/videos';

class VideoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      name: '',
      duration: '',
      url: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addVideo(this.state);
    this.setState({id: this.state.id + 1})
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='name'
            onChange={this.handleChange}
            value={this.state.name}
            placeholder='Name'
          />
          <input
            type='text'
            name='duration'
            onChange={this.handleChange}
            value={this.state.duration}
            placeholder='Duration'
          />
          <input
            type='text'
            name='url'
            onChange={this.handleChange}
            value={this.state.url}
            placeholder='Url'
          />
          <input type='submit' value='Save'/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(VideoForm);
