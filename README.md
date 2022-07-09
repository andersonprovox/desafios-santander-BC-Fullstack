# Problemas resolvidos DIO/beecrowd

Problemas resolvidos de acordo com o que foi proposto no bootcamp da Digital Innovation One e encontrado dentro da plataforma da beecrowd

## Problema 1927 - Guilherme e suas pipas

Guilherme adora brincar com pipas, pipas de várias cores, formas e tamanhos. Ele tem percebido que para as pipas possuírem maior estabilidade, e dessa forma voarem mais alto, elas devem possuir um barbante bem esticado ligando todos os pares de pontas não vizinhas.

Apesar de ser uma criança bastante criativa e astuta, Guilherme não sabe como determinar a quantidade de barbantes que ele terá que utilizar para tornar uma pipa de n lados, estável. Você pode ajudá-lo?.

**Entrada**

A entrada será composta por uma única linha, que contém um inteiro 3 ≤ n ≤ 105, representando o número de lados da pipa.

**Saída**

Imprima um número inteiro, que será a quantidade de barbantes que Guilherme terá que utilizar para tornar a pipa de n lados estável.

*Problema resolvido nas seguintes linguagens:*
- JavaScript

## Problema 1959 - Polígonos Retangulares Simples

Na geometria Euclidiana, um polígono regular é um polígono em que todos os ângulos são iguais e todos os lados tem o mesmo comprimento. Um polígono simples é aquele cujos segmentos de reta não se interceptam. Abaixo pode-se ver vários mosaicos feitos por polígonos regulares.

Você deve escrever um programa que, dados o número e o comprimento dos lados de um polígono regular, mostre seu perímetro.

**Entrada**

A entrada tem dois inteiros positivos: N e L, que são, respectivamente, o número de lados e o comprimento de cada lado de um polígono regular (3 ≤ N ≤ 1000000 and 1 ≤ L ≤ 4000).

**Saída**

A saída é o perímetro P do polígono regular em uma única linha.

*Problema resolvido nas seguintes linguagens:*
- JavaScript

## Problema 1101 - Esfera

Faça um programa que calcule e mostre o volume de uma esfera sendo fornecido o valor de seu raio (R). A fórmula para calcular o volume é: (4/3) * pi * R3. Considere (atribua) para pi o valor 3.14159.

Dica: Ao utilizar a fórmula, procure usar (4/3.0) ou (4.0/3), pois algumas linguagens (dentre elas o C++), assumem que o resultado da divisão entre dois inteiros é outro inteiro.

**Entrada**

O arquivo de entrada contém um valor de ponto flutuante (dupla precisão), correspondente ao raio da esfera.

**Saída**

A saída deverá ser uma mensagem "VOLUME" conforme o exemplo fornecido abaixo, com um espaço antes e um espaço depois da igualdade. O valor deverá ser apresentado com 3 casas após o ponto.

*Problema resolvido nas seguintes linguagens:*
- JavaScript

## Problema 1589 - Bob Conduite

Você tem em mãos dois cabos circulares de energia. O primeiro cabo  tem raio R1 e o segundo raio R2. Você precisa comprar um conduite  circular (veja a imagem abaixo que ilustra um conduite) de maneira a  passar os dois cabos por dentro dele:

