import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import { 
  Container,
  ListGroup,
  ListGroupItem,
  Button
 } from 'reactstrap';

 import { getItems, deleteItem } from '../actions/itemActions';

 class ShoppingList extends Component {
   constructor() {
     super();
     this.state = {
       items: []
     };
   }

   onDeleteClick = id => this.props.deleteItem(id);

   componentDidMount() {
     this.props.getItems();
   }

   render() {
     const { items } = this.props.item;

     return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
     );
   }
 };

 ShoppingList.propTypes = {
   getItems: PropTypes.func.isRequired,
   item: PropTypes.object.isRequired
 };

 const mapStateToProps = state => ({
   item: state.item
 });

 export default connect(
   mapStateToProps,
   { getItems, deleteItem }
 )(ShoppingList);