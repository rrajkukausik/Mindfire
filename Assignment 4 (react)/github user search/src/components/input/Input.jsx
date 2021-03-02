import React from 'react'

const Input = (props) => {
    return (
        <>
            <input type="text" value={props.query}
                onChange={e => props.onChangeSearch(e.target.value)}
                placeholder="Enter the username here !!!" />
        </>
    )
}

export default Input
