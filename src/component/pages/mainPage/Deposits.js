import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>이번 달 신규 등록 건수</Title>
      <Typography component="p" variant="h4">
        347 건
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        2022-02-22 00:00 기준
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          등록 통계 더보기
        </Link>
      </div>
    </React.Fragment>
  );
}