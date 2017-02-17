import React from 'react';
import moment from 'moment';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const StockTable = (props) => {
  const renderRows = () => props.items.map((item)=> (
    <TableRow key={item.id}>
      <TableRowColumn>{item.name}</TableRowColumn>
      <TableRowColumn>{item.description}</TableRowColumn>
      <TableRowColumn>${item.price}</TableRowColumn>
      <TableRowColumn>{moment(item.availabeDate).format('MMMM Do YYYY')}</TableRowColumn>
      <TableRowColumn>{(item.taxable) ? "Yes" : "No"}</TableRowColumn>
    </TableRow>
  ));

  return (<Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Description</TableHeaderColumn>
        <TableHeaderColumn>Price</TableHeaderColumn>
        <TableHeaderColumn>Available Date</TableHeaderColumn>
        <TableHeaderColumn>Taxable</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      { renderRows() }
    </TableBody>
  </Table>
)
};

export default StockTable;
