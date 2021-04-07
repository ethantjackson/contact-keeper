import React from "react";
import PropTypes from "prop-types";

const ContactItem = ({ contact }) => {
  const { name, id, email, phone, type } = contact;
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      {email && (
        <li>
          <i class="fas fa-envelope-open"></i> {email}
        </li>
      )}
      {phone && (
        <li>
          <i class="fas fa-phone"></i> {phone}
        </li>
      )}
      <button class="btn btn-dark btn-sm">Edit</button>
      <button class="btn btn-danger btn-sm">Delete</button>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
