---
title: 'How to Use'
description: 'Considerations on the syntax and resources of the language'
---

# How to Use

The ICMC assembly language is of type [RISC](https://pt.wikipedia.org/wiki/RISC) with 16-bit words. It only allows characters present in the ASCII standard.

## Comments

Comments are segments of text preceded by the character `;`. All text after this character, and until the end of the line, is ignored in the assembly process. Comments are a powerful tool to make the assembly code and its intention more intelligible to the reader. For example:

```asmatmel
mov r0, r1 ; Register 0 receives the content of register 1
```

:::tip
The ASCII standard does not allow accented characters. However, using them in comments is still possible, since they are ignored in the assembly process.
:::

## Instructions

Instructions are declared by their name, followed by their arguments (if any), separated by commas. For example:

```asmatmel
add r0, r1, r2 ; r0 receives the sum of the values in r1 and r2
halt           ; Ends the program execution, does not receive arguments
```
The arguments for instructions are:
- [**general-purpose registers** (`r0` to `r7`)](#registers): load the values stored in these registers;
- [**labels**](#labels): load the values stored in the memory positions pointed to by these labels;
- **immediate values**.

## Immediate Values
Values preceded by `#`, which can be:

- Any positive integer **x** such that 0 ≤ x < 65535 (numbers that can be represented in up to 16 bits, without a sign bit). For example:
```asmatmel
loadn r0, #0 ; loads the value zero into r0
 ```

- Alphanumeric characters, `.`, `_`, and special characters:
    - `\\`: backslash
    - `\n`: newline
    - `\0`: null character
    - `\"`: double quotes

For example:
```asmatmel
loadn r0, #'c' ; loads the ASCII index value for the character c into register r0
```
- Memory addresses pointed to by labels. For example:
```asmatmel
loadn r0, #hello ; loads the index of the memory position pointed to by the label "hello".
```

## Registers
Memory addresses designated for storing data being processed, given the speed at which these can be accessed. These are:

### General-Purpose Registers

Indicated by `rx`, where `x` is an integer from 0 to 7. Used for temporary storage of values to be processed.

### Flag Register
Indicated by `fr`, assumes certain values to denote when

- the last comparison (`cmp`) has a result
    - equal
    - greater
    - less
- the last arithmetic operation
    - results in zero
    - results in a negative number
    - results in an [overflow](https:/.wikipedia.org/wiki/Integer_overflow)
    - is a division by zero

:::info
The flag register is used in commands of the type call and jump; and consequently in the creation of [functions](#functions) and [loops](#loops).
:::

### Stack Pointer

Indicated by `sp`, indicates the top of the [stack](#the-stack).

### Program Counter

Indicated by `pc`, indicates the memory address of the next instruction to be executed.

## The Stack

A data structure that allows sequential storage of data in memory. This data can later be accessed in reverse order of how it was stored.

This can be done as follows:

```asmatmel
push r0 ; Decreases the address in the sp register by one position and stores the data in r0 in the memory address described by sp.
pop r1  ; Stores in r1 the data in the memory address described by sp and increments sp by one position.
```
As a result of this operation, a copy of the data in `r0` is made to `r1`.

:::info
The stack is commonly used as a means of [saving and restoring the context] of the registers when using nested functions.
:::

## Labels
Names designated to reference specific memory positions. All words followed by the character `:` will be interpreted as labels.

As we will see below, this is a useful resource for a variety of purposes, such as declaring variables, functions, and loops.

## Variables
Variables can be created using the following commands:

### var
Receives a positive number and allocates a number of memory positions. Example:
```asmatmel
aux : var #1  ; Variable 'aux'
vet : var #10 ; Vector 'vet' of 10 positions
```

The values of variables can be retrieved or assigned using commands of the type *load* and *store*, seen [later](/docs/linguagem-assembly/instrucoes).

### static
Receives an address (or label that points to it), and an immediate value, and at assembly time writes it to the described memory address. Example:

```asmatmel
WIDTH : var #1
    static WIDTH, #40

HEIGHT : var #1
    static HEIGHT, #30
```

The code above declares a pair of variables to store the screen dimensions.

`static` can also be used in conjunction with vectors, assigning an offset to the base address. Example:

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

The code above creates a vector of eight positions and traverses it from start to finish, storing the immediate values `2626` or `3138`. An auxiliary variable is also created to store the value of the vector size.

### string

Receives a text described in double quotes and

1. Allocates a number of memory positions equivalent to the number of characters in it +1 and
2. Fills these memory positions with the characters in sequence, finally adding the terminal character `\0`by the end of it. Example:

```asmatmel
how_to_play0: string "HOW TO PLAY"
```

:::warning
The commands `var`, `static`, and `string` were made to be read at **assembly time**, and **not** during execution. To avoid unintended consequences, segment your code into two parts: one for data and another for instructions. Example:

```asmatmel
jmp main ; Moves the program counter to the memory position of the main function

; Data segment

main:    ; Continues code execution from this point

; Instruction segment
```
:::

## Functions

By "function", we refer to a portion of instructions that, together, perform a specific purpose. Such portions are initiated with a label that names the function and allows it to be invoked by instructions [`call`](/docs/linguagem-assembly/instrucoes#call), and terminated with the instruction `rts`, which returns the `pc` to the position following the `call` instruction that invoked the function. An example of a function would be:
```asmatmel
screenOffset:
    ; Gives the offset that, given the screen's dimensions, corresponds to a given column and row. Values beyond the screen's HEIGHT and WIDTH get wrapped around.
    ; Arguments:
    ; Arg1 = row
    ; Arg2 = column
    ; Returns:
    ; Ret = offset

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

Functions can be called by other functions. As seen above, the functions `saveRegisters` and `restoreRegisters` are called by `screenOffset`

### Optional attributes of a function
The following attributes are optional, but recommended, in the construction of a function.
#### Arguments and return value
Functions usually receive one or more values as "arguments" and "return" a single output value as a result of their operation. Such values can be stored in registers, but it is recommended that they be read and written in memory, since registers are scarce.

The assembler already provides some special labels of optional use for this purpose:

- `Argx`, where `x` is an integer from 0 to 9: used to store function arguments.
- `Ret`: used to store the function return.

#### Saving and restoring the context of registers

Saving the context of registers consists of storing their current values on the stack at the start of a function and restoring their context consists of restoring the values from the stack at the end of the function. This is important so that nested functions do not interfere with the operation of the functions that called them, after they have executed.

The functions [saveRegisters](/docs/biblioteca/funcoes#saveregisters) and [restoreRegisters](/docs/biblioteca/funcoes#restoreregisters) can be used at the beginning and end of each function to fulfill this purpose.

## Loops
Segments of instructions executed repeatedly until a condition, if any, is satisfied. Similar to the commands `for`, `while`, or `do while`, and equivalent to the `goto` command. This is done through instructions [`jmp`](/docs/linguagem-assembly/instrucoes#jump), for example:

```
; Prints an integer value on the screen, with right alignment.
;
; Arguments:
; Arg1 = Integer value to be printed
; Arg2 = Position on the screen from where to start printing
; Arg3 = Color value to print the number
;
; Returns: Nothing

printIntR:
    call saveRegisters
    loadn r4, #10        ; loads the value 10 to apply the modulo operation
    loadn r5, #'0'       ; loads the index value of the character 0

    pirLoop:    ; starts the printing loop
        mod r6, r1, r4   ; gets the least significant digit of r1
        add r6, r5, r6   ; applies it as an offset to the character map
        add r6, r6, r3   ; applies the color value
        outchar r6, r2   ; prints the character at position r2
        div r1, r1, r4   ; integer division of r1 by 10
        jz pirEnd        ; exits the loop if r1 = 0
        dec r2           ; otherwise, decrements r2
        jmp pirLoop      ; and continues

    pirEnd:
        call restoreRegisters
        rts
```
