; Recupera o contexto dos registradores à partir da pilha. A ser
; utilizado ao término das funções.
; Argumentos : Nenhum
; Retorna: Nada

restoreRegisters:
    pop r0
    pop r7
    pop r6
    pop r5
    pop r4
    pop r3
    pop r2
    pop r1
    push r0
    loadn r0, #0
    rts
