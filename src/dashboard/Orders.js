import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    'FQ',
    '핀크',
    379,
    1022,
    '2022-02-28',
  ),
  createData(
    1,
    'HS',
    '하나저축은행',
    221,
    4737,
    '2022-03-02',
  ),
  createData(
    2,
    'HM',
    '하나멤버스',
    197,
    2073,
    '2022-03-10',),
  createData(
    3,
    'HB',
    '하나은행',
    554,
    7787,
    '2022-03-02',
  ),
  createData(
    5,
    'HC',
    '하나카드',
    221,
    4737,
    '2022-03-02',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>시스템 별 등록/인증 현황</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>시스템명</TableCell>
            <TableCell>회사명</TableCell>
            <TableCell>등록 건수</TableCell>
            <TableCell>인증 건수</TableCell>
            <TableCell align="right">등록일시</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        인증 현황 더보기
      </Link>
    </React.Fragment>
  );
}