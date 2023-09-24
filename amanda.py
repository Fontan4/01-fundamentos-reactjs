# Recebe os valores iniciais
n, y = input().split()

#Separa os valores em duas variáveis, meses em como inteiro e preço do carro como float
meses_trabalho = int(n)
preco_carro = float(y)

#Cria variavel para armazenar o valor acumulado mensal
valor_acumulado = 0

#Cria variável para armazenar o tempo para comprar o carro
time = ''

#Loop for para receber os valores mensais, meses_trabalho + 1 para incluir o último mês, pois o radint "corta" o último valor
for x in range(1, meses_trabalho + 1):
    variacao = float(input())
    #Soma o valor acumulado com a variação mensal
    valor_acumulado += variacao

    #Se o valor acumulado for maior ou igual ao preço do carro e o tempo ainda não foi definido, 
    # O tempo recebe o valor do mês e continua o loop para receber o valor total arrecadado
    if valor_acumulado >= preco_carro and time == '':
        time = x
        continue
# Se o valor acumulado for menor que o preço do carro no período, o tempo recebe 0 e o valor final recebe o valor acumulado
# uma vez que não foi possível arrecadar o valor do carro
if valor_acumulado < preco_carro:
    valor_final = valor_acumulado
    print("0")
# Se o valor acumulado for maior que o preço do carro, o valor final recebe o valor acumulado menos o preço do carro
else:
    valor_final = valor_acumulado - preco_carro
    print(time, f'{valor_final:.2f}')