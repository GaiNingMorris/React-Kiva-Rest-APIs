import React, { Component } from "react";
import axios from "axios";
import LoanList from "./loanList";

class LoanDetails extends Component {
  state = {
    loan: ""
  };

  columns = [
    { path: "id", label: "ID" },
    { path: "name", label: "Name" },
    { path: "description.languages", label: "languages" },
    { path: "status", label: "Status" },
    { path: "funded_amount", label: "Funded Amount" },
    { path: "basket_amount", label: "Basket Amount" },
    { path: "activity", label: "Activity" },
    { path: "sector", label: "Sector" },
    { path: "location.country", label: "Country" },
    { path: "posted_date", label: "Posted Date" },
    { path: "planned_expiration_date", label: "Planned Expiration Date" },
    { path: "loan_amount", label: "Loan Amount" },
    { path: "lender_count", label: "Lender Amount" },
    { path: "bonus_credit_eligibility", label: "Bonus Credit Eligibility" }
  ];

  async componentDidMount() {
    const { id } = this.props.match.params;
    const url = `http://api.kivaws.org/v1/loans/${id}.json`;
    const promise = await axios.get(url);
    this.setState({ loan: promise.data.loans[0] });
  }

  render() {
    return <LoanList loan={this.state.loan} columns={this.columns} />;
  }
}

export default LoanDetails;
