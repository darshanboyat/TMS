import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';

export default function BasicTable({ value}) {
    return (<>
        <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 350, ml: { xs: 0, md: 80 } }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>S. No.</TableCell>
                        <TableCell align="right">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {value.length < 1 ? <TableCell align="left">Not added team members yet</TableCell> :
                        value.map((email, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell align="right">{email}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
    );
}
