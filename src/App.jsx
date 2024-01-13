import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  ThemeProvider,
  CardMedia,
  createTheme,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import Styles from "./Styles";
// import { orange, lime } from "@mui/material/colors";

const tema = createTheme({
  palette: {
    primary: {
      main: '#f50057'
    },
    secondary: {
      main: '#f598ab'
    },
  },
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  return (
    <>
      <ThemeProvider theme={tema}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera sx={Styles.icon} />
            <Typography variant="h6">Álbum de Foto</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div>
            <Container maxWidth="sm" sx={Styles.container}>
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Álbum de Foto
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Olá todo mundo. Esse é um álbum de foto e eu to tentando fazer
                essa frase o maior possível para que possamos ver como fica na
                página
              </Typography>

              <div style={Styles.buttons}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Veja minhas fotos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Ação secundária
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container sx={Styles.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card sx={Styles.card}>
                    <CardMedia
                      sx={Styles.cardMedia}
                      image="http://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent sx={Styles.cardContent}>
                      <Typography gutterBottom variant="h5">
                        Heading
                      </Typography>
                      <Typography>
                        Esse é um card de mídia. Você pode usar essa seção para
                        descrever o conteúdo.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Ver
                      </Button>
                      <Button size="small" color="secondary">
                        Editar
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <footer style={Styles.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary">
            Algo aqui para dar um propósito ao footer
          </Typography>
        </footer>
      </ThemeProvider>
    </>
  );
}

export default App;
