import React from 'react'

const Filter = ({ data, handler }) => {
    const handleFilterChange = (event) => {
        handler(event.target.value)
    }

    return (
        <div>
            Filter by:
            <input value={data}
                onChange={handleFilterChange}
            />
        </div>
    )
}

export default Filter