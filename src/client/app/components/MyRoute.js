import React from 'react';
import { Route } from 'react-router-dom'


const MyRoute = (props) => {

  const { component, ...rest } = props
  const Component = component;
  return (
    
    <Route {...rest} render={() => {

      return <Component {...rest} />

    }}/>

  )
}

export default MyRoute