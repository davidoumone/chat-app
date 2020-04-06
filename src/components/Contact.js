import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";


// function Contact({name, avatar, online}) {
function Contact(props) {
  const {name, avatar, online} = props;
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt={name} />
      <div>
        <p className="name">{name}</p>
        <div className="status">
          <div className={online ? "status-online" : "status-offline"} />
          <p className="status-text">{online ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired           
}

export default Contact;
