import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <Button
      color="secondary"
      size="small"
      disabled={active}
      variant="contained"
      onClick={(e) => {}}
      style={{
        marginLeft: "4px",
      }}
    >
      {children}
    </Button>
  );
};

Link.propTypes = {
  //   active: PropTypes.bool.isRequired,
  //   children: PropTypes.node.isRequired,
  //   onClick: PropTypes.func.isRequired,
};

export default Link;
