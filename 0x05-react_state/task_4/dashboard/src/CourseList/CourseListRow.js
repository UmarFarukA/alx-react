import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {

  const [checked, setChecked] = useState(false);
  const headerStyle = { backgroundColor: "#deb5b545" };
  const rowStyle = { backgroundColor: "#f5f5f5ab" };
  const activeStle = isHeader ? headerStyle : rowStyle

  const handleCheckChange = e => {
    setChecked(!checked)
  }

  return (
    <tr style={activeStle} className={checked ? css(styles.rowChecked) : ""}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th style={headerStyle}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.td)}>
            <input type="checkbox" onChange={handleCheckChange} />
            {textFirstCell}
          </td>
          <td className={css(styles.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

const styles = StyleSheet.create({


  normal: {

  },

  rowChecked: {
    backgroundColor: "#e6e4e4"
  }
});

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
