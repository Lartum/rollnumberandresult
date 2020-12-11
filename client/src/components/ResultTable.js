import React from 'react';
import { Box, TableBody, TableCell, TableRow } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

function ResultTable ({results}) {
    const rows = [1,2,3,4,6,7,8]
    
    return (
                <TableBody>
                   {results ? results.map((result) => {
                                    return(
                                   <TableRow key={Object.keys(result)}>
                                       <TableCell>
                                           {Object.keys(result)}
                                       </TableCell>
                                       <TableCell>
                                           { Object.values(result)[0] === 'Pass' ? 
                                            <Box color='success.main'>Pass</Box> :
                                            <Box color='error.main'>Fail</Box>
                                            }
                                       </TableCell>
                                   </TableRow>
                                    )
                                })
                             :  rows.map((row) => (
                                <TableRow>
                                    <TableCell key={row}><Skeleton width="20%"/></TableCell>
                                    <TableCell key={row*100}><Skeleton width="20%"/></TableCell>
                                </TableRow>
                            ))
                                   
                            }
                </TableBody>
    );
}

export default ResultTable;