import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleIcon from "@mui/icons-material/People";

function Dashboard() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard do Sistema
      </Typography>

      <Grid container spacing={3}>
        {/* Card de Alunos */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <SchoolIcon fontSize="large" />
              <Typography variant="h6">Alunos</Typography>
              <Typography>Gerenciar alunos cadastrados</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card de Cursos */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <MenuBookIcon fontSize="large" />
              <Typography variant="h6">Cursos</Typography>
              <Typography>Gerenciar cursos</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card de Professores */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <PeopleIcon fontSize="large" />
              <Typography variant="h6">Professores</Typography>
              <Typography>Gerenciar professores</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;