import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  onAdd: () => dispatch({type: 'ADD'}),
  onRemove: () => dispatch({type: 'REMOVE'}),
})

const Counter = ({counter, onAdd, onRemove}) => {
  return (
    <>
      <button onClick={onAdd}>Add</button>
      <button onClick={onRemove}>Remove</button>
      <p>{counter}</p>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
