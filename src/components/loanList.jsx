import React, { Component } from "react";
import _ from "lodash";

class LoanList extends Component {
  getData(loan, column) {
    const content = _.get(loan, column.path);

    if (typeof content === "boolean") {
      return content ? "YES" : "NO";
    }

    if (content instanceof Array) return content.join();

    return content;
  }

  render() {
    const { loan, columns } = this.props;

    return (
      <div>
        <h1>Loan Details</h1>
        {columns.map(column => (
          <p>
            {column.label} : {this.getData(loan, column)}
          </p>
        ))}
      </div>
    );
  }
}

export default LoanList;
