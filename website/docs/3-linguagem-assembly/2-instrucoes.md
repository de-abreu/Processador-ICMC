---
title: Lista de instruções
description: Todas as instruções incluídas por padrão
---

# Lista de instruções

Abaixo encontra-se uma lista de todas as funções definidas por padrão para a linguagem assembly do processador ICMC. Para cada instrução acompanha-se
- uma explicação da sua funciojnalidade ou um pseudo-código explicativo, este último em notação semelhante a encontrada na [linguagem de programação C](https://en.wikipedia.org/wiki/C_(programming_language)#Operators).
- A especificação do formato da instrução em código binário. Assume-se as seguintes convenções:
    - `x`: bit cujo valor para a instrução em questão não é significativo;
    - `|`: separação entre os campos da instrução;
    - `c`: "[carry](https://en.wikipedia.org/wiki/Carry_flag)"
    - ` > end`: um endereço de memória, com 16 bits de extensão, descrito na linha seguinte a instrução;
    - ` > num`: um valor inteiro e positivo, com 16 bits de extensão, descrito na linha seguinte a instrução.

## Instruções de manipulação de dados
### Acesso à memória

Instruções para escrita (`store`) na, e leitura (`load`) da, memória.

| Mneônico           | Pseudo-código  | Fromato da instrução                |
| :---               | :---           | :---                                |
| `store label, rx`  | `*label = rx`  | `110001 \| rx \| xxxxxxx \| > end`  |
| `storei rx, ry`    | `**rx = ry`    | `111101 \| rx \| ry \| xxxx`        |
| `load rx, label`   | `rx = *label`  | `110000 \| rx \| xxxxxxx \| > end`  |
| `loadi rx, ry`     | `rx = **ry`    | `111100 \| rx \| ry \| xxxx`        |
| `loadn rx, #num`   | `rx = num`     | `111000 \| rx \| xxxxxxx \| > num`  |

### Movimentação entre registradores

Copia o valor de um registrador a outro.

| Mneônico      | Pseudo-código  | Formato da instrução          |
| :---          | :---           | :---                          |
| `mov rx, ry`  | `rx = ry`      | `110011 \| rx \| ry \| xxx0`  |
| `mov rx, sp`  | `rx = sp`      | `110011 \| rx \| xxxxx01`     |
| `mov sp, rx`  | `sp = rx`      | `110011 \| rx \| xxxxx11`     |

## Operações aritméticas

| Mneônico           | Pseudo-código           | Formato da instrução             |
| :---               | :---                    | :---                             |
| `add rx, ry, rz`   | `rx = ry + rz`          | `100000 \| rx \| ry \| rz \| 0`  |
| `addc rx, ry, rz`  | `rx = ry + rz + carry`  | `100000 \| rx \| ry \| rz \| 1`  |
| `sub rx, ry, rz`   | `rx = ry - rz`          | `100001 \| rx \| ry \| rz \| 0`  |
| `subc rx, ry, rz`  | `rx = ry - rz + carry`  | `100001 \| rx \| ry \| rz \| 1`  |
| `mul rx, ry, rz`   | `rx = ry × ry`          | `100010 \| rx \| ry \| rz \| 0`  |
| `mulc rx, ry, rz`  | `rx = ry × ry + carry`  | `100010 \| rx \| ry \| rz \| 1`  |
| `div rx, ry, rz`   | `rx = ry ÷ ry`          | `100011 \| rx \| ry \| rz \| 0`  |
| `divc rx, ry, rz`  | `rx = ry ÷ ry + carry`  | `100011 \| rx \| ry \| rz \| 1`  |
| `mod rx, ry, rz`   | `rx = ry % ry`          | `100101 \| rx \| ry \| rz \| 0`  |
| `modc rx, ry, rz`  | `rx = ry % ry + carry`  | `100101 \| rx \| ry \| rz \| 1`  |
| `inc rx`           | `rx + 1`                | `100100 \| rx \| 0 \| xxxxxx`    |
| `dec rx`           | `rx - 1`                | `100100 \| rx \| 1 \| xxxxxx`    |

:::info
Quando uma operação aritmética resulta em zero ou número negativo, o registrador `fr` assume um valor correspondente para indicar estes resultados.
:::

## Operações lógicas

| Mneônico          | Pseudo-código    | Formato da instrução             |
| :---              | :---             | :---                             |
| `and rx, ry, rz`  | `rx = ry & rz`   | `010010 \| rx \| ry \| rz \| x`  |
| `or rx, ry, rz`   | `rx = ry \| rz`  | `010011 \| rx \| ry \| rz \| x`  |
| `xor rx, ry, rz`  | `rx = ry ^ rz`   | `010100 \| rx \| ry \| rz \| x`  |
| `not rx, ry`      | `rx = ~ry`       | `010101 \| rx \| ry \| xxxx`     |

## Movimentação de bits
Comandos aqueles que manipulam os valores armazenados nos registradores em sua forma binária.

### rotl

| Mneônico         | Formato da instrução          |
| :---             | :---                          |
| `rotl rx, #num`  | `010000 \| rx \| 10x \| num`  |

Move todos os bits `num` dígitos à **esquerda** sendo que os `num` dígitos **mais** significativos são "rotacionados": tornam-se os `num` dígitos **menos** significativos.
### rotr

| Mneônico         | Formato da instrução          |
| :---             | :---                          |
| `rotr rx, #num`  | `010000 \| rx \| 11x \| num`  |

Move todos os bits `num` dígitos à **direita** sendo que os `num` dígitos **menos** significativos tornam-se os `num` dígitos **mais** significativos.
### shiftl0

| Mneônico            | Formato da instrução          |
| :---                | :---                          |
| `shiftl0 rx, #num`  | `010000 \| rx \| 000 \| num`  |

Move todos os bits `num` dígitos à **esquerda**, e preenche os `num` bits menos significativos com `0`.
### shiftl1

| Mneônico            | Formato da instrução          |
| :---                | :---                          |
| `shiftl1 rx, #num`  | `010000 \| rx \| 001 \| num`  |

Move todos os bits `num` dígitos à **esquerda**, e preenche os `num` bits menos significativos com `1`.

### shiftr0

| Mneônico            | Formato da instrução          |
| :---                | :---                          |
| `shiftr0 rx, #num`  | `010000 \| rx \| 010 \| num`  |

Move todos os bits `num` dígitos à **direita**, e preenche os `num` bits mais significativos com `0`.

### shiftr1

| Mneônico            | Formato da instrução          |
| :---                | :---                          |
| `shiftr1 rx, #num`  | `010000 \| rx \| 011 \| num`  |

Move todos os bits `num` dígitos à **direita**, e preenche os `num` bits mais significativos com `1`.

:::info
Em todas as instruções de movimentação de bits, `num` é um número inteiro positivo com 4 bits de extensão.
:::

## Entrada e saída
### Input
| Mneônico          | Formato da instrução       |
| :---              | :---                       |
| `inchar rx`       | `110101 \| rx \| xxxxxxx`  |

Armazena em `rx` um valor correspondente a uma tecla pressionada no momento em que a instrução é lida.

:::info
O valor armazenado quando nenhuma tecla estiver pressionada é **255**.
:::
### Output
| Mneônico          | Formato da instrução    |
| :---              | :---                    |
| `outchar rx, ry`  | `110010 \| rx \| xxxx`  |

Imprime na posição da tela de índice `ry` o caractere de índice `rx`.
## Pilha

Armazena (`push`) ou retira (`pop`) dados da pilha.

| Mneônico   | Formato da instrução            |
| :---       | :---                            |
| `push rx`  | `000101 \| rx \| 0 \| xxxxxx`   |
| `push fr`  | `000101 \| xxx \| 1 \| xxxxxx`  |
| `pop rx`   | `000110 \| rx \| 0 \| xxxxxx`   |
| `push fr`  | `000110 \| xxx \| 1 \| xxxxxx`  |

## Comparação
| Mneônico      | Formato da instrução          |
| :---          | :---                          |
| `cmp rx, ry`  | `010110 \| rx \| ry \| xxxx`  |

A depender do resultado da comparação entre os valores armazenados em `rx` e `ry`, o registrador `fr` assume um valor para indicar se `rx` é igual, maior, ou menor que `ry`.
## Jump

Se a condição posta corresponder àquela lida em `fr`, então `pc = *label`

| Mneônico      | Condição                                       | Formato da instrução        |
| :---          | :---                                           | :---                        |
| `jmp label`   | Incondicional                                  | `000010 \| 0000 \| xxxxxx`  |
| `jeq label`   | Igual (***EQ**ual*)                            | `000010 \| 0001 \| xxxxxx`  |
| `jne label`   | Igual (***N**ot **E**qual*)                    | `000010 \| 0010 \| xxxxxx`  |
| `jz label`    | É zero (***Z**ero*)                            | `000010 \| 0011 \| xxxxxx`  |
| `jnz label`   | Não é zero (***N**ot **Z**ero*)                | `000010 \| 0100 \| xxxxxx`  |
| `jc label`    | Há carry (***C**arry*)                         | `000010 \| 0101 \| xxxxxx`  |
| `jnc label`   | Não há carry (***N**o **C**arry*)              | `000010 \| 0110 \| xxxxxx`  |
| `jgr label`   | É maior que (***GR**eater than*)               | `000010 \| 0110 \| xxxxxx`  |
| `jle label`   | É menor que (***LE**sser than*)                | `000010 \| 1000 \| xxxxxx`  |
| `jeg label`   | É igual ou maior (***E**qual or **G**reater*)  | `000010 \| 1001 \| xxxxxx`  |
| `jel label`   | É igual ou menor (***E**qual or **L**esser*)   | `000010 \| 1010 \| xxxxxx`  |
| `jov label`   | Houve *overflow* (***OV**erflow*)              | `000010 \| 1011 \| xxxxxx`  |
| `jnov label`  | Não houve *overflow* (***N**o **OV**erflow*)   | `000010 \| 1100 \| xxxxxx`  |
| `jn label`    | Resultado negativo (***N**egative*)            | `000010 \| 1101 \| xxxxxx`  |
| `jdz label`   | Divisão por Zero (***D**ivision by **Z**ero*)  | `000010 \| 1110 \| xxxxxx`  |

## Call
Se a condição posta corresponder àquela lida em `fr` então executa-se as seguintes instruções:

```asmatmel
push pc
jmp label
```

| Mneônico      | Condição                                       | Formato da instrução        |
| :---          | :---                                           | :---                        |
| `call label`  | Incondicional                                  | `000011 \| 0000 \| xxxxxx`  |
| `ceq label`   | Igual (***EQ**ual*)                            | `000011 \| 0001 \| xxxxxx`  |
| `cne label`   | Igual (***N**ot **E**qual*)                    | `000011 \| 0010 \| xxxxxx`  |
| `cz label`    | É zero (***Z**ero*)                            | `000011 \| 0011 \| xxxxxx`  |
| `cnz label`   | Não é zero (***N**ot **Z**ero*)                | `000011 \| 0100 \| xxxxxx`  |
| `cc label`    | Há carry (***C**arry*)                         | `000011 \| 0101 \| xxxxxx`  |
| `cnc label`   | Não há carry (***N**o **C**arry*)              | `000011 \| 0110 \| xxxxxx`  |
| `cgr label`   | É maior que (***GR**eater than*)               | `000011 \| 0110 \| xxxxxx`  |
| `cle label`   | É menor que (***LE**sser than*)                | `000011 \| 1000 \| xxxxxx`  |
| `ceg label`   | É igual ou maior (***E**qual or **G**reater*)  | `000011 \| 1001 \| xxxxxx`  |
| `cel label`   | É igual ou menor (***E**qual or **L**esser*)   | `000011 \| 1010 \| xxxxxx`  |
| `cov label`   | Houve *overflow* (***OV**erflow*)              | `000011 \| 1011 \| xxxxxx`  |
| `cnov label`  | Não houve *overflow* (***N**o **OV**erflow*)   | `000011 \| 1100 \| xxxxxx`  |
| `cn label`    | Resultado negativo (***N**egative*)            | `000011 \| 1101 \| xxxxxx`  |
| `cdz label`   | Divisão por Zero (***D**ivision by **Z**ero*)  | `000011 \| 1110 \| xxxxxx`  |


## Retorno

Complementar a instrução `call`, esta realiza:

```asmatmel
loadi pc, sp
inc sp
inc pc
```

| Mneônico  | Formato da Instrução            |
| :---      | :---                            |
| `rts`     | `000100 \| xxxx \| x \| xxxxx`  |


## Controle

| Mneônico  | Ação                           | Formato da Instrução        |
| :---      | :---                           | :---                        |
| `clearc`  | `c = 0`                        | `001000 \| 0 \| xxxxxxxxx`  |
| `setc`    | `c = 1`                        | `001000 \| 1 \| xxxxxxxxx`  |
| `halt`    | Para execução do programa      | `001111 \| xxxxxxxxxx`      |
| `nop`     | Não realiza qualquer operação  | `000000 \| xxxxxxxxxx`      |
| `breakp`  | Insere ponto de parada         | `001110 \| xxxxxxxxxx`      |

