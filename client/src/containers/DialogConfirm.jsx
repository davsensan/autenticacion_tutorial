import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
class DialogConfirm extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen(){
    this.setState({open: true});
  };

  handleClose () {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label={this.props.CancelMessage}
        primary={true}
        onTouchTap={this.handleClose}
        onClick={this.props.onClickCancel}
      />,
      <FlatButton
        label={this.props.OkMessage}
        primary={true}
        onTouchTap={this.handleClose}
        onClick={this.props.onClickOK}
      />,
    ];

    return (
      <Link style={{color:'red'}} onTouchTap={this.handleOpen}>{this.props.RemoveText}
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
         {this.props.MessageConfirm}
        </Dialog>
      </Link>
    );
  }
}

export default DialogConfirm;