![img](https://resources.urionlinejudge.com.br/gallery/images/problems/UOJ_1589.jpg)

Qual o menor raio do conduite que você deve comprar? Em outras  palavras, dado dois círculos, qual o raio do menor círculo que possa  englobar ambos os dois?

**Entrada**

Na primeira linha teremos um inteiro **T** (**T** ≤ 10000), indicando o número de casos de teste.

Na única linha de cada caso teremos dois números inteiros **R1** e **R2**, indicando os respectivos raios. Os inteiros serão positivos e todas as contas caberão em um inteiro normal de 32 bits.

**Saída**

Em cada caso, imprima o menor raio possível em uma única linha

*Problema resolvido nas seguintes linguagens:*
- Java

## Problema 2374 - Pneu


Calibrar os pneus do carro deve ser uma tarefa cotidiana de todos os motoristas. Para isto, os postos de gasolina possuem uma bomba de ar. A maioria das bombas atuais são eletrônicas, permitindo que o motorista indique a pressão desejada num teclado. Ao ser ligada ao pneu, a bomba primeiro lê a pressão atual e calcula a diferença de pressão entre a desejada e a lida. Com esta diferença ela esvazia ou enche o pneu para chegar na pressão correta.

Sua ajuda foi requisitada para desenvolver o programa da próxima bomba da SBC - Sistemas de Bombas Computorizadas.

Escreva um programa que, dada a pressão desejada digitada pelo motorista e a pressão do pneu lida pela bomba, indica a diferença entre a pressão desejada e a pressão lida.

**Entrada**

A primeira linha da entrada contém um inteiro N que indica a pressão desejada pelo motorista (1 ≤ N ≤ 40). A segunda linha contém um inteiro M que indica a pressão lida pela bomba (1 ≤ M ≤ 40).
**Saída**

Seu programa deve imprimir uma única linha, contendo a diferença entre a pressão desejada e a pressão lida.

*Problema resolvido nas seguintes linguagens:*
- Java

## Problema 2029 - Reservatório de mel

Seu Júlio é proprietário de um grande apiário situado no interior da Paraíba. Todo ano, semestralmente, seu Júlio coleta o mel produzido pelas abelhas da sua propriedade e armazena-o em um recipiente de formato CILÍNDRICO para que facilite o transporte do mel para os estabelecimentos que encomendam esse produto natural para a comercialização.
Certa vez seu Júlio percebeu que devido a um crescimento na produção do mel, em relação ao semestre anterior, o recipiente que possuia não suportaria o volume de mel produzido por suas abelhas. Seu Júlio precisa agora que você faça um programa que informado o volume de mel em cm3 e o diâmetro da parte interna do recipiente em cm, calcule e mostre:

- Qual deve ser a altura(em cm) da parte interna do recipiente;

- A área(em cm2) da boca(entrada) do recipiente.

**Obs.:** Considere π = 3.14

**Entrada**

A entrada contém vários casos de teste e termina com EOF. Cada caso de teste consiste de duas linhas contendo em cada uma um valor de ponto flutuante de dupla precisão com duas casas decimais após a vírgula, sendo um V (1.00 ≤ V ≤ 10000.00) e outro D (1.00 ≤ D ≤ 100.00), representando respectivamente o volume e o diâmetro do recipiente.

**Saída**

Para cada teste, a saída contém na primeira linha a mensagem "ALTURA = ", com um espaço depois de ALTURA e outro depois do símbolo de igualdade, seguido do valor da altura do recipiente com duas casas decimais após a vírgula e na segunda linha a mensagem "AREA = ", também com um espaço depois de AREA e outro depois do símbolo de igualdade, seguido do valor da área da boca(entrada) do recipiente com duas casas decimais após a vírgula.

- Não esqueça da quebra de linha ao final da saída,caso contrário você receberá "Presentation Error".

*Problema resolvido nas seguintes linguagens:*

- Java

## Problema ? - Dragão Berrador World

Todos os habitantes do Mundo Mágico estão super animados com a  abertura do Dragão Berrador World, o mais novo parque de diversões do  universo bruxo. 

Infelizmente foram impostas algumas restrições no momento da  homologação do brinquedo pelo Ministério Bruxo. Por questões de  segurança, há uma altura mínima e uma altura máxima que as pessoam devem ter para poder passear na montanha-russa.

Para o dia da inauguração do parque, todos os convidados realizaram  um pré-cadastro no qual indicaram sua altura. Para reduzir filas e  otimizar a operação do parque no primeiro dia, você foi contratado pela  gerência do Dragão Berrador World para fazer um programa que, dado o  número de visitantes, altura mínima, altura máxima e as alturas de todos os visitantes, calcule quantas pessoas poderão andar na montanha-russa.

**Entrada**

A entrada contém vários casos de teste. A primeira linha de cada caso consiste em três inteiros **N** (1 ≤ **N** ≤ 100), **Amin** e **Amax** (50 ≤ **Amin** ≤ **Amax** ≤ 250), o número de visitantes, a altura mínima e máxima em centímetros para andar na montanha-russa, respectivamente.

As **N** linhas seguintes contém, cada uma, um número inteiro representando a altura do visitantes, em centímetros.

**Saída**

Para cada caso de teste, imprima uma única linha com o número visitantes que podem passear na montanha-russa.

*Problema resolvido nas seguintes linguagens:*

- Java