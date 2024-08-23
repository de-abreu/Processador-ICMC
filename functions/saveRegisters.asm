; Salva o contexto dos registradores para posterior recuperação,
; e carrega o valor dos argumentos nestes. A ser utilizado no
; inicio de demais funções.
; Argumentos: Nenhum
; Retorna: Nada

saveRegisters:
    pop r0         ; Armazena o endereço de retorno da função
    push r1
    push r2
    push r3
    push r4
    push r5
    push r6
    push r7
    push r0        ; Coloca-o de volta no topo da pilha
    load r1, Arg1
    load r2, Arg2
    load r3, Arg3
    load r4, Arg4
    load r5, Arg5
    load r6, Arg6
    load r7, Arg7
    loadn r0, #0
    rts            ; Desempilha e retorna.
