; Imprime "Hello Mom" ao canto superior esquerdo da tela e encerra.

jmp main

hello: string "Hello Mom"

main:
    loadn r0, #0     ; r0 = 0
    loadn r1, #hello ; r1 = Ponteiro para a string a ser impressa.
    loadn r2, #0     ; r2 = Índice para a posição na tela

    printLoop:
        loadi r3, r1     ; Carrega o caractere a ser impresso
        cmp r0, r3       ; e cheque se este é o caractere terminal.
        jeq endLoop      ; Termine se este for ou,
        outchar r3, r2   ; senão, o imprima e continue.
        inc r1           ; Incremente o ponteiro para a string.
        inc r2           ; Incremente o índice para a posição na tela.
        jmp printLoop
    endLoop:
        halt
