import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr style={{ backgroundColor: "#f5f5f5ab" }}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th style={{ backgroundColor: "#deb5b545" }}>{textFirstCell}</th>
            <th style={{ backgroundColor: "#deb5b545" }}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

const styles = StyleSheet.create({
  th: {
    borderBottom: "1px solid #ddd",
    width: "80%",
  },

  td: {
    width: "80%",
  },

  tr: {
    "nth-child(2)": {
      textAlign: "left",
    },
  },

  tr: {
    "nth-child(2)": {
      textAlign: left
    }
  }
})

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
