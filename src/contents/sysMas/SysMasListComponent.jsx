import React, { Component } from 'react';
import ApiService from "../../ApiService";

import {withRouter} from '../../withRouter';

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CreateIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'

class SysMasListComponent extends Component{

  constructor(props){
    super(props);
    this.state = {
      sms: [],
      message: null
    }
  }

  componentDidMount(){
    this.reloadSMList();
  }

  reloadSMList = () => {
    ApiService.fetchSMs()
      .then( res => {
        this.setState({
            sms: res.data
        })
      })
      .catch(err => {
        console.log('reloadSMList() Error!', err);
      })
  }
  
  reloadSomeSMList = () => {
      
      let parameter = {
              SYS_ID: '02',
              BIZ_NM: '',
              SYS_NM: '',
              SYS_ST: '',
              PASS_PTN_TYPE: '',
              PASS_SIZE: '',
              QR_USE_YN: '',
              REG_DTTM: ''
      }
      
      ApiService.fetchSomeSMs(parameter)
        .then( res => {
          this.setState({
              sms: res.data
          })
        })
        .catch(err => {
          console.log('reloadSMList() Error!', err);
        })
    }

  deleteSM = (sysID) => {
    ApiService.deleteSM(sysID)
      .then( res => {
        this.setState({
          message: 'SM Deleted Successfully.'
        });
        this.setState({
            sms: this.state.sms.filter( sm =>
            sm.SYS_ID !== sysID)
          });
        })
      .catch(err => {
        console.log('deleteSM() Error!', err);
      })
  }
  
  editSM = (sysID) => {
    window.localStorage.setItem("sysID", sysID);
    this.props.navigate('/edit-sysMas');
  }

  addSM = () => {
    
    window.localStorage.removeItem("sysID");
    this.props.navigate('/add-sysMas')
  }

  render(){
      
    return(
      <div>
        <Typography variant="h4" style={style}>SM List</Typography>
        <Button variant="contained" color="primary" onClick={this.addSM}> SM 추가하기 </Button>&nbsp;
        <Button variant="contained" color="primary" onClick={this.reloadSMList}> 전체출력 </Button>&nbsp;
        <Button variant="contained" color="primary" onClick={this.reloadSomeSMList}> 조건출력 </Button>&nbsp;
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SYS_ID</TableCell>
              <TableCell align="right">BIZ_NM</TableCell>
              <TableCell align="right">SYS_NM</TableCell>
              <TableCell align="right">SYS_ST</TableCell>
              <TableCell align="right">PASS_PTN_TYPE</TableCell>
              <TableCell align="right">PASS_SIZE</TableCell>
              <TableCell align="right">QR_USE_YN</TableCell>
              <TableCell align="right">REG_DTTM</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.sms.map( sm => 
              <TableRow key={sm.SYS_ID}>
                <TableCell component="th" scope="sm">{sm.SYS_ID}</TableCell>
                <TableCell align="right">{sm.BIZ_NM}</TableCell>
                <TableCell align="right">{sm.SYS_NM}</TableCell>
                <TableCell align="right">{sm.SYS_ST}</TableCell>
                <TableCell align="right">{sm.PASS_PTN_TYPE}</TableCell>
                <TableCell align="right">{sm.PASS_SIZE}</TableCell>
                <TableCell align="right">{sm.QR_USE_YN}</TableCell>
                <TableCell align="right">{sm.REG_DTTM}</TableCell>
                <TableCell align="right" onClick={()=> this.editSM(sm.SYS_ID)}>
                  <CreateIcon />
                </TableCell>
                <TableCell align="right" onClick={()=> this.deleteSM(sm.SYS_ID)}>
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

export default withRouter(SysMasListComponent);