; Imprime um valor inteiro na tela, com alinhamento à direita.
;
; Argumentos:
; Arg1 = Valor inteiro a ser impresso
; Arg2 = Posição na tela a partir de onde começar a imprimir
; Arg3 = Valor de cor para imprimir o número
;
; Retorna: Nada

printIntR:
    call saveRegisters
    loadn r4, #10        ; carrega o valor 10 para aplicar a operação de módulo
    loadn r5, #'0'       ; carrega o valor índice do caractere 0

    pirLoop:    ; inicia o laço de impressão
        mod r6, r1, r4   ; obtém o dígito menos significativo de r1
        add r6, r5, r6   ; aplica-o como um deslocamento no mapa de caracteres
        add r6, r6, r3   ; aplica o valor da cor
        outchar r6, r2   ; imprime o caractere na posição r2
        div r1, r1, r4   ; divisão inteira de r1 por 10
        jz pirEnd        ; sai do loop se r1 = 0
        dec r2           ; caso contrário, decrementa r2
        jmp pirLoop      ; e continua

    pirEnd:
        call restoreRegisters
        rts
