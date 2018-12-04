import React, { Component } from "react";
import axios from "axios";
import FilterGroup from "../components/common/filterGroup";
import { getbonusCreditEligibilitys } from "../services/bonusCreditEligibilityService";
import LoansTable from "./loansTable";

class Loans extends Component {
  state = {
    loans: [],
    bonusCreditEligibilitys: [],
    filterName: "Bonus Credit Eligibility"
  };

  async componentDidMount() {
    const promise = await axios.get(
      "http://api.kivaws.org/v1/loans/search.json?status=funded"
    );

    const bonusCreditEligibilitys = [
      { _id: "all", name: this.state.filterName },
      ...getbonusCreditEligibilitys()
    ];

    this.setState({ loans: promise.data.loans, bonusCreditEligibilitys });
  }

  handleBceSelect = bce => {
    this.setState({ selectedBce: bce });
  };

  getPageData = () => {
    const { loans, selectedBce, filterName } = this.state;

    const filtered =
      !selectedBce || selectedBce.name === filterName
        ? loans
        : loans.filter(l => l.bonus_credit_eligibility === selectedBce._id);
    return { totalCount: filtered.length, loans: filtered };
  };

  render() {
    const { totalCount, loans } = this.getPageData();
    if (totalCount === 0) return <p>There are no loans!</p>;

    return (
      <div className="row">
        <div className="col-3">
          <FilterGroup
            items={this.state.bonusCreditEligibilitys}
            selectedItem={this.state.selectedBce}
            onItemSelect={this.handleBceSelect}
          />
        </div>
        <div className="col">
          <div>
            <p>Showing {totalCount} loans.</p>
            <LoansTable loans={loans} />
          </div>
        </div>
      </div>
    );
  }
}

export default Loans;
