import React from "react";
import Input from "@material-ui/core/Input";
import { withStyles } from '@material-ui/styles';

const styles = {
  mainInput: {
    backgroundColor: "black",
  },
  innerInput: {
    color: "white", 
    margin: "0 10px 0 10px",
    '&::placeholder': {
      fontStyle: 'italic',
    },
  }
}

class StreamSelect extends React.Component {
  constructor(props) {
    super();
    this.state = {
      channel: "",
    };
  }

  handleChange = (e) => {
    this.setState({ channel: e.target.value });
  }

  keyPress = (e) => {
    if (e.keyCode === 13) {
      const { changeChannel } = this.props;
      const { channel } = this.state;
      changeChannel(channel);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Input
        className={classes.mainInput}
        defaultValue={this.state.channel}
        onChange={this.handleChange}
        onKeyDown={this.keyPress}
        placeholder="enter a channel name..."
        color="secondary"
        inputProps={{ 
          className: classes.innerInput,
        }}
        spellCheck={false}
        fullWidth
      />
    );
  }
}

export default withStyles(styles)(StreamSelect);
