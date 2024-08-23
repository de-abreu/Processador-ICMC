---
title: 'Como usar'
description: 'Considerações sobre a sintaxe e recursos da linguagem'
---

# Como usar

A linguagem assembly do ICMC é do tipo [RISC](https://pt.wikipedia.org/wiki/RISC) com palavras de 16 bits de comprimento. Esta admite apenas caracteres presentes no padrão ASCII.

## Comentários

Comentários são segmentos de texto precedidos pelo caractere `;`. Todo o texto após este caractere, e até o fim da linha, é ignorado no processo de montagem. Comentários são uma poderosa ferramenta para tornar o código assembly e a intenção deste mais inteligível ao leitor. Por exemplo:

```asmatmel
mov r0, r1 ; Registrador 0 recebe conteúdo do registrador 1
```

:::tip
O padrão ASCII não admite caracteres acentuados. Entretanto, usá-los em comentários ainda é possível, tido que no processo de montagem estes são ignorados.
:::

## Instruções

Instruções são declaradas pelo seu nome, seguidas pelos seus argumentos (se houverem), estes separados entre si por vírgulas. Por exemplo:

```asmatmel
add r0, r1, r2 ; r0 recebe a soma dos valores em r1 e r2
halt           ; Encerra a execução do programa, não recebe argumentos
```
São argumentos para instruções:
- [**registradores de uso geral** (`r0` a `r7`)](#registradores): carregam-se os valores nestes armazenados;
- [**labels**](#labels): carregam-se os valores armazenados nas posições de memória por estas apontadas;
- **valores imediatos**.

## Valores imediatos
valores precedidos por `#`, estes podem ser:

- Qualquer número inteiro positivo **x** tal que 0 ≤ x < 65535 (números de que podem ser representados em até 16 bits, sem bit de sinal). Por exemplo:
```asmatmel
loadn r0, #0 ; carrega o valor zero em r0
 ```

- Caracteres alfanuméricos, `.`, `_`, e mais os caracteres especiais:
    - `\\`: backslash
    - `\n`: quebra de linha
    - `\0`: caractere terminal
    - `\"`: aspas duplas

Por exemplo:
```asmatmel
loadn r0, #'c' ; Carrega o valor do índice ASCII para o caractere c ao registrador r0
```
- Endereços de memória apontados por labels. Por exemplo:
```asmatmel
loadn r0, #hello ; Carrega o índice da posição de memória para qual a label "hello" aponta.
```

## Registradores
Endereços de memória designados ao armazenamento de dados em processamento, dada a rapidez com que estes podem ser acessados. São estes:

### Registradores de uso geral

Indicados por `rx`, onde `x` é um número inteiro de 0 à 7. Servem ao armazenamento temporário de valores a serem processados.

### Flag Register
Indicado por `fr`, assume determinados valores para denotar quando

- a última comparação (`cmp`) tem resultado
    - igual
    - maior
    - menor
- a última operação aritmética
    - resulta em zero
    - resulta em número negativo
    - resulta em [*overflow*](https://en.wikipedia.org/wiki/Integer_overflow)
    - é uma divisão por zero

:::info
O flag register é utilizado em comandos do tipo call e jump; e consequentemente na criação de [funções](#funcoes) e [loops](#loops).
:::

### Stack Pointer

Indicado por `sp`, indica o topo da [pilha](#a-pilha).

### Program Counter

Indicado por `pc`, indica o endereço na memória da próxima instrução a ser executada.

## A Pilha

Uma estrutura de dados que permite o armazenamento sequencial, o "empilhamento", de dados na memória. Estes podem posteriormente serem acessados em ordem reversa àquela em que foram armazenados, o "desempilhamento".

Isso pode ser feito da seguinte maneira:

```asmatmel
push r0 ; Decresce o o endereço no registrador sp em uma posição e armazena o dado
        ; no registrador r0 no endereço de memória descrito por sp.
pop r1  ; Armazena em r1 o dado no endereço de memória descrito por sp e
        ; incrementa sp em uma posição.
```
Como resultado desta operação efetivamente se realiza uma cópia do dado em `r0` para `r1`.

:::info
A pilha é comumente utilizada como meio de [salvar e recuperar o contexto] dos registradores ao fazer uso de funções aninhadas.
:::

## Labels
Nomenclaturas designadas para referenciar dadas posições de memória. Serão interpretados como labels todas as palavras seguidas pelo caractere `:`.

Como se verá à seguir, este é um recurso útil para uma variedade de finalidades, como declarar variáveis, funções e loops.
## Variáveis
Variáveis podem ser criadas com o uso dos seguintes comandos:

###  var
Recebe um numero positivo e aloca um número de posições de memoria. Exemplo:
```asmatmel
aux : var #1  ; Variável 'aux'
vet : var #10 ; Vetor 'vet' de 10 posições
```
O valor das variáveis podem ser recuperados ou designados utilizando os comandos do tipo *load* e *store*, vistos [mais adiante](/docs/linguagem-assembly/instrucoes).

### static
Recebe um endereço (ou label que o aponte), e um valor imediato, e em tempo de montagem o escreve no endereço de memória descrito. Exemplo:

```asmatmel
WIDTH : var #1
    static WIDTH, #40

HEIGHT : var #1
    static HEIGHT, #30
```

O código acima declara um par de variáveis para armazenar as dimensões da tela.

O `static` também pode ser utilizado em conjunção com vetores, atribuindo-se um deslocamento ao endereço de base. Exemplo:

```asmatmel
pond : var #8
    static pond + #0, #2626
    static pond + #1, #2626
    static pond + #2, #3138
    static pond + #3, #3138
    static pond + #4, #3138
    static pond + #5, #3138
    static pond + #6, #2626
    static pond + #7, #2626
pond_length : var #1
    static pond_length, #8
```

O código acima cria um vetor de oito posições e o percorre do começo ao fim armazenado os valores imediatos `2626` ou `3138`. Uma variável auxiliar também é criada para armazenar o valor do tamanho do vetor.

### string

Recebe um texto descrito entre aspas duplas e

1. Aloca um número de posições de memória equivalente ao número de caracteres neste +1 e
2. Preenche estas posições de memória com os caracteres em sequência, ao final adicionando o caractere terminal `\0`. Exemplo:

```asmatmel
how_to_play0: string "HOW TO PLAY"
```

:::warning
Os comandos `var`, `static` e `string` foram feitos para serem lidos em **tempo de montagem**, e **não** durante execução. Para evitar que isso ocorra e leve a concequências não pretendidas, recorra a segmentar seu código em duas partes: uma para dados e outra para instruções. Exemplo:

```asmatmel
jmp main ; Desloca o program counter para a posição de memória da função main

; Segmento de dados

main:    ; Continua a execução do código a partir deste ponto

; Segmento de instruções
```
:::

## Funções

Por "função", refere-se a uma porção de instruções que, juntas, desempenham uma finalidade específica. Tais porções são iniciadas com uma label que dá nome a função e a permite ser invocada por instruções [`call`](/docs/linguagem-assembly/instrucoes#call), e terminadas com a instrução `rts`, que retorna o `pc` a posição seguinte à instrução `call` que invocou a função. Um exemplo de função seria:
```asmatmel
screenOffset:
    ; Gives the offset that, given the screen's dimensions, corresponds to a given column and row. Values beyond the screen's HEIGHT and WIDTH get wrapped around.
    ; Arguments:
    ; a1 = row
    ; a2 = column
    ; Returns:
    ; a0 = offset

    call saveRegisters
    load r3, HEIGHT
    load r4, WIDTH
    mod r1, r1, r3
    mul r1, r1, r4
    mod r2, r2, r4
    add r1, r1, r2
    store a0, r1
    call restoreRegisters
    rts
```

Funções podem ser chamadas por outras funções. Como se vê acima as funções `saveRegisters` e `restoreRegisters` são chamadas por `screenOffset`
### Atributos opcionais de uma função
Os seguintes atributos são opcionais, mas recomendados, na construção de uma função.
#### Argumentos e valor de retorno
Usualmente funções recebem a um ou mais valores como "argumentos" de entrada e "retornam" um único valor de saída como resultado da sua operação. Tais valores podem ser armazenados em registradores, mas é recomendado que estes sejam lidos e escritos na memória, tido que registradores são escaços.

O montador já fornece algumas labels especiais jde uso opcionalj para esta finalidade:

- `Argx`, onde `x` é um número inteiro de 0 à 9: servem a armazenar argumentos da função.
- `Ret`: serve a armazenar o retorno da função.

#### Salvar e recuperar o contexto dos registradores

Salvar o contexto dos registradores consiste em armazenar na pilha seus valores atuais ao iniciar uma função e recuperar o contexto destes consiste em restituir os valores da pilha ao final da função. Isso é importante para que funções aninhadas não interfiram com o funcionamento das funções que as chamaram, após terem executado.

As funções [saveRegisters](/docs/biblioteca/funcoes#saveregisters) e [restoreRegisters](/docs/biblioteca/funcoes#restoreregisters) podem ser utilizadas ao inicio e fim de cada função para cumprir esta finalidade.

## Loops
Segmentos de instruções executados repetidamente até que uma condição, se alguma, seja satisfeita. Análogo aos comandos `for`, `while` ou `do while`, equivalente ao comando `goto`. Isso é feito por meio de instruções [`jmp`](/docs/linguagem-assembly/instrucoes#jump), por exemplo:

```
printInt:
    ; Prints a right-aligned integer value on screen.
    ; a1 = Integer value to be printed
    ; a2 = Right-aligned position in the screen from where to start printing
    ; a3 = Color value to print number
    ; Returns: Nothing

    call saveRegisters
    loadn r4, #10    ; load the value 10 to apply the mod operation
    loadn r5, #'0'   ; load index value of the character 0

    printIntLoop:    ; start printing loop
        mod r6, r1, r4   ; get least significant digit from r1
        add r6, r5, r6   ; apply it as an offset to the character map
        add r6, r6, r3   ; apply color value
        outchar r6, r2   ; print character at position r2
        div r1, r1, r4   ; integer division of r1 by 10
        jz printIntEnd   ; escape loop if r1 = 0
        dec r2           ; otherwise decrement r2
        jmp printIntLoop ; and continue

    printIntEnd:
        call restoreRegisters
        rts
```

