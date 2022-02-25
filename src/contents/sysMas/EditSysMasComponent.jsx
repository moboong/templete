import React, { Component } from 'react';
import ApiService from "../../ApiService";

import {withRouter} from '../../withRouter';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class EditSysMasComponent extends Component{

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

  componentDidMount(){
    this.loadSM();
  }

  loadSM = () => {
    ApiService.fetchSMBySysId(window.localStorage.getItem("sysID"))
      .then( res => {
        let sm = res.data;
        this.setState({
            sysId: sm.SYS_ID,
            bizNm: sm.BIZ_NM,
            sysNm: sm.SYS_NM,
            sysSt: sm.SYS_ST,
            passPtnType: sm.PASS_PTN_TYPE,
            passSize: sm.PASS_SIZE,
            qrUseYn: sm.QR_USE_YN,
            regDttm: sm.REG_DTTM
        })
      })
      .catch(err => {
        console.log('loadSM() 에러', err);
      });
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
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
            regDttm: this.state.regDttm
    }

    ApiService.editSM(sm)
      .then( res => {
        this.setState({
          message : sm.sysId + ' : 정보가 수정되었습니다.'
        })
        console.log(this.state.message);
        this.props.navigate('/sysMas');
      })
      .catch(err => {
        console.log('saveSM() 에러', err);
      })
  }

  render(){
    return(
      <div>
        <Typography variant="h4" style={style}>Edit SM</Typography>
        <form>
            <TextField type="text" name="sysId" readOnly={true} 
fullWidth margin="normal" value={this.state.sysId} />
            
            <TextField type="text" placeholder="Edit your first bizNm" name="bizNm" 
fullWidth margin="normal" value={this.state.bizNm} />
            
            <TextField type="text" placeholder="Edit your first sysNm" name="sysNm" 
fullWidth margin="normal" value={this.state.sysNm} />

            <TextField type="text" placeholder="Edit your first sysSt" name="sysSt" 
fullWidth margin="normal" value={this.state.sysSt} onChange={this.onChange} />

            <TextField type="text" placeholder="Edit your passPtnType" name="passPtnType" 
fullWidth margin="normal" value={this.state.passPtnType} onChange={this.onChange} />

            <TextField type="text" placeholder="Edit your passSize" name="passSize" 
fullWidth margin="normal" value={this.state.passSize} onChange={this.onChange} />

            <TextField type="text" placeholder="Edit your qrUseYn" name="qrUseYn" 
fullWidth margin="normal" value={this.state.qrUseYn} onChange={this.onChange} />

          <Button variant="contained" color="primary" onClick={this.saveSM}>Save</Button>

        </form>
      </div>
    );
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default withRouter(EditSysMasComponent);