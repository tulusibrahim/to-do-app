import '../index.css'
import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react';
import { InputGroup, Input, InputRightElement, Box, Tooltip, useToast } from '@chakra-ui/react';
import { CheckIcon, DeleteIcon, CheckCircleIcon } from "@chakra-ui/icons"

const Body = (props) => {
    const [data, setData] = useState('')
    const toast = useToast()

    const ListItem = (params) => {
        return (
            <div style={{ width: '80%', height: 'auto', alignItems: 'flex-start' }}>
                {
                    props.data.todo.length > 0 ?
                        <Box fontSize={[20, 24, 28, 32]} style={{ fontWeight: '700', marginBottom: 10 }}>To do</Box>
                        :
                        <Box fontSize={[20, 24, 28, 32]} style={{ fontWeight: '700', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>Nothing to do &nbsp;<CheckIcon /></Box>
                }
                {
                    props.data.todo.map((item, key) => (
                        <div key={key} style={{ color: 'whitesmoke', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'green', width: '100%', marginBottom: 5, padding: 10, borderRadius: 10 }}>
                            <Box fontSize={[16, 20, 22, 24]}>
                                {key + 1}. {item.data}
                            </Box>
                            <div style={{ width: '6%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Tooltip label="Delete this task">
                                    <DeleteIcon onClick={() => props.deletepost(item.id)} />
                                </Tooltip>
                                <Tooltip label="Finish this task">
                                    <CheckCircleIcon onClick={() => props.done(item)} />
                                </Tooltip>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }

    const TaskDone = (params) => {
        return (
            <div style={{ width: '80%', height: 'auto', alignItems: 'flex-start' }}>
                {
                    props.data.done.length > 0 &&
                    // <div style={{ fontWeight: '700', fontSize: 24, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Nothing to do &nbsp;<CheckIcon /></div>
                    // :
                    <div style={{ fontWeight: '700', fontSize: 24, marginBottom: 10 }}>Done</div>

                }
                {
                    props.data.done.map((item, key) => (
                        <div key={key} style={{ textDecoration: 'line-through', opacity: .6, color: 'whitesmoke', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'rgb(15, 184, 15)', width: '100%', marginBottom: 5, padding: 10, borderRadius: 10 }}>
                            <div>
                                {key + 1}. {item.data}
                            </div>
                            <div style={{ width: '3%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Tooltip label="Delete this task from list">
                                    <DeleteIcon onClick={() => props.deleteFromDone(item)} />
                                </Tooltip>
                                {/* <CheckCircleIcon onClick={() => props.done(item)} /> */}
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }


    const submitData = (params) => {
        params && params.preventDefault()
        if (data === '') {
            toast({
                description: "Task cannot be empty.",
                status: "error",
                position: 'bottom-left',
                isClosable: true,
            })
            return
        }
        let addNew = {
            data: data,
            id: Date.now()
        }
        props.addpost(addNew)
        setData('')
    }


    useEffect(() => {
        setData('')
    }, [])

    return (
        <Box className="bodywrapper" bg="blue.600">
            <Box className="body">
                <Box style={{ flexDirection: 'row', width: '70%', height: '100%', justifyContent: 'center', display: 'flex', margin: 10 }}>
                    <form onSubmit={(e) => submitData(e)} style={{ width: '80%' }}>
                        <InputGroup>
                            <Input focusBorderColor="green.400" placeholder="Add item" onChange={e => setData(e.target.value)} value={data} />
                            <InputRightElement children={<CheckIcon color="green.100" onClick={() => submitData()} />} />
                        </InputGroup>
                    </form>
                </Box>
                <ListItem />
                <TaskDone />
            </Box>
        </Box>
    )
}


const mapStateToProps = (state) => {
    return {
        data: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addpost: (data) => dispatch({ type: "ADD", payload: data }),
        deletepost: (data) => dispatch({ type: "DELETE", payload: data }),
        done: (data) => dispatch({ type: "DONE", payload: data }),
        deleteFromDone: (data) => dispatch({ type: "DELETE_FROM_DONE", payload: data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)