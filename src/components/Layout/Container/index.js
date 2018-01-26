// @flow

import * as React from 'react'

import './Container.css'

const Container = ({ 
  children 
}: { 
  children: React.Node 
}) => {
  return <div className="Container">{children}</div>
}

export default Container