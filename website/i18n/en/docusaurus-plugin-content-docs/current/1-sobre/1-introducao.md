---
title: 'Introduction'
description: 'What is, and to what purpose serves, the ICMC Processor'
---
# Introduction

The ICMC Processor is a project initiated by [PhD. Eduardo do Valle Simões](http://lattes.cnpq.br/4055872056358293) to teach Computer Organization and Architecture to students at the [Institute of Mathematical and Computational Sciences (Instituto de Ciências Matemáticas e Computação － ICMC)](https://icmc.usp.br/institucional/quem-somos) of the University of São Paulo, primarily through practical application.

The project allows for the prototyping of a processor (CPU) on [FPGA](https://en.wikipedia.org/wiki/Field-programmable_gate_array) boards. It implements a custom [assembly language](https://en.wikipedia.org/wiki/Assembly_language) with which students can program an application ([games](/docs/biblioteca/jogos) are suggested) to be loaded directly into the primary memory (RAM) of the board and executed without the intermediation of an operating system. The aim is for students to gain an understanding of general aspects of CPU operation, both in its logical and implementation terms.

This project includes the following components:

- The [processor project](/docs/componentes/processador), described using the [VHDL](https://en.wikipedia.org/wiki/VHDL) language, for implementation on [DE0-CV](https://www.terasic.com.tw/cgi-bin/page/archive.pl?Language=English&No=921&PartNo=2) and [DE2-115](https://www.terasic.com.tw/cgi-bin/page/archive.pl?Language=English&No=502) boards;
- The [assembler software](/docs/componentes/simulador), which reads the assembly language and generates the binary code necessary for execution;
- The [simulator software](/docs/componentes/simulador), to simulate the program's operation before submitting it to the (relatively slower) process of writing it to the board's memory;
- An [IDE](/docs/componentes/IDE) configured for programming in the project's assembly language and integration with its simulator;
- A [reference library](/docs/category/biblioteca), containing commented functions and complete games;
- A collection of [auxiliary guides](/docs/category/guias), with practical guidance for game development.

:::info Do you want to know more?

<p align="center"><img title="Cover of Analog Computing magazine" width="280px" src="https://upload.wikimedia.org/wikipedia/en/7/77/ANALOG_Computing_Issue_43_June_1986_Issue_Cover.jpg" /></p><br/>

At the end of the 1970s, removable media were still relatively expensive, and many personal computers were not connected to any remote network. Thus, to install games on their computers, enthusiasts resorted to sharing the source code among themselves directly or through [specialized publications](http://vintage-basic.net/games.html) and reprogramming them directly into their computers' memory.
:::

:::note TODO
- Find the date this project was initiated;
- Insert an image of students testing a game;
- Confirm the variety of compatible boards.
:::
