import React, { Component } from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';

import ApiService from "../ApiService";

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      light: '#33afaf',
      main: '#009C9C',
      dark: '#006d6d',
      contrastText: '#fff',
    },
  }
});

class DataTable extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			rows: [],
			columns: [],
			editMode: false,
			message: null
		}
	}

	getRowMode = () => {
		return this.state.mode
	}

	getColumn = () => {
		const _columns = [
			{ field: 'id', headerName: '번호', width: 110 },
			{ field: 'username', headerName: '이름 전체', width: 150 },
			{ field: 'firstName', headerName: '이름', width: 110, editable: this.state.editMode },
			{ field: 'lastName', headerName: '성', width: 100, editable: this.state.editMode },
			{ field: 'age', headerName: '나이', type: 'number', width: 110, editable: this.state.editMode },
			{ field: 'salary', headerName: '급여', type: 'number', width: 110, editable: this.state.editMode },
			
			{
			  field: 'actions',
			  type: 'actions',
			  headerName: '설정',
			  width: 100,
			  cellClassName: 'actions',
			  getActions: ({ id }) => {
			  	//현재 mode를 가져오는 함수 
				if (false) {
				  return [
					<GridActionsCellItem
					  icon={<SaveIcon />}
					  label="Save"
					  //onClick={handleSaveClick(id)}
					  color="primary"
					/>,
					<GridActionsCellItem
					  icon={<CancelIcon />}
					  label="Cancel"
					  className="textPrimary"
					  //onClick={handleCancelClick(id)}
					  color="inherit"
					/>,
				  ];
				}
		  
				return [
				  <GridActionsCellItem
					icon={<EditIcon />}
					label="Edit"
					className="textPrimary"
					onClick={function(){
						console.log('수정 눌렀냐?');
						this.setState({
							editMode: true,
						})
					}.bind(this)}
					color="inherit"
				  />,
				  <GridActionsCellItem
					icon={<DeleteIcon />}
					label="Delete"
					//onClick={handleDeleteClick(id)}
					color="inherit"
				  />,
				];
			  },
			},
		  ];
		
		this.setState({
			columns: _columns
		})
	}



	componentDidMount() {
		this.reloadDataList();
		this.getColumn();
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
		console.log(this.state.rows);
	}

	render() {
		return (
			<div style={{ height: 400, width: '100%' }}>
				<ThemeProvider theme={theme}>
					<DataGrid
						rows={this.state.data}
						columns={this.state.columns}
						pageSize={5}
						rowsPerPageOptions={[5]}
						checkboxSelection
						editMode="row"
					/>
				</ThemeProvider>
			</div>
		);
	}
}

export default DataTable;