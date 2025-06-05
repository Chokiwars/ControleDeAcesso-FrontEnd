setInterval(() => {
    let dataAtual = new Date();
    document.getElementById("dataAtual").innerHTML = dataAtual.getDate() + "/" + (dataAtual.getMonth() + 1) + "/" + dataAtual.getFullYear() + " " + dataAtual.getHours() + ":" + dataAtual.getMinutes() + ":" + dataAtual.getSeconds();
}, 1000);

async function carregarAlunos() {
  const url = "https://localhost:8080/alunos";
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const alunos = await response.json();
    console.log("Alunos carregados:", alunos);
    array.forEach(alunos => {
      const alunoItem = document.createElement("tr");
      alunoItem.innerHTML = `
        <td>${alunos.id}</td>
        <td>${alunos.nome}</td>
        <td>${alunos.curso}</td>
      `;

      
      document.getElementById("tabela").appendChild(alunoItem);
      
    });

        
  } catch (error) {
    console.error("Erro ao carregar alunos:", error);
    alert("Erro ao carregar alunos. Tente novamente mais tarde.");
  }
  
}