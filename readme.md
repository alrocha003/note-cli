## Note CLI


![Npm logo](./resources/npm.svg)  

![Node logo](./resources/nodejs.svg)

### Pacote de execução npx para salvar notas do dia-a-dia.

--------

Note CLI é um utilitário de linha de comando para salvar notas de texto que podem ser consultadas na própria linha de comando. A idéia é criar uma lista de consulta rápida dentro do terminal para consulta

O utilitário é construído utilizando node.Js e npx, onde o mesmo será executa via linha de comando pelo comando 

```sh
 npx ./src 
 ```
Saída:

 ```sh
Necessário informar opção de execução - Ex: --add | -a | -l | --list 5
 ```

Para adicionar uma nova nota:

```sh
 npx ./src --add='Nova nota' 
 ```
Saída:
```sh
(1) nova nota adicionada.
```

Para listar as notas armazenadas:

```sh
 npx ./src --list 
 ```
 ou
```sh
 npx ./src -l 
 ```

Saída:

![Comando de listagem](./resources/recorte_comando_listar.png)




