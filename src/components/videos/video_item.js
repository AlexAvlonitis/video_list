import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeVideo, editVideo } from '../../redux/actions/videos';

class VideoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      id: this.props.video.id,
      name: this.props.video.name,
      duration: this.props.video.duration,
      url: this.props.video.url
    }
  }

  handleRemoveClick = () => {
    const video = this.props.video;

    this.props.removeVideo(video.id);
  }

  handleEditClick = () => {
    this.setState({isEditing: true});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.editVideo(this.state);
    this.setState({isEditing: false});
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCancelClick = () => {
    this.setState({
      isEditing: false,
      name: this.props.video.name,
      duration: this.props.video.duration,
      url: this.props.video.url
    });
  }

  renderForm = () => {
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
        <button onClick={this.handleCancelClick}>
          Cancel
        </button>
        <button onClick={this.handleRemoveClick}>
          Remove
        </button>
      </div>
    )
  }

  renderItem = () => {
    const video = this.props.video

    return (
      <li>
        <p>{video.name}</p>
        <p>{video.duration}</p>
        <p>{video.url}</p>

        <button onClick={this.handleEditClick}>
          Edit
        </button>
        <button onClick={this.handleRemoveClick}>
          Remove
        </button>
        <hr />
      </li>
    )
  }

  render() {
    return(
      <div>
        { this.state.isEditing ? this.renderForm() : this.renderItem() }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ removeVideo, editVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(VideoItem);
