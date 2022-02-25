import React, { Component } from 'react';
import ApiService from "../../ApiService";

import {withRouter} from '../../withRouter';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AddPassAplyMasComponent extends Component{

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

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
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
            authDttm: this.state.authDttm,
    }

    ApiService.addPAM(pam)
    .then( res => {
        this.setState({
          message: pam.aplySeq + ' : 성공적으로 등록되었습니다.'
        })
        console.log(this.state.message);
        //this.props.history.push('/users');
        this.props.navigate('/passAplyMas');
    })
    .catch( err => {
      console.log('savePAM() 에러', err);
    });

  }

  render(){
    return(
      <div>
        <Typography variant="h4" style={style}>Add PAM</Typography>
        <form style={formContainer}>
         
            <TextField type="text" placeholder="please input your userId" name="userId" 
fullWidth margin="normal" value={this.state.userId} onChange={this.onChange} />

            <TextField type="number" placeholder="please input your aplySeq" name="aplySeq" 
fullWidth margin="normal" value={this.state.aplySeq} onChange={this.onChange} />

            <TextField type="text" placeholder="please input your sysId" name="sysId" 
fullWidth margin="normal" value={this.state.sysId} onChange={this.onChange} />

            <TextField type="text" placeholder="please input your secKey" name="secKey" 
fullWidth margin="normal" value={this.state.secKey} onChange={this.onChange} />

            <TextField type="text" placeholder="please input your qrData" name="qrData" 
fullWidth margin="normal" value={this.state.qrData} onChange={this.onChange} />

            <TextField type="text" placeholder="please input your pin" name="pin" 
fullWidth margin="normal" value={this.state.pin} onChange={this.onChange} />
                    
            <TextField type="text" placeholder="please input your authYn" name="authYn" 
fullWidth margin="normal" value={this.state.authYn} onChange={this.onChange} />
            
            <TextField type="text" placeholder="please input your authDttm" name="authDttm" 
fullWidth margin="normal" value={this.state.authDttm} onChange={this.onChange} />

          <Button variant="contained" color="primary" onClick={this.savePAM}>Save</Button>

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

export default withRouter(AddPassAplyMasComponent);