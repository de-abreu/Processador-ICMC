---
title: Como usar esta documentação
description: Orientações gerais aos alunos e demais interessados pelo projeto
---
# Como usar esta documentação
Àqueles que pretendem experimentar a criação de jogos ou quaisquer outros programas utilizando, ou construindo sobre, o projeto do Processador ICMC, esta documentação se pretende apresentar a todo o conhecimento e ferramental disponível para iniciar-se.

Para tal, faz-se necessário apenas:
1. A instalação dos [programas componentes](/docs/category/componentes) deste projeto, assim como a leitura das suas instruções de uso.
2. A leitura das especificações da [linguagem assembly](/docs/category/linguagem-assembly) utilizada pelo projeto.

Não obstante, recomenda-se também a consulta aos [guias](/docs/category/guias) e a [biblioteca de referências](/docs/category/biblioteca), afim de obter alguns exemplos práticos e evitar alguns percalços.

## Para expandir esta documentação
Esta documentação foi criada fazendo uso das ferramentas [Docusaurus](https://docusaurus.io/) e [GitHub Pages](https://pages.github.com/). Ao final de cada página encontra-se um link "**Editar esta página**" onde o usuário pode, em uma sequência de passos, realizar o envio de alterações propostas na forma de [*Pull Requests*](https://docs.github.com/pt/pull-requests). Todas as páginas desta documentação são escritas e formatadas usando a linguagem de marcação [markdown](https://www.markdownguide.org), um guia completo para a sintaxe desta pode ser encontrado [aqui](https://www.markdownguide.org/basic-syntax/).

Não obstante, ao realizar um [fork](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) no [repositório](https://github.com/de-abreu/Processador-ICMC) do projeto, muitas outras alterações da documentação, mesmo estruturais, podem ser propostas. Para tal, recomenda-se a leitura da documentação do Docusaurus, em especial seu [tutorial](https://docusaurus.io/docs#fast-track).

## Orientações específicas aos alunos

> Estes matriculados na disciplina "*Prática em Organização e Arquitetura de Computadores*" (SSC0119)
### Avaliação

Os alunos deverão organizar-se em duplas ou trios e, ao final do semestre, *ter desenvolvido, publicado e apresentado um jogo implementado em uma placa FPGA*. Cada integrante de cada grupo será avaliado **individualmente**, conforme atestada sua contribuição ao projeto na respectiva apresentação final.

A cada semestre, [uma publicação referente a atual turma](/blog/tags/inscricoes) será acrescentada ao blog com links e instruções para os alunos inscreverem seus projetos.

São os **critérios de avaliação** do projeto:

1. **Implementação das instruções de máquina**: se as [instruções básicas](/docs/linguagem-assembly/instrucoes) foram implementadas e, se sim, foram estendidas.
2. **Funcionalidade do jogo apresentado**: se este é funcional e, se sim, exibe múltiplas ou elaboradas funcionalidades.
3. **Documentação do projeto**: se esta cumpre com os [requisitos](#requisitos-para-o-repositório-git-do-projeto) e, se sim, é clara e concisa.
4. **Contribuições com o projeto do Processador ICMC**: Se foram feitas e aprovadas [Pull Requests](https://github.com/de-abreu/Processador-ICMC/pulls) ao repositório deste projeto.

:::danger Requisitos obrigatórios para obter nota
1. A inscrição do projeto e o agendamento da apresentação **deve ser realizado** conforme as exigências descritas na publicação no blog.
2. Cada integrante do grupo **deve estar presente** nesta apresentação final, ainda que remotamente com o uso de ferramentas de video-conferência, como o [Jitsi](https://jitsi.org/).
:::

### Etapas de desenvolvimento do projeto

1. Criação do repositório git para armazenamento do projeto.
2. [Implementação das instruções de máquina](/docs/guias/criando-instrucoes) para manipulação do processador.
3. Criação do jogo e [realização de testes](/docs/guias/debugging) deste.
4. [Implementação do jogo na placa FPGA](/docs/guias/ajustes-finais) e subsequente apresentação.
5. Atualização do repositório git e opcional atualização da documentação associada ao projeto do processador.

### Requisitos para o repositório Git do projeto
Constar os nomes de **todos** os autores do projeto e respectivos números USP, e conter:
    1. O arquivo `cpu.vhd` contendo a descrição em linguagem VHDL da CPU;
    2. Os arquivos `.asm` e `.mif` referentes ao programa do jogo;
    3. O arquivo `.mif` para o charmap utilizado pelo jogo;
    4. Quaisquer outros arquivos relevantes a execução do jogo, especialmente quando este realiza modificações sobre o projeto do Processador ICMC.
    5. Todas as instruções necessárias a execução do jogo por terceiros, mesmo que isso seja meramente apontar para as porções relevantes da documentação do Processador ICMC

:::tip
Antes de propor-se a criar seu jogo, consulte os **jogos recomendados** na [biblioteca de jogos](/docs/biblioteca/jogos). Atente-se a forma com que estes foram documentados, realize o download de seus arquivos e tente [simulá-los](/docs/componentes/simulador), para se ter uma ideia das capacidades do processador ICMC.
:::
:::note TODO
Elaborar sobre os critérios de avaliação conforme julgar necessário. Por exemplo, acrescentando pesos aos diferentes requisitos.
:::
