# Especificação

A linguagem assembly do ICMC é do tipo [RISC](https://pt.wikipedia.org/wiki/RISC) com palavras de 16 bits de comprimento. Esta admite apenas caracteres presentes no padrão ASCII.

## Utilizando comentários

Comentários são demarcados pelo caractere `;`: Todo o texto que vier após este caractere, e até o fim da linha, será ignorado no processo de montagem. Por exemplo:

```asmatmel
mov r0, r1 ; Registrador 0 recebe conteúdo do registrador 1
```

:::tip
O padrão ASCII não admite caracteres acentuados. Entretanto, usá-los em comentários ainda é possível, tido que no processo de montagem estes são ignorados.
:::

## Formato das instruções

Instruções são declaradas pelo seu nome, seguidas pelos seus argumentos (se houverem) separados entre si por vírgulas. Por exemplo:

```asmatmel
add r0, r1, r2 ; r0 recebe a soma de r1 com r2
halt           ; Encerra a execucao do programa, nao recebe argumentos
```
São argumentos para instruções:
- **registradores de uso geral** (`r0` a `r7`): carregam-se os valores nestes armazenados;
- [**labels**](#labels): carregam-se os valores armazenados nas posições de memória por estas apontadas;
- **valores imediatos**: valores precedidos por `#`, estes podem ser:
    - Qualquer número inteiro positivo **x** tal que 0 ≤ x < 65535 (números de que podem ser representados em até 16 bits, sem bit de sinal). Por exemplo:
    ```asmatmel
    loadn r0, #0 ; carrega o valor zero em r0
    ```

    - Caracteres alfanuméricos, `.`, `_`, e mais os caracteres especiais:
        - `\\` (backslash)
        - `\n` (quebra de linha)
        - `\0` (caractere terminal)
        - `\"`
    Por exemplo:
    ```asmatmel
    loadn r0, #'c' ; Carrega o valor do índice ASCII para o caractere c ao registrador r0
    ```
    - Endereços de memória apontados por labels. Por exemplo:
    ```asmatmel
    loadn r0, #hello ; Carrega o índice da posição de memória para qual a label "hello" aponta.
    ```

## Labels
Labels são nomenclaturas designadas a referenciar dadas posições de memória. Serão interpretados como labels todas as palavras seguidas pelo caractere `:`.
Este é um recurso útil para uma variedade de finalidades, como declarar variáveis, funções e criar loops.
### Variáveis
Variáveis podem ser criadas com o uso dos seguintes comandos.
#### `var`
Este comando recebe um numero positivo e aloca (na posição onde foi escrito) um número de posições de memoria. Exemplo:
```asmatmel
aux : var #1  ; Variável 'aux'
vet : var #10 ; Vetor 'vet' de 10 posições

```
O valor das variáveis podem ser recuperados ou designados utilizando os comandos do tipo *load* e *store*, vistos [mais adiante](/docs/linguagem-assembly/instrucoes).
#### `static`


Este comando recebe um endereço (ou label que o aponte), um numero ou caractere, e em tempo de montagem o escreve no endereço de memória descrito. Exemplo:

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

#### `string`



### Declarar constantes

O seguinte trecho de código utiliza labels para designar um par de **constantes**, referentes às dimensões da tela:

```asmatmel
WIDTH : var #1
    static WIDTH, #40

HEIGHT : var #1
    static HEIGHT, #30
```
Estes valores podem depois serem referenciados em funções, como a [screenOffset](/docs/biblioteca/funcoes/#screenOffset).

### Declarar vetores e strings

O seguinte trecho de código utiliza labels para designar um **vetor** e uma **string** (um vetor de caracteres), respectivamente:

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

how_to_play0  : string "HOW TO PLAY"

```

Vetores e strings podem então ser utilizados em funções como [printVector](/docs/biblioteca/funcoes/#printVector) e [printString](/docs/biblioteca/funcoes/#printString).

:::Do you want to know more?
O funcionamento dos comandos
:::

Isso é particularmente útil para designar variáveis, vetores, funções e loops


