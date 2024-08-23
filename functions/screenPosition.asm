; Dados valores para linha e coluna, retorna o índice que
; corresponde a posição esperada na tela. Valores maiores que
; aqueles definidos em `HEIGHT` e `WIDTH` descrevem voltas na
; tela.
;
; Argumentos:
; Arg1:   Linha
; Arg2:   Coluna
; HEIGHT: Altura da tela
; WIDTH:  Largura da tela
;
; Retorna:
; Ret:    Índice da posição na tela

screenPosition:
    call saveRegisters
    load r3, HEIGHT
    load r4, WIDTH
    mod r1, r1, r3
    mul r1, r1, r4
    mod r2, r2, r4
    add r1, r1, r2
    store Ret, r1
    call restoreRegisters
    rts
