import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";

const styles = (theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: "flex",
    position: "relative",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={`${process.env.PUBLIC_URL}/images/productCurvyLines.png`}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={`${process.env.PUBLIC_URL}/images/discuss-issue.svg`}
                alt="forum"
              />
              <Typography variant="h6" className={classes.title}>
                Question and Answer platform
              </Typography>
              <Typography variant="h5">
                TutMe has a specialized Q and A platform that allows students to
                ask questions and tutors to answer them. Students can get their
                doubts cleared on the platform, while tutors are verified by
                their ability to help students. The best thing? It's free!
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={`${process.env.PUBLIC_URL}/images/nerd-male-profile-avatar.svg`}
                alt="tutor"
              />
              <Typography variant="h6" className={classes.title}>
                The best tutors
              </Typography>
              <Typography variant="h5">
                From tutors that specialize in calculus to cell biology, we have
                them all! Our Q and A platform ensures that the best tutors who
                are the best in their various domains are easily discoverable.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={`${process.env.PUBLIC_URL}/images/productValues3.svg`}
                alt="wallet"
              />
              <Typography variant="h6" className={classes.title}>
                Low costs
              </Typography>
              <Typography variant="h5">
                Leave the days where you paid money to listen to a tutor drone
                on and on about things that you already knew behind! Pay for
                only topics that you you need help in, and spend the rest on
                your time and money on other things! Moreover, with our low
                commission rates, we are definitely a bang for your buck!
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
