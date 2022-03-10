import React, { Component } from 'react';
import DataTable from "./DataTable";
import Button from '@mui/material/Button';
import ApiService from '../../../ApiService';

class ViewPassAplyMas extends Component {

    render(){
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.addSM} > PASS 신청 원장 추가 </Button>&nbsp;
                <DataTable />
            </div>
        );
    }
}

export default ViewPassAplyMas;