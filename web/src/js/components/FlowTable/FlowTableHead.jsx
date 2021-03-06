import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import columns from './FlowColumns'

import { setSort } from "../../ducks/flows"

FlowTableHead.propTypes = {
    onSort: PropTypes.func.isRequired,
    sortDesc: React.PropTypes.bool.isRequired,
    sortColumn: React.PropTypes.string,
}

function FlowTableHead({ sortColumn, sortDesc, onSort }) {
    const sortType = sortDesc ? 'sort-desc' : 'sort-asc'

    return (
        <tr>
            {columns.map(Column => (
                <th className={classnames(Column.headerClass, sortColumn === Column.name && sortType)}
                    key={Column.name}
                    onClick={() => onSort({ sortColumn: Column.name, sortDesc: Column.name !== sortColumn ? false : !sortDesc })}>
                    {Column.headerName}
                </th>
            ))}
        </tr>
    )
}

export default connect(
    state => ({
        sortDesc: state.flows.sort.sortDesc,
        sortColumn: state.flows.sort.sortColumn,
    }),
    {
        onSort: setSort,
    }
)(FlowTableHead)
