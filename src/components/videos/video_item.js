import React, { Component } from 'react';
import { render } from 'react-dom';
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
          <div className="form-group">
            <input
              type='text'
              name='name'
              className="form-control"
              onChange={this.handleChange}
              value={this.state.name}
              placeholder='Name'
            />
          </div>
          <div className="form-group">
            <input
              type='text'
              name='duration'
              className="form-control"
              onChange={this.handleChange}
              value={this.state.duration}
              placeholder='Duration'
            />
          </div>
          <div className="form-group">
            <input
              type='text'
              name='url'
              className="form-control"
              onChange={this.handleChange}
              value={this.state.url}
              placeholder='Url'
            />
          </div>
          <div className="form-group">
            <input className="btn btn-primary" type='submit' value='Save'/>
          </div>
        </form>
        <button className="btn btn-primary" onClick={this.handleCancelClick}>
          Cancel
        </button>
        <button className="btn btn-secondary" onClick={this.handleRemoveClick}>
          Remove
        </button>
      </div>
    )
  }

  renderVideoDetails = (e) => {
    e.preventDefault();
    const video = this.props.video;

    const element = (
      <div>
        <h2>PLAYING VIDEO....</h2>
        <p>{video.name} {video.duration} {video.url}</p>
      </div>
    )

    render(element, document.getElementById('videoDetails'))
  }

  renderItem = () => {
    const video = this.props.video

    return (
      <ul className='list-group'>
        <li className="list-group-item">
          <a href='' onClick={this.renderVideoDetails} >Video name: {video.name}</a>
        </li>

        <button className="btn btn-primary" onClick={this.handleEditClick}>
          Edit
        </button>
        <button className="btn btn-secondary" onClick={this.handleRemoveClick}>
          Remove
        </button>
        <hr />
      </ul>
    )
  }

  render() {
    return(
      <div>
        <header id='videoDetails'></header>
        { this.state.isEditing ? this.renderForm() : this.renderItem() }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ removeVideo, editVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(VideoItem);
