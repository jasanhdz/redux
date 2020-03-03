import React from "react";
import Search from "../components/search.jsx";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import { bindActionCreators } from "redux";

class SearchContainer extends React.Component {
  state = {
    value: "Luis Fonsi",
    prompt: false
  };
  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.input.value, 'submit');
    this.props.actions.searchAsyncEntities(this.input.value);
  };
  setInputRef = element => {
    this.input = element;
  };
  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(" ", "-"),
      prompt: !!e.target.value.length
    });
  };
  render() {
    return (
      <Search
        prompt={this.state.prompt}
        handleSubmit={this.handleSubmit}
        setRef={this.setInputRef}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(SearchContainer);
