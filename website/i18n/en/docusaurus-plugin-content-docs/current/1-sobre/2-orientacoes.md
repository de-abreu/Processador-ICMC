---
title: How to Use This Documentation
description: General guidelines for students and those interested in the project
---
# How to Use This Documentation

For those who intend to experiment with creating games or other programs using or building upon the ICMC Processor project, this documentation aims to present all the available knowledge and tools to get started.

To do so, it is only necessary:
1. To install the [component programs](/en/docs/category/componentes) of this project, as well as reading their usage instructions.
2. To read the specifications of the [Assembly language](/en/docs/category/linguagem-assembly) used by the project.

However, it is also recommended to consult the [guides](/en/docs/category/guias) and [reference library](/en/docs/category/biblioteca) to obtain some practical examples and avoid common pitfalls.

## Extending This Documentation

This documentation was created using the [Docusaurus](https://docusaurus.io/) and [GitHub Pages](https://pages.github.com/) tools. At the end of each page, there is a "**Edit this page**" link where the user can, in a sequence of steps, submit proposed changes in the form of [*Pull Requests*](https://docs.github.com/en/pull-requests). All pages in this documentation are written and formatted using the [Markdown](https://www.markdownguide.org) markup language, and a complete guide to its syntax can be found [here](https://www.markdownguide.org/basic-syntax/).

Additionally, by creating a [fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) of the project's [repository](https://github.com/de-abreu/Processador-ICMC), many other documentation changes, including structural ones, can be proposed. For this, it is recommended to read the Docusaurus documentation, especially its [tutorial](https://docusaurus.io/docs#fast-track).

## Specific Guidance for Students

> That have enrolled in the discipline "*Practice in Organization and Computer Architecture*" (SSC0119)

### Evaluation

Students must organize themselves into pairs or trios and, by the end of the semester, *have developed, published, and presented a game implemented on an FPGA board*. Each member of each group will be evaluated **individually**, as attested by their contribution to the project in the respective final presentation.

Each semester, [a post referring to the current class](/en/blog/tags/subscriptions) will be added to the blog with links and instructions for students to subscribe their work.

The **evaluation criteria** for the project are:

1. **Implementation of machine instructions**: if the [basic instructions](/en/docs/linguagem-assembly/instrucoes) have been implemented and, if so, have been extended.
2. **Functionality of the presented game**: if it is functional and, if so, exhibits multiple or elaborate functionalities.
3. **Project documentation**: if it meets the [requirements](#requirements-for-the-projects-git-repository) and, if so, is clear and concise.
4. **Contributions to the ICMC Processor project**: if [Pull Requests](https://github.com/de-abreu/Processador-ICMC/pulls) have been made and approved to the repository of this project.

:::danger Requirements for obtaining a Grade
1. The project registration and presentation scheduling **must be done** according to the requirements described in the blog post.
2. Each group member **must be present** in this final presentation, even if remotely using video-conferencing tools, such as [Jitsi](https://jitsi.org/).
:::

### Project Development Stages

1. Creation of a Git repository for project storage.
2. [Implementation of machine instructions](/en/docs/guias/criando-instrucoes) for processor manipulation.
3. Creation of the game and [the testing of it](/en/docs/guias/debugging).
4. [Implementation of the game on the FPGA board](/en/docs/guias/ajustes-finais) for its subsequent presentation.
5. Update of the Git repository and optional update of the documentation associated with the processor project.

### Requirements for the Project's Git Repository

The repository must include the names of **all** project authors and their respective USP numbers, and contain:

1. The `cpu.vhd` file containing the VHDL description of the CPU;
2. The `.asm` and `.mif` files related to the game program;
3. The `.mif` file for the charmap used by the game;
4. Any other files relevant to the game's execution, especially when it makes modifications to the ICMC Processor project.
5. All instructions necessary for the game's execution by third parties, even if it's just pointing to the relevant parts of the ICMC Processor documentation.

:::tip
Before proposing to create your game, consult the **recommended games** in the [game library](/en/docs/biblioteca/jogos). Pay attention to how they were documented, download their files, and try to simulate them to get an idea of the ICMC processor's capabilities.
:::
:::note TODO
Elaborate on the evaluation criteria as deemed necessary. For example, by adding weights to the different requirements.
:::
