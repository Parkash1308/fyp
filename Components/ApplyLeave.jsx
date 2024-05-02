import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'; // Import necessary components from React Native
import { DatePicker } from 'react-native-date-picker'; // Import DatePicker from react-native-datepicker package

export class ApplyLeave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: null,
      toDate: null
    };
  }

  render() {
    return (
      <div>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text>From Date:</Text>
          <DatePicker
            selected={this.state.fromDate}
            onChange={(date) => this.setState({ fromDate: date })}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select date"
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text>To Date:</Text>
          <DatePicker
            selected={this.state.toDate}
            onChange={(date) => this.setState({ toDate: date })}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select date"
          />
        </View>
        <Button title="Apply Leave" onPress={() => console.log("Leave applied!")}/> {/* Add your React Native Button component here */}
      </div>
    );
  }
}

export default ApplyLeave;