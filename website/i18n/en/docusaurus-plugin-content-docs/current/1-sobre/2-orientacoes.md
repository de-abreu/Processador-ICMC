# Orientações aos alunos
> Aos matriculados na disciplina "*Prática em Organização e Arquitetura de Computadores*" (SSC0119)
## Avaliação

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

## Etapas de desenvolvimento do projeto

1. Criação do repositório git para armazenamento do projeto.
2. [Implementação das instruções de máquina](/docs/guias/criando-instrucoes) para manipulação do processador.
3. Criação do jogo e [realização de testes](/docs/guias/debugging) deste.
4. [Implementação do jogo na placa FPGA](/docs/guias/ajustes-finais) e subsequente apresentação.
5. Atualização do repositório git e opcional [atualização da documentação](/docs/guias/documentacao) associada ao projeto do processador.

## Requisitos para o repositório Git do projeto
Constar os nomes de **todos** os autores do projeto e respectivos números USP, e conter:
    1. O arquivo `cpu.vhd` contendo a descrição em linguagem VHDL da CPU;
    2. Os arquivos `.asm` e `.mif` referentes ao programa do jogo;
    3. O arquivo `.mif` para o charmap utilizado pelo jogo;
    4. Quaisquer outros arquivos relevantes a execução do jogo, especialmente quando este realiza modificações sobre o projeto do Processador ICMC.
    5. Todas as instruções necessárias a execução do jogo por terceiros, mesmo que isso seja meramente apontar para as porções relevantes da documentação do Processador ICMC

:::tip
Consulte os **jogos recomendados** na [biblioteca de jogos](/docs/biblioteca/jogos) se quiser ter exemplos de repositórios git bem organizados e redigidos.
:::


:::warning
Senão pelas [bibliotecas de referência](/docs/category/biblioteca), que são bastante extensas, recomenda-se aos alunos ler e resenhar para própria referência a **toda** esta documentação **antes** de iniciar seu projeto. Isto, pois

- este trata-se de um projeto único, não se encontrará noutro lugar da internet mais informações sobre este; ou mesmo informações específicas utilizando-se de um buscador.
- a documentação foi escrita largamente por outros alunos, os quais enfrentaram o mesmos percalços que vocês enfrentarão, e certamente gostariam de ter lido esta afim de poupar trabalho, e mesmo evitar retrabalho.
:::

:::note TODO
Elaborar sobre os critérios de avaliação conforme julgar necessário. Por exemplo, acrescentando pesos aos diferentes requisitos.
:::
