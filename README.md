# **Curso-DIO-Desafio**
Desafio da plataforma DIO sobre Git/GitHub

## Treinando o primeiro repositório no GitHub

Sabendo que o **GitHub** é uma plataforma de hospedagem com a finalidade de versionamento e que pode trabalhar com o [Git](https://git-scm.com/), aqui vão alguns comandos do git para auxiliar no dia a dia.

### Clonando um repositório remoto

Após criar um repositório remoto no GitHub, existem algumas formas de clonar localmente. Porém, falarei apenas de uma delas, que é através da URL. Assim que o repositório for criado, na sua tela haverá um botão verde "Code". Ao clicar nesse botão, será possível encontrar uma URL que você deve copiar. Após copiar, basta abrir o Git Bash em seu dispositivo e usar o comando:

```
git clone URL
```
Substitua "URL" pelo link que você copiou. Após usar esse comando, você terá sua cópia local do repositório remoto.

### Comandos básicos do Git

```
git add *
```
Isso torna todos os arquivos modificados prontos para serem commitados, ou seja, as alterações serão salvas dentro do próximo commit.

```
git commit -m 'Mensagem'
```
Agora que já preparamos as alterações, podemos salvá-las dentro do commit. O parâmetro -m é usado para adicionar uma mensagem que descreve as mudanças feitas neste commit.

```
git push
```
Após termos salvo as alterações, podemos enviá-las ao diretório remoto através do comando acima.
