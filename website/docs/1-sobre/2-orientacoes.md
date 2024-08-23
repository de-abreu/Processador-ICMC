---
title: How to use this documentation
description: General guidelines for students and others interested in the project
---
# How to use this documentation
For those who intend to experiment with the creation of games or any other programs using, or building upon, the ICMC Processor project, this documentation aims to present all the knowledge and tools available to get started.

To do so, it is only necessary:
1. The installation of the [component programs](/docs/category/componentes) of this project, as well as reading their usage instructions.
2. Reading the specifications of the [assembly language](/docs/category/linguagem-assembly) used by the project.

Nevertheless, it is also recommended to consult the [guides](/docs/category/guias) and the [reference library](/docs/category/biblioteca) to obtain some practical examples and avoid some pitfalls.

## To expand this documentation
This documentation was created using the tools [Docusaurus](https://docusaurus.io/) and [GitHub Pages](https://pages.github.com/). At the end of each page, there is a link "**Edit this page**" where the user can, in a sequence of steps, submit proposed changes in the form of [*Pull Requests*](https://docs.github.com/pt/pull-requests). All pages of this documentation are written and formatted using the markup language [markdown](https://www.markdownguide.org), a complete guide to its syntax can be found [here](https://www.markdownguide.org/basic-syntax/).

Nevertheless, by performing a [fork](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) in the [repository](https://github.com/de-abreu/Processador-ICMC) of the project, many other changes to the documentation, even structural ones, can be proposed. For this, it is recommended to read the Docusaurus documentation, especially its [tutorial](https://docusaurus.io/docs#fast-track).

## Specific guidelines for students

> Those enrolled in the course "*Practice in Computer Organization and Architecture*" (SSC0119)
### Evaluation

Students must organize themselves into pairs or trios and, by the end of the semester, *have developed, published, and presented a game implemented on an FPGA board*. Each member of each group will be evaluated **individually**, according to their contribution to the project in the respective final presentation.

Each semester, [a publication related to the current class](/blog/tags/inscricoes) will be added to the blog with links and instructions for students to register their projects.

The **evaluation criteria** for the project are:

1. **Implementation of machine instructions**: whether the [basic instructions](/docs/linguagem-assembly/instrucoes) were implemented and, if so, were extended.
2. **Functionality of the presented game**: whether it is functional and, if so, exhibits multiple or elaborate functionalities.
3. **Project documentation**: whether it meets the [requirements](#requirements-for-the-project-git-repository) and, if so, is clear and concise.
4. **Contributions to the ICMC Processor project**: If [Pull Requests](https://github.com/de-abreu/Processador-ICMC/pulls) were made and approved to the repository of this project.

:::danger Mandatory requirements to earn a grade
1. The project registration and the scheduling of the presentation **must be done** according to the requirements described in the blog post.
2. Each member of the group **must be present** at this final presentation, even if remotely using video conferencing tools, such as [Jitsi](https://jitsi.org/).
:::

## Project development stages

1. Creation of the git repository for project storage.
2. [Implementation of machine instructions](/docs/guias/criando-instrucoes) for processor manipulation.
3. Creation of the game and [testing](/docs/guias/debugging) of it.
4. [Implementation of the game on the FPGA board](/docs/guias/ajustes-finais) and subsequent presentation.
5. Update of the git repository and optional [update of the documentation](/docs/guias/documentacao) associated with the processor project.

## Requirements for the project's Git repository
Include the names of **all** project authors and their respective USP numbers, and contain:
    1. The `cpu.vhd` file containing the VHDL description of the CPU;
    2. The `.asm` and `.mif` files related to the game program;
    3. The `.mif` file for the charmap used by the game;
    4. Any other files relevant to the execution of the game, especially when it makes modifications to the ICMC Processor project.
    5. All instructions necessary for third parties to execute the game, even if it is merely pointing to the relevant portions of the ICMC Processor documentation.

:::tip
Consult the **recommended games** in the [game library](/docs/biblioteca/jogos) if you want examples of well-organized and written git repositories.
:::

:::warning
Except for the [reference libraries](/docs/category/biblioteca), which are quite extensive, it is recommended that students read and summarize **all** of this documentation **before** starting their project. This is because:

- This is a unique project, and you will not find more information about it elsewhere on the internet or even specific information using a search engine.
- The documentation was largely written by other students who faced the same challenges that you will face, and they certainly would have liked to read this to save work and even avoid rework.
:::

:::note TODO
Elaborate on the evaluation criteria as needed. For example, by adding weights to the different requirements.
:::
