import { AppBar, Toolbar, Typography, Button } from "@mui/material";

// Adicionamos setTelaAtiva nas propriedades recebidas
function Menu({ onLogout, setTelaAtiva }) {
    return (
        // AppBar cria o menu superior padrão Material Design
        <AppBar position="static">
            <Toolbar>
                {/* Título do sistema */}
                {/* flexGrow empurra os botões para a direita */}
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Sistema de Alunos
                </Typography>

                {/* BOTÕES DE NAVEGAÇÃO */}
                <Button color="inherit" onClick={() => setTelaAtiva("dashboard")}>
                    Dashboard
                </Button>
                
                <Button color="inherit" onClick={() => setTelaAtiva("alunos")}>
                    Alunos
                </Button>

                {/* Botão de logout */}
                <Button color="inherit" onClick={onLogout}>
                    Sair
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Menu;