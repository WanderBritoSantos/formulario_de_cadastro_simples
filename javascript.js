let C_nome = document.getElementById("f_nome");
let C_tel = document.getElementById("f_tel");
let btn_C = document.getElementById("btn_form");
let p_back = document.getElementById("p_back");
let t_boby = document.getElementById("tbody"); //elemento pai dos dados da tabela
let i = 0;

btn_C.addEventListener("click", () => {
  if (C_nome.value == "" || C_tel.value == "") {
    alert(" Os campos de nome ou telefone não pode esta vazios!");
    C_nome.value = "";
    C_tel.value = " ";
  } else {
    const nome = C_nome.value;
    const tel = C_tel.value;
    C_nome.value = "";
    C_tel.value = " ";
    registro_nomo_tel(nome, tel);
  }
});

const registro_nomo_tel = (n, t) => {
  const nome = n;
  const tel = t;
  p_back.innerHTML = `Nome: ${nome} e Telefone: ${tel} adicionados com sucesso!`;

  if (i % 2 === 0) {
    let trow = document.createElement("tr");
    trow.className = "section table tr";

    let tdado_nome = document.createElement("td");
    let tdado_tel = document.createElement("td");

    tdado_nome.textContent = nome;
    tdado_tel.textContent = tel;

    trow.appendChild(tdado_nome);

    trow.appendChild(tdado_tel);

    t_boby.appendChild(trow);
    console.log(i);
  } else {
    let trow = document.createElement("tr");
    trow.className = "tr2";

    let tdado_nome = document.createElement("td");
    let tdado_tel = document.createElement("td");

    tdado_nome.textContent = nome;
    tdado_tel.textContent = tel;

    trow.appendChild(tdado_nome);

    trow.appendChild(tdado_tel);

    t_boby.appendChild(trow);
  }
  i++;
  setTimeout(() => (p_back.innerHTML = ""), 3000);
};
