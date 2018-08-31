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
    this.setState({
      id: this.state.id + 1,
      name: '',
      duration: '',
      url: ''
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
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
            <input className='btn btn-primary' type='submit' value='Add +'/>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(VideoForm);
