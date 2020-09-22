import { Box, Card, CardContent, CardMedia, Chip, Grid, Paper, Typography } from "@material-ui/core"
import React from "react"
import { graphql } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
  },
  projects: {
    border: "2px solid grey",
    borderRadius: "10px",
  },
  cover: {
    width: 150,
  },
  chip: {
    fontSize: "0.75rem",
    marginRight: "2px",
  },
}))

const Portfolio = (props) => {
  const classes = useStyles()

  const {
    recent: { nodes: recent },
  } = props.data

  return (
    <Grid item container direction="column" alignItems="center" spacing={4}>
      <Grid item>
        <Typography variant="h4">Portfolio</Typography>
      </Grid>
      <Grid
        item
        container
        direction="column"
        spacing={2}
        md={8}
        sm={10}
        xs={12}
        className={classes.projects}
      >
        {recent.map((i) => {
          return (
            <Grid item key={i.id}>
              <Paper>
                <Card className={classes.card}>
                  <CardMedia
                    src={i.cover.fluid.src}
                    component="img"
                    className={classes.cover}
                  />
                  <CardContent>
                    <Typography>{i.title}</Typography>
                    <Typography>{i.intro.internal.content}</Typography>
                    <Box display="flex" flexWrap="wrap" mt={1}>
                      {i.skills.map((i) => {
                        return (
                            <Chip
                                key={i}
                            className={classes.chip}
                            label={i}
                            color="primary"
                            size="small"
                            variant="outlined"
                          ></Chip>
                        )
                      })}
                    </Box>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          )
        })}
        <Grid item container justify="flex-end">
          <Grid item>Button 1</Grid>
          <Grid item>Button 2</Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Portfolio
