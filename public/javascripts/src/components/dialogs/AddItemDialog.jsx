import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import styles from './styles.css';
/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
const propTypes = {
  addItem: React.PropTypes.func,
}

class AddItemDialog extends React.Component {
  constructor(){
    super();

    this.state = {
      open: false,
      name: '',
      description: '',
      date: {},
      tax: '',
      price: '',
      errors: {
        name: '',
        description: '',
        price: '',
      }

    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.handleDateFieldChange = this.handleDateFieldChange.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleTextFieldChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleDateFieldChange(e, date) {
    this.setState({ date });
  }

  handleToggleChange(e, tax) {
    this.setState({ tax });
  }

  errors() {
    const keys = Object.keys(this.state.errors);
    const errors = Object.assign({}, this.state.errors);
    let errorFlag = false;

    for (let i = 0; i < keys.length; i++) {
      console.log(errors[keys[i]], keys[i],!errors[keys[i]].length )
      if(!this.state[keys[i]].length){
        errorFlag = true;
        errors[keys[i]] =  "This field is required";
      }else{
        errors[keys[i]] = '';
      }
    }
    if(errorFlag){
      this.setState({ errors });
    }
    console.log(this.state.errors, errorFlag);

    return errorFlag;
  }

  handleSave() {
    if(!this.errors()) {
      const form = Object.assign({}, this.state);
      delete form.open;
      delete form.errors;
      this.props.addItem(form);
      this.handleClose();
    }
  }

  handleOpen()  {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Add"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSave}
      />,
      <FlatButton
        label="Cancel"
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <FloatingActionButton
          mini={true}
          secondary={true}
          onTouchTap={this.handleOpen}
        >
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          className={styles['add-item-dialog']}
          bodyClassName={styles['add-item-dialog-body']}
          titleClassName={styles['add-item-dialog-title']}
          title="Add item"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            hintText="Name"
            name="name"
            className={styles['dialog-text-field']}
            required
            value={this.state['name']}
            onChange={this.handleTextFieldChange}
            errorText={this.state.errors['name']}
          />
          <TextField
            hintText="Description"
            name="description"
            multiLine={true}
            className={styles['dialog-text-field']}
            rows={2}
            required
            value={this.state['description']}
            onChange={this.handleTextFieldChange}
            errorText={this.state.errors['description']}
          />
          <TextField
            hintText="Price"
            name="price"
            className={styles['dialog-text-field']}
            type="number"
            min="1"
            step="any"
            required
            value={this.state['price']}
            onChange={this.handleTextFieldChange}
            errorText={this.state.errors['price']}
          />
          <DatePicker
            hintText="Available Date"
            name="date"
            className={styles['dialog-text-field']}
            required
            value={this.state['date']}
            onChange={this.handleDateFieldChange}
          />
          <Toggle
            label="Taxable"
            name="tax"
            value={this.state['tax']}
            onToggle={this.handleToggleChange}
          />
        </Dialog>
      </div>
    );
  }
}

AddItemDialog.propTypes = propTypes;

export default AddItemDialog
