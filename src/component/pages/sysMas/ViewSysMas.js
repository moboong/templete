import React, { Component } from 'react';
import DataTable from "./DataTable";
import { DataGrid } from '@mui/x-data-grid';

import Button from '@mui/material/Button';
import ApiService from '../../../ApiService';

class ViewSysMas extends Component {
    
    constructor(props){
        super(props);
        this.state = {
          columns:[],
          rows: [],
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
                rows: res.data
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
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.addSM} > 시스템 원장 추가 </Button>&nbsp;
                {/* <DataTable /> */}
                <DataGrid
						rows={this.state.rows}
						columns={this.state.columns}
						pageSize={5}
						rowsPerPageOptions={[5]}
						checkboxSelection
					/>
            </div>
        );
    } 
}

export default ViewSysMas;