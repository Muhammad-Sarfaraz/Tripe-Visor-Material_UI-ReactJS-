import React from 'react'

import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: 24
  }
}))

export default function Header () {
  const classes = useStyles()
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography className={classes.title}>Trip-Visor</Typography>
      </Toolbar>
    </AppBar>
  )
}
