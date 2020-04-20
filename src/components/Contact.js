import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: this.props.online,
    };
  }

  changeStatus = () => {
    this.setState({online: !this.state.online});
  }

  render() {
    // const { name, avatar, online } = props;
    const {online} = this.state;
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name} />
        <div>
          <p className="name">{this.props.name}</p>
          <div className="status" onClick={this.changeStatus}>
            <div
              className={online ? "status-online" : "status-offline"}
            />
            <p className="status-text">
              {online ? "online" : "offline"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};

export default Contact;
