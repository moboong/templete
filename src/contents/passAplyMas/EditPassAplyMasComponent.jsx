import React, { Component } from 'react';
import ApiService from "../../ApiService";

import {withRouter} from '../../withRouter';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class EditPassAplyMasComponent extends Component{

  constructor(props){
    super(props);

    this.state = {
            userId: '',
            aplySeq: '',
            sysId: '',
            secKey: '',
            qrData: '',
            pin: '',
            authYn: '',
            authDttm: '',
            message: null
    }
  }

  componentDidMount(){
    this.loadPAM();
  }

  loadPAM = () => {
    ApiService.fetchPAMByAplySeq(window.localStorage.getItem("aplySEQ"))
      .then( res => {
        let pam = res.data;
        this.setState({
          userId: pam.USER_ID,
          aplySeq: pam.APLY_SEQ,
          sysId: pam.SYS_ID,
          secKey: pam.SEC_KEY,
          qrData: pam.QR_DATA,
          pin: pam.PIN,
          authYn: pam.AUTH_YN,
          authDttm: pam.AUTH_DTTM
        })
      })
      .catch(err => {
        console.log('loadPAM() 에러', err);
      });
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  savePAM = (e) => {
    e.preventDefault();

    let pam = {
            userId: this.state.userId,
            aplySeq: this.state.aplySeq,
            sysId: this.state.sysId,
            secKey: this.state.secKey,
            qrData: this.state.qrData,
            pin: this.state.pin,
            authYn: this.state.authYn,
            authDttm: this.state.authDttm
    }

    ApiService.editPAM(pam)
      .then( res => {
        this.setState({
          message : pam.aplySeq + ' : 정보가 수정되었습니다.'
        })
        console.log(this.state.message);
        //this.props.history.push('/users');
        this.props.navigate('/passAplyMas');
      })
      .catch(err => {
        console.log('savePAM() 에러', err);
      })
  }

  render(){
    return(
      <div>
        <Typography variant="h4" style={style}>Edit PAM</Typography>
        <form>
            <TextField type="text" name="userId" readOnly={true} 
fullWidth margin="normal" value={this.state.userId} />
            
            <TextField type="number" name="aplySeq" readOnly={true} 
fullWidth margin="normal" value={this.state.aplySeq} />
            
            <TextField type="text" name="sysId" readOnly={true} 
 fullWidth margin="normal" value={this.state.sysId} />

            <TextField type="text" placeholder="Edit your first secKey" name="secKey" 
fullWidth margin="normal" value={this.state.secKey} onChange={this.onChange} />

            <TextField type="text" placeholder="Edit your qrData" name="qrData" 
fullWidth margin="normal" value={this.state.qrData} onChange={this.onChange} />

            <TextField type="text" placeholder="Edit your pin" name="pin" 
fullWidth margin="normal" value={this.state.pin} onChange={this.onChange} />

            <TextField type="text" placeholder="Edit your authYn" name="authYn" 
fullWidth margin="normal" value={this.state.authYn} onChange={this.onChange} />

          <Button variant="contained" color="primary" onClick={this.savePAM}>Save</Button>

        </form>
      </div>
    );
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default withRouter(EditPassAplyMasComponent);