import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Alunos from "./Alunos"; 
import Menu from "./Menu";

function App() {
  const [logado, setLogado] = useState(false);
  // Estado que controla qual tela exibir dentro do sistema
  const [telaAtiva, setTelaAtiva] = useState("dashboard");

  if (!logado) {
    return <Login onLogin={() => setLogado(true)} />;
  }

  return (
    <>
      {/* Passamos a função setTelaAtiva para o Menu poder mudar a tela */}
      <Menu 
        onLogout={() => setLogado(false)} 
        setTelaAtiva={setTelaAtiva} 
      />
      
      {/* RENDERIZAÇÃO CONDICIONAL */}
      {/* Se a telaAtiva for 'dashboard', mostra Dashboard. Se for 'alunos', mostra Alunos. */}
      {telaAtiva === "dashboard" && <Dashboard />}
      {telaAtiva === "alunos" && <Alunos />}
    </>
  );
}

export default App;