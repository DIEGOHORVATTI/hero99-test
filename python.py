class Veiculo:
    def __init__(self, proprietario, combustivel, modelo, cor, chassi, ano, placa):
        self.proprietario = proprietario
        self.combustivel = combustivel
        self.modelo = modelo
        self.cor = cor
        self.chassi = chassi
        self.ano = ano
        self.placa = placa

veiculos = [
    Veiculo('Proprietário 1', 'diesel', 'Modelo 1', 'Cor 1', '123456', 1985, 'ABC1234'),
    Veiculo('Proprietário 2', 'diesel', 'Modelo 2', 'Cor 2', '234567', 1978, 'ADE5678'),
    Veiculo('Proprietário 3', 'gasolina', 'Modelo 3', 'Cor 3', '345678', 1990, 'AEI2468'),
    Veiculo('Proprietário 4', 'alcool', 'Modelo 4', 'Cor 4', '456789', 1985, 'BDF1357'),
    Veiculo('Proprietário 5', 'gasolina', 'Modelo 5', 'Cor 5', '567890', 2000, 'BDF2468'),
    Veiculo('Proprietário 6', 'diesel', 'Modelo 6', 'Cor 6', '678901', 1978, 'BDF3579'),
    Veiculo('Proprietário 7', 'alcool', 'Modelo 7', 'Cor 7', '789012', 1985, 'BDF4680'),
    Veiculo('Proprietário 8', 'diesel', 'Modelo 8', 'Cor 8', '890123', 1990, 'BDF5791'),
    Veiculo('Proprietário 9', 'gasolina', 'Modelo 9', 'Cor 9', '901234', 1985, 'BDF6802'),
    Veiculo('Proprietário 10', 'diesel', 'Modelo 10', 'Cor 10', '012345', 1978, 'BDF7913'),
]


charactersSpecial = ['A', 'E', 'I', 'O', 'U']

# Listar proprietários de carros do ano de 1980 ou posterior movidos a diesel
def listOwnersDiesel():
    return [veiculo.proprietario for veiculo in veiculos if veiculo.ano >= 1980 and veiculo.combustivel == 'diesel']

print('\nProprietários de carros do ano de 1980 ou posterior movidos a diesel:')
print(listOwnersDiesel())

# Listar placas que começam com a letra A e terminam com 0, 2, 4 ou 7 e seus respectivos proprietários
def listPlatesWithFeatures():
    return [{'placa': veiculo.placa, 'proprietario': veiculo.proprietario} for veiculo in veiculos if veiculo.placa[0] == 'A' and veiculo.placa[-1] in ['0', '2', '4', '7']]

print('\nPlacas que atendem às características:')
print(listPlatesWithFeatures())

# Listar modelo e cor dos veículos com placas que têm como segunda letra uma vogal e soma dos valores numéricos é par
def listModelColorPlatesSpecial():
    # Função para verificar se a soma dos algarismos da placa é par
    def sumDigitsPlateEven(plate):
        # Estraí os números da placa
        numbersPlate = [int(d) for d in plate if d.isdigit()]
        
        # checa se a soma dos números é par
        return sum(numbersPlate) % 2 == 0

    # Filtre os veículos que atendem às condições especificadas
    specialVehicles = []
    for vehicle in vehicles:
        # Confira se a segunda letra da placa é uma vogal
        if vehicle.plate[1] in charactersSpecial and sumDigitsPlateEven(vehicle.plate):
            specialVehicles.append({'model': vehicle.model, 'color': vehicle.color})

    return specialVehicles

print('\nModelo e cor dos veículos com placas especiais:')
print(listModelColorPlatesSpecial())

# Trocar proprietário com base no número do chassi para carros com placas sem dígitos iguais a zero
def changeOwnerByChassis(chassi, novo_proprietario):
    for veiculo in veiculos:
        if veiculo.chassi == chassi and '0' not in veiculo.placa:
            veiculo.proprietario = novo_proprietario
            print(f'Proprietário do veículo com chassi {chassi} alterado para {novo_proprietario}')
            return
    print('\nVeículo não encontrado ou placa contém dígitos iguais a zero.')

changeOwnerByChassis('123456', 'Novo Proprietário')