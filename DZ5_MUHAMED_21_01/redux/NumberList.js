import React from "react";
import { connect } from "react-redux";

const NumberList = ({ list }) => {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  list: state.list,
});

export default connect(mapStateToProps)(NumberList);
