setInterval(function () {
    let dataAtual = new Date();

    let segundos = dataAtual.getSeconds().toString().padStart(2, '0');
    let minutos = dataAtual.getMinutes().toString().padStart(2, '0');
    let horas = dataAtual.getHours().toString().padStart(2, '0');
    let dia = dataAtual.getDate().toString().padStart(2, '0');
    let mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
    let ano = dataAtual.getFullYear();

    let dataCheia = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;

    document.getElementById("dataAtual").innerHTML = dataCheia;
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