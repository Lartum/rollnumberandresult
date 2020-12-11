import React, { useState } from 'react'
import { Button, 
        makeStyles, 
        TextField, 
        Paper, 
        TableContainer, 
        Table, 
        TableHead, 
        TableRow, 
        TableCell,
        IconButton,
        Collapse,
        Typography
        } from '@material-ui/core'
import { Alert } from '@material-ui/lab'      
import CloseIcon from '@material-ui/icons/Close';

import axios from 'axios'

import ResultTable from './ResultTable'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '1%'
    },
    form: {
        textAlign: 'center',
        padding: '2%'
    },
    inputField: {
        width: '50%',
        marginBottom: '1%'
    },
    header:{
        textAlign:'center',
        marginTop:'2%'
    }
}))

const columns = [
    {
        id: 'rollno',
        label: 'Roll No',
        mindWidth: 170
    },
    {
        id: 'result',
        label: 'Result',
        mindWidth: 170
    }
]


const Home = () => {
    const [loading, setLoading] = useState(false)
    const [disableButton, setDisableButton] = useState(false)
    const [results, setResult] = useState(null)
    const [rollnos, setrollnos] = useState(null)
    const [error, setError ] = useState(null)
    const [closeError, setCloseError] = useState(true)

    const classes = useStyles()

    const handleSubmit = async () => {
        if(!rollnos){
            setError('Enter the Roll Numbers')
            setCloseError(false)
            return
        }
        const notRollNumber = rollnos.split(',').some(onlyNumbers)
        if(notRollNumber){
            setError('Please enter only roll numbers, seperated by commas as: 23, 12, 13')
            setCloseError(false)
            return
        }
        setLoading(true)
        setDisableButton(true)
        setResult(null)
        const response = await axios.post('/api/result', { rollnos })
        if (response) {
            setResult(response.data)
            setLoading(false)
            setDisableButton(false)
        }

    }

    const onlyNumbers = (rollnumber) => {
        const validNumber = parseInt(rollnumber) 
        if(typeof(validNumber) !== Number){
            return false
        } 
        return true
    }
    return (
        <Paper className={classes.root}>
                            <Collapse
                                in={!closeError}
                            >
                             <Alert 
                                severity='error' 
                                action={
                                    <IconButton
                                    color='inherit'
                                    size = 'small'
                                    onClick={()=> {setCloseError(true)}}
                                    >
                                        <CloseIcon fontSize= 'inherit' />
                                    </IconButton>
                                    }
                                >
                                    {error}
                                </Alert>
                                </Collapse>
            <header className={classes.header}>
                <Typography variant='h4' gutterBottom>
                    Enter the roll numbers
                </Typography>
            </header>                 
            <form className={classes.form}>
                <TextField
                    className={classes.inputField}
                    label='Roll Numbers'
                    variant='outlined'
                    color='secondary'
                    onChange={(e) => setrollnos(e.target.value)}
                />
                <div>
                    <Button
                        variant='outlined'
                        color='secondary'
                        disabled={disableButton}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </div>
                
            </form>
                <TableContainer component={Paper}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead> 
                        { loading ? 
                            <ResultTable/> 
                            : <></>  
                        }   
                        { results ?
                            <ResultTable results={results}/>
                            :<></>
                        }
                    </Table>
                </TableContainer>
           
        </Paper>
    )
}

export default Home;