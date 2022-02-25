import React, { Component } from 'react';
import ApiService from "../../ApiService";

import {withRouter} from '../../withRouter';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AddSysMasComponent extends Component{

  constructor(props){
    super(props);

    this.state = {
      sysId: '',
      bizNm: '',
      sysNm: '',
      sysSt: '',
      passPtnType: '',
      passSize: '',
      qrUseYn: '',
      regDttm: '',
      message: null
    }

  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  saveSM = (e) => {
    e.preventDefault();

    let sm = {
            sysId: this.state.sysId,
            bizNm: this.state.bizNm,
            sysNm: this.state.sysNm,
            sysSt: this.state.sysSt,
            passPtnType: this.state.passPtnType,
            passSize: this.state.passSize,
            qrUseYn: this.state.qrUseYn,
            regDttm: this.state.regDttm,
    }

    ApiService.addSM(sm)
    .then( res => {
        this.setState({
          message: sm.sysId + ' : 성공적으로 등록되었습니다.'
        })
        console.log(this.state.message);
        this.props.navigate('/sysMas');
    })
    .catch( err => {
      console.log('saveSM() 에러', err);
    });

  }

  render(){
    return(
      <div>
        <Typography variant="h4" style={style}>Add SM</Typography>
        <form style={formContainer}>
         
            <TextField type="text" placeholder="please input your sysId" name="sysId" 
fullWidth margin="normal" value={this.state.sysId} onChange={this.onChange} />

            <TextField type="number" placeholder="please input your bizNm" name="bizNm" 
fullWidth margin="normal" value={this.state.bizNm} onChange={this.onChange} />

            <TextField type="text" placeholder="please input your sysNm" name="sysNm" 
fullWidth margin="normal" value={this.state.sysNm} onChange={this.onChange} />

            <TextField type="text" placeholder="please input your sysSt" name="sysSt" 
fullWidth margin="normal" value={this.state.sysSt} onChange={this.onChange} />

            <TextField type="text" placeholder="please input your passPtnType" name="passPtnType" 
fullWidth margin="normal" value={this.state.passPtnType} onChange={this.onChange} />

            <TextField type="text" placeholder="please input your passSize" name="passSize" 
fullWidth margin="normal" value={this.state.passSize} onChange={this.onChange} />
                    
            <TextField type="text" placeholder="please input your qrUseYn" name="qrUseYn" 
fullWidth margin="normal" value={this.state.qrUseYn} onChange={this.onChange} />
            
            <TextField type="text" placeholder="please input your regDttm" name="regDttm" 
fullWidth margin="normal" value={this.state.regDttm} onChange={this.onChange} />

          <Button variant="contained" color="primary" onClick={this.saveSM}>Save</Button>

        </form>
      </div>
    );
  }
}

const formContainer = {
  display: 'flex',
  flexFlow: 'row wrap'
}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default withRouter(AddSysMasComponent);