; Função que atrasa a execução do jogo por um período
; para obter uma entrada do jogador. Se a entrada é aquela
; esperada, o atraso é cancelado.
;
; Argumentos:
; Arg1 = Fator de atraso
; Arg2 = Entrada esperada
;
; Retorna:
; Ret =  0, se não foi pressionada nenhuma tecla, caso
; contrário, o valor ASCII da tecla pressionada

takeInput:
    call saveRegisters
    loadn r3, #1000 ; Atraso base, implica um microssegundo em 1 MHz
    loadn r4, #255  ; Valor padrão retornado por inchar quando não é detectada pressão de tecla
    store a0, r0

    delay_A:
        mov r5, r1
        delay_B:
            inchar r6
            cmp r4, r6
            jeq delayContinue
            store a0, r6
            cmp r2, r6
            jeq delayEnd
    delayContinue:
        dec r5
        jnz delay_B
        dec r3
        jnz delay_A
    delayEnd:
    call restoreRegisters
    rts
