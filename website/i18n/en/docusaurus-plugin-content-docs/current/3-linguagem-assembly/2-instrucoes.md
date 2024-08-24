---
title: Instruction List
description: All instructions included by default
---

# Instruction List

Below is a list of all functions defined by default for the ICMC processor assembly language. For each instruction, there is:

- an explanation of its functionality or an explanatory pseudo-code, the latter in notation similar to that found in the [C programming language](https://en.wikipedia.org/wiki/C_(programming_language)#Operators).

- the specification of the instruction format in binary code. The following conventions are assumed:
    - `x`: bit whose value for the instruction in question is not significant;
    - `|`: separation between instruction fields;
    - `c`: "carry"
    - `> end`: a 16-bit memory address, described on the line following the instruction;
    - `> num`: a 16-bit positive integer value, described on the line following the instruction.

## Data Manipulation Instructions
### Memory Access

Instructions for writing (store) to and reading (load) from memory.

| Mnemonic           | Pseudo-code    | Instruction format                  |
| :---               | :---           | :---                                |
| `store label, rx`  | `*label = rx`  | `110001 \| rx \| xxxxxxx \| > end`  |
| `storei rx, ry`    | `**rx = ry`    | `111101 \| rx \| ry \| xxxx`        |
| `load rx, label`   | `rx = *label`  | `110000 \| rx \| xxxxxxx \| > end`  |
| `loadi rx, ry`     | `rx = **ry`    | `111100 \| rx \| ry \| xxxx`        |
| `loadn rx, #num`   | `rx = num`     | `111000 \| rx \| xxxxxxx \| > num`  |

### Movement between Registers

Copies the value of one register to another.

| Mnemonic     | Pseudo-code  | Instruction Format          |
| :---          | :---           | :---                          |
| `mov rx, ry`  | `rx = ry`      | `110011 \| rx \| ry \| xxx0`  |
| `mov rx, sp`  | `rx = sp`      | `110011 \| rx \| xxxxx01`     |
| `mov sp, rx`  | `sp = rx`      | `110011 \| rx \| xxxxx11`     |

## Arithmetic Operations

| Mnemonic           | Pseudo-code             | Instruction Format               |
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
When an arithmetic operation results in zero or a negative number, the `fr` register assumes a value corresponding to these results.
:::

## Logical Operations

| Mnemonic          | Pseudo-code             | Instruction Format               |
| :---              | :---                    | :---                             |
| `and rx, ry, rz`  | `rx = ry & rz`          | `010010 \| rx \| ry \| rz \| x`  |
| `or rx, ry, rz`   | `rx = ry        \| rz`  | `010011 \| rx \| ry \| rz \| x`  |
| `xor rx, ry, rz`  | `rx = ry ^ rz`          | `010100 \| rx \| ry \| rz \| x`  |
| `not rx, ry`      | `rx = ~ry`              | `010101 \| rx \| ry \| xxxx`     |

## Bit Movement
Commands that manipulate the values stored in registers in their binary form.

### rotl

| Mnemonic         | Instruction Format            |
| :---             | :---                          |
| `rotl rx, #num`  | `010000 \| rx \| 10x \| num`  |

Moves all bits `num` digits to the **left**, and the `num` most significant digits are "rotated" to become the `num` least significant digits.

### rotr

| Mnemonic         | Instruction Format            |
| :---             | :---                          |
| `rotr rx, #num`  | `010000 \| rx \| 11x \| num`  |

Moves all bits `num` digits to the **right**, and the `num` least significant digits become the `num` most significant digits.
### shiftl0

| Mnemonic            | Instruction Format            |
| :---                | :---                          |
| `shiftl0 rx, #num`  | `010000 \| rx \| 000 \| num`  |

Move all bits `num` digits to the **left**, and fills the `num` least significant bits with `0`.

### shiftl1

| Mnemonic            | Instruction Format            |
| :---                | :---                          |
| `shiftl1 rx, #num`  | `010000 \| rx \| 001 \| num`  |

Move all bits `num` digits to the **left**, and fills the `num` least significant bits with `1`.

### shiftr0

| Mnemonic            | Instruction Format            |
| :---                | :---                          |
| `shiftr0 rx, #num`  | `010000 \| rx \| 010 \| num`  |

Move all bits `num` digits to the **right**, and fills the `num` most significant bits with `0`.

### shiftr1

| Mnemonic            | Instruction Format            |
| :---                | :---                          |
| `shiftr1 rx, #num`  | `010000 \| rx \| 011 \| num`  |

Move all bits `num` digits to the **right**, and fills the `num` most significant bits with `1`.

:::info
In all bit movement instructions, `num` is a 4-bit positive integer.
:::

## Input/Output
### Input
| Mnemonic     | Instruction Format         |
| :---         | :---                       |
| `inchar rx`  | `110101 \| rx \| xxxxxxx`  |

Stores in `rx` a value corresponding to a key pressed at the moment the instruction is read.

:::info
The value stored when no key is pressed is **255**.
:::
### Output
| Mnemonic          | Instruction Format      |
| :---              | :---                    |
| `outchar rx, ry`  | `110010 \| rx \| xxxx`  |

Prints on the screen at index `ry` the character at index `rx`.

## Stack

Stores (`push`) or removes (`pop`) data from the stack.

| Mnemonic   | Instruction Format              |
| :---       | :---                            |
| `push rx`  | `000101 \| rx \| 0 \| xxxxxx`   |
| `push fr`  | `000101 \| xxx \| 1 \| xxxxxx`  |
| `pop rx`   | `000110 \| rx \| 0 \| xxxxxx`   |
| `push fr`  | `000110 \| xxx \| 1 \| xxxxxx`  |

## Comparison
| Mnemonic      | Instruction Format            |
| :---          | :---                          |
| `cmp rx, ry`  | `010110 \| rx \| ry \| xxxx`  |

Depending on the result of the comparison between the values stored in `rx` and `ry`, the `fr` register assumes a value to indicate if `rx` is equal, greater, or less than `ry`.

## Jump

If the condition is met in `fr`, then `pc = *label`

| Mnemonic      | Condition                 | Instruction Format          |
| :---          | :---                      | :---                        |
| `jmp label`   | Unconditional             | `000010 \| 0000 \| xxxxxx`  |
| `jeq label`   | **EQ**ual                 | `000010 \| 0001 \| xxxxxx`  |
| `jne label`   | **N**ot **E**qual         | `000010 \| 0010 \| xxxxxx`  |
| `jz label`    | **Z**ero                  | `000010 \| 0011 \| xxxxxx`  |
| `jnz label`   | **N**ot **Z**ero          | `000010 \| 0100 \| xxxxxx`  |
| `jc label`    | **C**arry                 | `000010 \| 0101 \| xxxxxx`  |
| `jnc label`   | **N**o **C**arry          | `000010 \| 0110 \| xxxxxx`  |
| `jgr label`   | **GR**eater than          | `000010 \| 0110 \| xxxxxx`  |
| `jle label`   | **LE**sser than           | `000010 \| 1000 \| xxxxxx`  |
| `jeg label`   | **E**qual or **G**reater  | `000010 \| 1001 \| xxxxxx`  |
| `jel label`   | **E**qual or **L**esser   | `000010 \| 1010 \| xxxxxx`  |
| `jov label`   | **OV**erflow              | `000010 \| 1011 \| xxxxxx`  |
| `jnov label`  | **N**o **OV**erflow       | `000010 \| 1100 \| xxxxxx`  |
| `jn label`    | **N**egative              | `000010 \| 1101 \| xxxxxx`  |
| `jdz label`   | **D**ivision by **Z**ero  | `000010 \| 1110 \| xxxxxx`  |

## Call
If the condition is met in `fr`, then execute the following instructions:

```asmatmel
push pc
jmp label
```

| Mnemonic      | Condition                 | Instruction Format          |
| :---          | :---                      | :---                        |
| `call label`  | Unconditional             | `000011 \| 0000 \| xxxxxx`  |
| `ceq label`   | **EQ**ual                 | `000011 \| 0001 \| xxxxxx`  |
| `cne label`   | **N**ot **E**qual         | `000011 \| 0010 \| xxxxxx`  |
| `cz label`    | **Z**ero                  | `000011 \| 0011 \| xxxxxx`  |
| `cnz label`   | **N**ot **Z**ero          | `000011 \| 0100 \| xxxxxx`  |
| `cc label`    | **C**arry                 | `000011 \| 0101 \| xxxxxx`  |
| `cnc label`   | **N**o **C**arry          | `000011 \| 0110 \| xxxxxx`  |
| `cgr label`   | **GR**eater than          | `000011 \| 0110 \| xxxxxx`  |
| `cle label`   | **LE**sser than           | `000011 \| 1000 \| xxxxxx`  |
| `ceg label`   | **E**qual or **G**reater  | `000011 \| 1001 \| xxxxxx`  |
| `cel label`   | **E**qual or **L**esser   | `000011 \| 1010 \| xxxxxx`  |
| `cov label`   | **OV**erflow              | `000011 \| 1011 \| xxxxxx`  |
| `cnov label`  | **N**o **OV**erflow       | `000011 \| 1100 \| xxxxxx`  |
| `cn label`    | **N**egative              | `000011 \| 1101 \| xxxxxx`  |
| `cdz label`   | **D**ivision by **Z**ero  | `000011 \| 1110 \| xxxxxx`  |

## Return

Complementing the `call` instruction, this performs:

```asmatmel
loadi pc, sp
inc sp
inc pc
```

| Mnemonic  | Instruction Format              |
| :---      | :---                            |
| `rts`     | `000100 \| xxxx \| x \| xxxxx`  |

## Control

| Mnemonic  | Action                  | Instruction Format          |
| :---      | :---                    | :---                        |
| `clearc`  | `c = 0`                 | `001000 \| 0 \| xxxxxxxxx`  |
| `setc`    | `c = 1`                 | `001000 \| 1 \| xxxxxxxxx`  |
| `halt`    | Stop program execution  | `001111 \| xxxxxxxxxx`      |
| `nop`     | No operation            | `000000 \| xxxxxxxxxx`      |
| `breakp`  | Insert breakpoint       | `001110 \| xxxxxxxxxx`      |

