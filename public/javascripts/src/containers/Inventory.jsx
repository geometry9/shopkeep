import React from 'react';
import axios from 'axios';
import styles from './styles.css';
import StockTable from '../components/Table';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const propTypes = {
  stock: React.PropTypes.array
};
class Inventory extends React.Component {
  render(){
    return(
      <div className="content">
        <AppBar
          title="Stock Management"
          iconElementRight={
            <FloatingActionButton mini={true} secondary={true}>
              <ContentAdd />
            </FloatingActionButton>
          }
        />
        <StockTable items={this.props.stock} />
      </div>
    );
  }
}

Inventory.propTypes = propTypes;

export default Inventory;
