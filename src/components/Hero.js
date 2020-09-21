import { Grid, Avatar, Breadcrumbs, IconButton, Paper } from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Link from "./Link"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin:theme.spacing(6)
  },
  title: {
    marginTop: 12,
    marginLeft: 12,
    },
    paper: {
        width: '100%',
  }
}))

const Hero = () => {
  const classes = useStyles()

  return (
    <Grid item container md={8}>
      <Paper className={classes.paper} elevation={0}>
        <Grid container direction='column' alignItems="center" spacing={1}>
          <Grid item>
            <Avatar className={classes.avatar}></Avatar>
          </Grid>
          <Grid item>
            <Breadcrumbs>
              <Link color="textPrimary">About</Link>
              <Link color="textPrimary">Portfolio</Link>
              <Link color="textPrimary">Resume</Link>
              <Link color="textPrimary">Contact</Link>
            </Breadcrumbs>
          </Grid>
          <Grid item spacing={2}>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Hero