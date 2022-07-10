import React, { Component } from "react";
import { getJobs} from "../../actions/getInfoActions";

class JobListing extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }
//   componentDidMount() {
//     // this.getDataFromDb();
//   }
  getDataFromDb = async () => {
    let result = await getJobs();
    this.setState({ ...this.state, data: result.data });
  };
    render() {
        const jobs = this.state.data;
    return (
            <div className="container">
            <h4 className="p-3 text-center">All Job Openings</h4>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Organization</th>
                        <th>Job title</th>
                        <th>Stipend</th>
                        <th>Type</th>
                        <th>Mode</th>
                        <th>Role</th>
                        <th>Decription</th>
                        <th>Technology</th>
                        <th>Application Link</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {this.state.data&& this.state.data.map(job =>
                        <tr key={job.id}>
                            <td>{job.title}</td>
                            <td>{job.type}</td>
                            <td>{job.role}</td>
                        </tr>
                    )} */}
                </tbody>
            </table>
        </div>
    );
  }
}

export default JobListing;
