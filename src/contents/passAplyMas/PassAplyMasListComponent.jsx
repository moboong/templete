import React, { Component } from 'react';
import ApiService from "../../ApiService";

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CreateIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'

import moment from 'moment';

class PassAplyMasListComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			pams: [],
			message: null
		}
	}

	componentDidMount() {
		this.reloadPAMList();
	}

	reloadPAMList = () => {
		ApiService.fetchPAMs()
			.then(res => {
				this.setState({
					pams: res.data
				})
			})
			.catch(err => {
				console.log('reloadPAMList() Error!', err);
			})

	}

	reloadSomePAMList = () => {

		let parameter = {
			startDate: new Date(),
			endDate: new Date()
		}

		ApiService.fetchSomePAMs(parameter)
			.then(res => {
				this.setState({
					pams: res.data
				})
			})
			.catch(err => {
				console.log('reloadPAMList() Error!', err);
			})
	}

	deletePAM = (aplySEQ) => {
		ApiService.deletePAM(aplySEQ)
			.then(res => {
				this.setState({
					message: 'PAM Deleted Successfully.'
				});
				this.setState({
					pams: this.state.pams.filter(pam =>
						pam.APLY_SEQ !== aplySEQ)
				});
			})
			.catch(err => {
				console.log('deletePAM() Error!', err);
			})
	}

	editPAM = (SEQ) => {
		window.localStorage.setItem("aplySEQ", SEQ);
		this.props.navigate('/edit-passAplyMas');
	}

	addPAM = () => {
		window.localStorage.removeItem("aplySEQ");
		this.props.navigate('/add-passAplyMas')
	}

	render() {

		return (
			<div>
				<Typography variant="h4" style={style}>PAM List</Typography>
				<Button variant="contained" color="primary" onClick={this.addPAM}> PAM 추가하기 </Button>&nbsp;
				<Button variant="contained" color="primary" onClick={this.reloadPAMList}> 전체출력 </Button>&nbsp;
				<Button variant="contained" color="primary" onClick={this.reloadSomePAMList}> 조건출력 </Button>&nbsp;
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Serial_num</TableCell>
							<TableCell>사용자 ID</TableCell>
							<TableCell>SYS_ID</TableCell>
							<TableCell align="right">시크릿 키</TableCell>
							<TableCell align="right">QR 데이타</TableCell>
							<TableCell align="right">PIN</TableCell>
							<TableCell align="right">신청일시</TableCell>
							<TableCell align="right">N/Y</TableCell>
							<TableCell align="right">인증일시</TableCell>
							<TableCell align="right">등록일시</TableCell>
							<TableCell align="right">Edit</TableCell>
							<TableCell align="right">Delete</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{this.state.pams.map(pam =>
							<TableRow key={pam.APLY_SEQ}>
								<TableCell component="th" scope="pam">{pam.APLY_SEQ}</TableCell>
								<TableCell align="right">{pam.USER_ID}</TableCell>
								<TableCell align="right">{pam.SYS_ID}</TableCell>
								<TableCell align="right">{pam.SEC_KEY}</TableCell>
								<TableCell align="right">{pam.QR_DATA}</TableCell>
								<TableCell align="right">{pam.PIN}</TableCell>
								<TableCell align="right">{pam.APLY_DTTM}</TableCell>
								<TableCell align="right">{pam.AUTH_YN}</TableCell>
								<TableCell align="right">{pam.AUTH_DTTM}</TableCell>
								<TableCell align="right">{pam.REG_DTTM}</TableCell>
								<TableCell align="right" onClick={() => this.editPAM(pam.APLY_SEQ)}>
									<CreateIcon />
								</TableCell>
								<TableCell align="right" onClick={() => this.deletePAM(pam.APLY_SEQ)}>
									<DeleteIcon />
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		);

	}

}

const style = {
	display: 'flex',
	justifyContent: 'center'
}

export default PassAplyMasListComponent;