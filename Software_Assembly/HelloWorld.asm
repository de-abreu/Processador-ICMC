; Prints "Hello Mom" at the top left corner of the screen and halts.

jmp main

hello: string "Hello Mom"

main:
    loadn r0, #0     ; r0 = 0
    loadn r1, #hello ; r1 = Pinter to the string to be printed
    loadn r2, #0     ; r2 = Screen position

    printLoop:
        loadi r3, r1     ; Retrieve character to be printed
        cmp r0, r3       ; and check if it is the terminator character.
        jeq endLoop      ; Escape if it is.
        outchar r3, r2   ; Otherwise, print it and continue.
        inc r1           ; Increment string pointer
        inc r2           ; Increment screen position
        jmp printLoop
    endLoop:
        halt
