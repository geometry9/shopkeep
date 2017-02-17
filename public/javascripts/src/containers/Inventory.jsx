import React from 'react';
import axios from 'axios';
import styles from './styles.css';
import StockTable from '../components/Table';
import AddItemDialog from '../components/dialogs/AddItemDialog';
import AppBar from 'material-ui/AppBar';

const propTypes = {
  stock: React.PropTypes.array,
  addItem: React.PropTypes.func,
};

class Inventory extends React.Component {

  render(){
    return(
      <div className="content">
        <AppBar
          title="Stock Management"
          iconElementRight={
            <AddItemDialog addItem={this.props.addItem}/>
          }
        />
        <StockTable items={this.props.stock} />
      </div>
    );
  }
}

Inventory.propTypes = propTypes;

export default Inventory;
