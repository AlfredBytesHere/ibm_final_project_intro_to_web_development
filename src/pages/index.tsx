import Head from "next/head";
import { useForm, Controller } from "react-hook-form";
import {
  Avatar,
  Box,
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Fab,
  Zoom,
  FormControl,
  Grid,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";
import { ArrowUpward } from "@mui/icons-material";
import { blue } from "@mui/material/colors";

export default function Home() {
  const { control, handleSubmit, reset } = useForm();

  const [isDialogOpen, setDialogOpen] = React.useState(false);

  const onSubmit = (data) => {
    // Add the new recommendation to the recommendationData array.
    recommendationData.push({ description: data.message });
    // Reset the form fields.
    reset();
    // Open the dialog
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    // Close the dialog
    setDialogOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const skillsData = [
    {
      name: "HTML",
      src: "/html.png",
      experience: "4 years experience",
    },
    {
      name: "CSS",
      src: "/css.png",
      experience: "4 years experience",
    },
    {
      name: "Javascript",
      src: "/js.png",
      experience: "4 years experience",
    },
    {
      name: "Java",
      src: "/java.png",
      experience: "3 years experience",
    },
    {
      name: "NodeJS",
      src: "/nodejs.png",
      experience: "3 years experience",
    },
    {
      name: "Typescript",
      src: "/ts.png",
      experience: "1 year experience",
    },
    {
      name: "ReactJS",
      src: "/reactjs.png",
      experience: "2 years experience",
    },
    {
      name: "NextJS",
      src: "/nextjs.png",
      experience: "2 years experience",
    },
  ];

  const projectsData = [
    {
      title: "E-Library Website",
      description:
        "Developed a cutting-edge application using ReactJS, aims to provide a seamless and immersive reading experience for book enthusiasts, students, and lifelong learners.",
    },
    {
      title: "Web-based POS System",
      description:
        "Revamped the traditional POS System used by third-party application to have their own customized application used by NextJS to streamline their processes.",
    },
    {
      title: "Digital Incorporation CRM Service",
      description:
        "Built up a full-stack application to help make company incorporation seamless with the use of NextJS with Typescript.",
    },
  ];

  const [recommendationData, setRecommendationData] = React.useState([
    {
      description:
        "Working with Alfred as a Full-stack Developer has been an absolute pleasure. With a 3-year diploma in Information Technology, their expertise in software development is evident. They successfully transformed a traditional POS system into a modern web application using the NextJS framework, showcasing their technical skills and creativity.",
    },
    {
      description:
        "Alfred brings a dynamic approach to every project. Their creation of a CRM application using Next TypeScript for company incorporations was nothing short of impressive. The application has streamlined our operations, and Alfred played a pivotal role in achieving this. Their commitment to excellence is truly commendable.",
    },
    {
      description:
        "I've been fortunate to collaborate with Alfred on multiple projects, and their work as a freelance Full-stack Developer consistently impresses me. Their commitment to staying updated with emerging technology trends keeps our projects innovative, and their ability to tackle diverse projects underscores their dedication to their profession.",
    },
  ]);

  return (
    <>
      <Head>
        <title>Alfred Tang's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box>
          <Grid
            container
            mt={"10%"}
            mb={"4%"}
            display={"flex"}
            alignItems={"center"}
            id={"about-me"}
          >
            <Grid item xs={4}>
              <Avatar
                alt="Picture of avatar"
                src="/avatar.png"
                sx={{ width: 250, height: 250, ml: "200px" }}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant={"h3"}
                mr={"200px"}
                fontWeight={600}
                color={"primary"}
              >
                Alfred Tang
              </Typography>
              <Typography variant={"body1"} mt={"2.5%"} mr={"200px"}>
                I am a dedicated Full-stack Developer with a 3-year diploma in
                Information Technology (Software Development Specialization)
                from a local polytechnic. During my final year, I revamped a
                traditional POS system into a web application using the NextJS
                framework. I also created a CRM application with Next TypeScript
                to streamline company incorporations. Currently, I work as a
                freelance Full-stack Developer, constantly exploring emerging
                technology trends while handling ad-hoc projects.
              </Typography>
            </Grid>
          </Grid>

          <Divider />

          <Grid
            container
            mt={"2%"}
            mb={"4%"}
            display={"flex"}
            alignItems={"center"}
            spacing={2}
            width={"98%"}
            ml={"0.5%"}
            mr={"auto"}
            id={"skills"}
          >
            <Grid item xs={12}>
              <Typography
                variant={"h2"}
                textAlign={"center"}
                mb={"2%"}
                fontWeight={600}
                color={'primary'}
              >
                My Skills
              </Typography>
            </Grid>

            {skillsData.map((skill, index) => (
              <Grid item xs={3} key={index}>
                <Card sx={{ padding: "5%" }} elevation={2}>
                  <Avatar
                    alt={skill.name}
                    src={skill.src}
                    sx={{ width: 100, height: 100, m: "0 auto" }}
                  />
                  <Typography
                    variant="h5"
                    fontWeight={600}
                    textAlign={"center"}
                    my={"2.5%"}
                  >
                    {skill.name}
                  </Typography>
                  <Typography variant="h6" textAlign={"center"}>
                    {skill.experience}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Divider />

          <Grid
            container
            mt={"2%"}
            mb={"4%"}
            display={"flex"}
            alignItems={"center"}
            spacing={2}
            width={"98%"}
            ml={"0.5%"}
            mr={"auto"}
            id={"projects"}
          >
            <Grid item xs={12}>
              <Typography
                variant={"h2"}
                textAlign={"center"}
                mb={"2%"}
                fontWeight={600}
                color={'primary'}
              >
                My Projects
              </Typography>
            </Grid>
            {projectsData.map((project, index) => (
              <Grid item xs={12} key={index}>
                <Typography variant={"h4"} fontWeight={500}>
                  {project.title}
                </Typography>
                <Typography component={"ul"} my={"1%"} ml={"1.5%"}>
                  <li>{project.description}</li>
                </Typography>
              </Grid>
            ))}
          </Grid>

          <Divider />

          <Grid
            container
            mt={"2%"}
            mb={"4%"}
            display={"flex"}
            alignItems={"center"}
            spacing={2}
            width={"98%"}
            ml={"0.5%"}
            mr={"auto"}
            id={"recommendations"}
          >
            <Grid item xs={12}>
              <Typography
                variant={"h2"}
                textAlign={"center"}
                mb={"2%"}
                fontWeight={600}
                color={'primary'}
              >
                Recommendations
              </Typography>
            </Grid>
            {recommendationData.map((recommendation, index) => (
              <Grid item xs={4} key={index}>
                <Card sx={{ padding: "5%" }} elevation={2}>
                  <Typography variant="body1" fontWeight={600} my={"2.5%"}>
                    "{recommendation.description}"
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Divider />

          <Grid
            container
            mt={"2%"}
            mb={"6%"}
            display={"flex"}
            alignItems={"center"}
            spacing={2}
            width={"98%"}
            ml={"0.5%"}
            mr={"auto"}
          >
            <Grid item xs={12}>
              <Typography
                variant={"h2"}
                textAlign={"center"}
                mb={"2%"}
                fontWeight={600}
                color={'primary'}
              >
                Leave a Recommendation
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth>
                  <TextField
                    variant={"outlined"}
                    label="Name (optional)"
                    sx={{ mb: "2.5%" }}
                  ></TextField>
                  <Controller
                    name="message"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        variant={"outlined"}
                        label="Message"
                        multiline
                        rows={10}
                        sx={{ mb: "2.5%" }}
                      />
                    )}
                  />
                  <Button type="submit" variant={"contained"}>
                    Submit
                  </Button>
                </FormControl>
              </form>
            </Grid>
          </Grid>

          <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
            <DialogTitle>Thanks for leaving a recommendation!</DialogTitle>
            <DialogContent sx={{ display: "flex", justifyContent: "center" }}>
              <Button onClick={handleCloseDialog} variant="contained">
                Close
              </Button>
            </DialogContent>
          </Dialog>

          <Zoom in={true}>
            <Fab
              size="large"
              aria-label="scroll back to top"
              onClick={scrollToTop}
              color="primary"
              sx={{
                position: "fixed",
                bottom: 16,
                right: 16,
                zIndex: 1000, // Make sure it's above other content
              }}
            >
              <ArrowUpward />
            </Fab>
          </Zoom>
        </Box>
      </main>
    </>
  );
}
