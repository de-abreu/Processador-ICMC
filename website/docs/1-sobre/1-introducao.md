# Introdução

O Processador ICMC trata-se de um projeto iniciado pelo [Prof. Dr. Eduardo do Valle Simões](http://lattes.cnpq.br/4055872056358293) para lecionar de forma principalmente prática, Organização e Arquitetura de Computadores aos alunos do [Instituto de Ciências Matemáticas e Computacionais (ICMC)](https://icmc.usp.br/institucional/quem-somos) da Universidade de São Paulo.

O projeto permite a prototipação de um processador (CPU) em placas [FPGA](https://pt.wikipedia.org/wiki/Arranjo_de_porta_program%C3%A1vel_em_campo). Este implementa uma [linguagem de montagem](https://pt.wikipedia.org/wiki/Linguagem_assembly) autoral com a qual estudantes podem programar uma aplicação (propõe-se [jogos](/docs/referencias/jogos)) a ser carregada diretamente na memória primária (RAM) da placa, e tê-la executada sem o intermédio de um sistema operacional. Pretende-se, com isto, que estes alcancem um conhecimento de aspectos gerais ao funcionamento de uma CPU tanto em seus quesitos lógicos quanto de implementação.

Este projeto é contempla os seguintes componentes:

- O [projeto do processador](/docs/componentes/processador), descrito usando a linguagem [VHDL](https://pt.wikipedia.org/wiki/VHDL), para sua implementação nas placas [DE0-CV](https://www.terasic.com.tw/cgi-bin/page/archive.pl?Language=English&No=921&PartNo=2) e [DE2-115](https://www.terasic.com.tw/cgi-bin/page/archive.pl?Language=English&No=502);

- O [software do montador](/docs/componentes/simulador), que lê a linguagem de montagem e gera o código binário necessário a sua execução;
- O [software do simulador](/docs/componentes/simulador), para simular o funcionamento do programa antes de submetê-lo ao (relativamente mais lento) processo de escrita na memória da placa;
- Uma [IDE](/docs/componentes/IDE) configurada para programação na linguagem de montagem do projeto e integração com o simulador do mesmo.
- Uma [biblioteca de referência](/docs/category/referencias), contendo funções comentadas e jogos completos.
- Uma coletânea de guias auxiliares, com orientações práticas para o desenvolvimento de jogos.

:::info Do you want to know more?

<p align="center"><img title="Capa da revista Analog Computing" width="280px" src="https://upload.wikimedia.org/wikipedia/en/7/77/ANALOG_Computing_Issue_43_June_1986_Issue_Cover.jpg" /></p><br/>

Ao final da década de 70 mídias removíveis ainda eram relativamente caras e muitos computadores pessoais não estavam conectados a qualquer rede remota. Assim, para instalar jogos em seus computadores, entusiastas recorriam a compartilhar o código-fonte destes entre si diretamente ou por meio de [publicações especializadas](http://vintage-basic.net/games.html) e reprogramá-los diretamente na memória de seus computadores.
:::

:::note TODO
- Pegar a data em que este projeto foi iniciado;
- Inserir imagem de alunos testando algum jogo;
- Confirmar a variedade de placas compatíveis.
:::
