import React, { Component } from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';

import ApiService from "../../../ApiService";

import { createTheme, ThemeProvider } from '@mui/material/styles';


// const theme = createTheme({
//   palette: {
//     primary: {
//       light: '#33afaf',
//       main: '#009C9C',
//       dark: '#006d6d',
//       contrastText: '#fff',
//     },
//   }
// });

class DataTable extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			rows: [],
			columns: [
				{ field: 'aplySeq', headerName: '신청 일련번호', width: 130, type: 'number' },
				{ field: 'userId', headerName: '사용자 ID', width: 70 },
  				{ field: 'sysId', headerName: '시스템 ID', width: 130 },
				{ field: 'secKey', headerName: '시크릿 키', width: 130 },
				{ field: 'userCert', headerName: '사용자 인증서', width: 130 },
				{ field: 'userPriKey', headerName: '사용자 개인키', width: 130 },
				{ field: 'qrData', headerName: 'QR데이타', width: 130 },
				{ field: 'pin', headerName: 'PIN', width: 130 },
				{ field: 'aplyDttm', headerName: '신청 일시', width: 130, type: 'date' },
				{ field: 'authYn', headerName: '인증 여부', width: 130 },
				{ field: 'authDttm', headerName: '인증 일시', width: 130 },
				{ field: 'regDttm', headerName: '등록 일시', width: 130 },
				{ field: 'actions', headerName: '설정', width: 130 },
			],
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
		
	}

	render() {
		return (
			<div style={{ height: 400, width: '100%' }}>
				{/* <ThemeProvider theme={theme}> */}
					<DataGrid
						rows={this.state.data}
						columns={this.state.columns}
						pageSize={5}
						rowsPerPageOptions={[5]}
						checkboxSelection
					/>
				{/* </ThemeProvider> */}
			</div>
		);
	}
}

export default DataTable;