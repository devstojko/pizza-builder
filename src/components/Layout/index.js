// @flow

import * as React from 'react'

import './Layout.css'

const Layout = ({
  children
}: {
  children: React.Node
}) => <div className="Layout">{children}</div>

export default Layout;