import React, { Children } from 'react'
import { LayoutStyle } from './LayoutStyle'
import Leftbar from './Leftbar'

function Layout({children}) {
    const classes= LayoutStyle()
  return (
    <div className={classes.root}>
        <Leftbar/>
        <main >
        {children}

        
        </main></div>
  )
}

export default Layout