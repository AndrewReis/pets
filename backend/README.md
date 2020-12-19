# Pets Back-End (node)

## Objetivo: API REST.
  Existem diversos animais sem um lar e pessoas que necessitam de um pet em suas vidas.
  vamos criar um sistema que facilite a conexão entre essas duas pontas, e tornar a vida de ambos mais felizes.

# Rotas

**Registar um novo pet**: Criar uma rota do tipo POST para criar um pet com os seguintes atributos:
{ id, name, description, gender, species, }.

**Listar todos os pets**: Criar uma rota do tipo GET que liste todos os animais cadastrados na API.

**Filtrar pets por espécies**: Criar uma rota GET para filtrar uma espécie de pet. 

**Atualizar um pet já criado**: Criar uma rota do tipo PUT para fazer alguma alteração nas informações do pet.

**Deletar um pet da API** Criar uma rota do tipo DELETE para fazer a exclusão do registro no sistema.

**Curtir um pet** Criar uma rota do tipo POST que adicione uma curtida no pet.

# Regra de négocio:

  -[x] Não podemos curtir o mesmo pet 2 vezes. Devemos criar uma regra de deslike.
       
  -[x] Só podemos atualizar um pet que já exista na API.

  -[x] Só podemos dar likes em pets que existam no sistema.