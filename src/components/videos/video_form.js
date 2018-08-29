import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addVideo } from '../../redux/actions/videos'

class VideoForm extends Component {
  handleSubmit = () => {

  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Enter a video url' />
          <input type='submit' value='save'/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(VideoForm);
