import React, { Component } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import ApiService from "../ApiService";

const columns = [
  { field: 'id', headerName: '일련번호', width: 80 },
  { field: 'username', headerName: '이름 전체', width: 180 },
  { field: 'firstName', headerName: '이름', width: 130 },
  { field: 'lastName', headerName: '성', width: 130 },
  { field: 'age', headerName: '나이', type: 'number', width: 90 },
  { field: 'salary', headerName: '급여', type: 'number', width: 90 }
];

const rows = [];

class DataTable extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			message: null
		}
	}

	componentDidMount() {
		this.reloadDataList();
	}
	
	reloadDataList = () => {
		console.log('입장');
		ApiService.fetchUsers()
			.then(res => {
				this.setState({
					data: res.data
				})
			})
			.catch(err => {
				console.log('reloadDataList() Error!', err);
			})
		console.log(rows);
	}

	render() {
		return (
			<div style={{ height: 400, width: '100%' }}>
				<DataGrid
					rows={this.state.data}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[5]}
					checkboxSelection
				/>
			</div>
		);
	}
}

export default DataTable;