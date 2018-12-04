import React, { Component } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";

class LoansTable extends Component {
  state = {};

  columns = [
    {
      path: "name",
      label: "Name"
    },
    { path: "status", label: "Status" },
    { path: "posted_date", label: "Posted Date" },
    { path: "planned_expiration_date", label: "Planned Expiration Date" },
    { path: "loan_amount", label: "Loan Amount" },
    { path: "bonus_credit_eligibility", label: "Bonus Credit Eligibility" },
    {
      key: "view",
      content: loan => (
        <Link to={`/loans/${loan.id}`}>
          <button className="btn btn-success">View</button>
        </Link>
      )
    }
  ];

  render() {
    const { loans } = this.props;
    return <Table columns={this.columns} data={loans} />;
  }
}

export default LoansTable;
