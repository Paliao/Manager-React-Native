import React, { Component } from 'react'
import { Text, View, ListView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { employeeFetch } from '../actions/employeeActions'

class EmployeeList extends Component {

  componentWillMount() {
    this.props.employeeFetch()
    this.createDataSource(this.props)    
  }

  componentWillReceiveProps(nextProps) {
    this.dataSource = ds.cloneWithRows(this.props.employees)
    this.createDataSource(this.nextProps)
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    
    this.dataSource = ds.cloneWithRows(this.props.employees)
  }

  render() {
    return (
      <View>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ employeeFetch }, dispatch)

export default connect(null, mapDispatchToProps)(EmployeeList)