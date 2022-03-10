import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import { NavLink } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <NavLink to='/sysMas' style={{ textDecoration: 'none', color: 'inherit' }}> 
      <ListItemButton>
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="시스템 원장" />
      </ListItemButton>
    </NavLink>
    <NavLink to='/passMas' style={{ textDecoration: 'none', color: 'inherit' }} >
      <ListItemButton>
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="PASS 원장" />
      </ListItemButton>
    </NavLink>
    <NavLink to='/passAplyMas' style={{ textDecoration: 'none', color: 'inherit' }}>
      <ListItemButton>
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="PASS 신청 원장" />
      </ListItemButton>
    </NavLink>
    <NavLink to='/rootCertMas'>
      <ListItemButton>
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="ROOT 인증서 원장" />
      </ListItemButton>
    </NavLink>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="거래내역 정보" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="거래통계 정보" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssessmentIcon />
      </ListItemIcon>
      <ListItemText primary="로그" />
    </ListItemButton>
   
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      사용자 관리
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="관리자 계정 설정" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <NoAccountsIcon />
      </ListItemIcon>
      <ListItemText primary="블랙리스트 관리" />
    </ListItemButton>
  </React.Fragment>
);