import React from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";

export default class MapView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: new Date(),
      end: new Date()
    }
    this.changeStart = this.changeStart.bind(this);
    this.changeEnd = this.changeEnd.bind(this);
  }
  changeStart(date) {
   this.setState({
     start: date
   });
 }
 changeEnd(date) {
   this.setState({
     end: date
   });
 }
  render() {
    return (
      <div>
        <Link to="/dashboard"><a>Back</a></Link>
        <div className="map-container">

          <div className="map">Insert Map Here</div>
            <div className="dates">
            <div><label>Start Date:</label>
            <DatePicker
            selected={this.state.start}
            onChange={this.changeStart}/>
            </div>
            <div><label>End Date:</label>
            <DatePicker
            selected={this.state.start}
            onChange={this.changeEnd}  />
            </div>
            </div>
        </div>
      </div>
    );
  }
}
