# CHANGELOG
## Versao 2.1.0:
  Modificada a por argv: para indicar o nome de saida eh necessario usar a opcao -o
  Opcao verbose adicionada: mensagens so serao impressas se a opcao estiver ativada
  Modificado impressao de erro ao encontrar um label incorreto
    Toda a linha eh impressa, para facilitar o entendimento se realmente eh um label incorreto ou erro de escrita em uma instrucao

## Versao 2.0.2:
  modificada estrutura basica do parser, para aumentar a qualidade do aviso de erros. O aviso de erro segue a mesma regra do compilador GCC: se falta ':' ou algo assim, eh indicado na linha seguinte.
    Se a instrucao nao eh reconhecida, ela eh tratada como um label, e portanto, vai ser avisado que falta um ':' no final da instrucao

## versao 2.0.1:
  Modificado o jeito de aviso de erro ou sucesso de montagem:
    Adicionado uma função chamada GetAttention, que imprime uma string tantas vezes quanto couber na tela, chamada quando ocorre um erro ou a compilacao eh bem sucedida.
  Modificado a maneira de zerar o vetor de parser para uma mais otimizada.


## versao 2.0.0:
  adicionado opcao de montar sem colocar o nome do codigo de saida.
    Se o arquivo de entrada tiver a extensao .asm, ela é trocada por .mif, do contrario, .mif eh adicionado ao final do nome
  Adicionado um makefile, para facilitar a instalacao
