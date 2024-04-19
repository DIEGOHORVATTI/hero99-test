type Veiculo = {
  proprietario: string;
  combustivel: 'alcool' | 'diesel' | 'gasolina';
  modelo: string;
  cor: string;
  chassi: string;
  ano: number;
  placa: string;
};

const vehiclesMock: Veiculo[] = [
  {
    proprietario: 'Proprietário 1',
    combustivel: 'diesel',
    modelo: 'Modelo 1',
    cor: 'Cor 1',
    chassi: '123456',
    ano: 1985,
    placa: 'ABC1234'
  },
  {
    proprietario: 'Proprietário 2',
    combustivel: 'diesel',
    modelo: 'Modelo 2',
    cor: 'Cor 2',
    chassi: '234567',
    ano: 1978,
    placa: 'ADE5678'
  },
  {
    proprietario: 'Proprietário 3',
    combustivel: 'gasolina',
    modelo: 'Modelo 3',
    cor: 'Cor 3',
    chassi: '345678',
    ano: 1990,
    placa: 'AEI2468'
  },
  {
    proprietario: 'Proprietário 4',
    combustivel: 'alcool',
    modelo: 'Modelo 4',
    cor: 'Cor 4',
    chassi: '456789',
    ano: 1985,
    placa: 'BDF1357'
  },
  {
    proprietario: 'Proprietário 5',
    combustivel: 'gasolina',
    modelo: 'Modelo 5',
    cor: 'Cor 5',
    chassi: '567890',
    ano: 2000,
    placa: 'BDF2468'
  },
  {
    proprietario: 'Proprietário 6',
    combustivel: 'diesel',
    modelo: 'Modelo 6',
    cor: 'Cor 6',
    chassi: '678901',
    ano: 1978,
    placa: 'BDF3579'
  },
  {
    proprietario: 'Proprietário 7',
    combustivel: 'alcool',
    modelo: 'Modelo 7',
    cor: 'Cor 7',
    chassi: '789012',
    ano: 1985,
    placa: 'BDF4680'
  },
  {
    proprietario: 'Proprietário 8',
    combustivel: 'diesel',
    modelo: 'Modelo 8',
    cor: 'Cor 8',
    chassi: '890123',
    ano: 1990,
    placa: 'BDF5791'
  },
  {
    proprietario: 'Proprietário 9',
    combustivel: 'gasolina',
    modelo: 'Modelo 9',
    cor: 'Cor 9',
    chassi: '901234 ',
    ano: 1985,
    placa: 'BDF6802'
  },
  {
    proprietario: 'Proprietário 10',
    combustivel: 'diesel',
    modelo: 'Modelo 10',
    cor: 'Cor 10',
    chassi: '012345',
    ano: 1978,
    placa: 'BDF7913'
  }
];

const charactersSpecial = ['A', 'E', 'I', 'O', 'U'];

// Listar proprietários de carros do ano de 1980 ou posterior movidos a diesel
function listOwnersDiesel(): string[] {
  return vehiclesMock
    .filter(
      (veiculo) => veiculo.ano >= 1980 && veiculo.combustivel === 'diesel'
    )
    .map((veiculo) => veiculo.proprietario);
}

console.log(
  '\nProprietários de carros do ano de 1980 ou posterior movidos a diesel:'
);
console.log(listOwnersDiesel());

// Listar placas que começam com a letra A e terminam com 0, 2, 4 ou 7 e seus respectivos proprietários
function listPlatesWithFeatures(): { placa: string; proprietario: string }[] {
  return vehiclesMock
    .filter(
      (veiculo) =>
        veiculo.placa[0] === 'A' &&
        /[0247]$/.test(veiculo.placa[veiculo.placa.length - 1])
    )
    .map((veiculo) => ({
      placa: veiculo.placa,
      proprietario: veiculo.proprietario
    }));
}

console.log('\nPlacas que atendem às características:');
console.log(listPlatesWithFeatures());

// Listar modelo e cor dos veículos com placas que têm como segunda letra uma vogal e soma dos valores numéricos é par
function listModelColorPlatesSpecial(): { modelo: string; cor: string }[] {
  return vehiclesMock
    .filter(
      (veiculo) =>
        charactersSpecial.includes(veiculo.placa[1]) &&
        sumDigitsPlacaPar(veiculo.placa)
    )
    .map((veiculo) => ({ modelo: veiculo.modelo, cor: veiculo.cor }));
}

function sumDigitsPlacaPar(placa: string): boolean {
  const numbersPlate = placa.match(/\d/g);

  if (!numbersPlate) return false;

  const sum = numbersPlate.reduce((acc, num) => acc + parseInt(num), 0);

  return sum % 2 === 0;
}

console.log('\nModelo e cor dos veículos com placas especiais:');
console.log(listModelColorPlatesSpecial());

// Trocar proprietário com base no número do chassi para carros com placas sem dígitos iguais a zero
function changeOwnerByChassis(chassi: string, newOwner: string): void {
  const veiculo = vehiclesMock.find(
    (veiculo) => veiculo.chassi === chassi && !veiculo.placa.includes('0')
  );

  if (veiculo) {
    veiculo.proprietario = newOwner;
    console.log(
      `\nProprietário do veículo com chassi ${chassi} alterado para ${newOwner}.`
    );
  }

  if (!veiculo) {
    console.log(
      '\nVeículo não encontrado ou placa contém dígitos iguais a zero.'
    );
  }
}

changeOwnerByChassis('123456', 'Novo Proprietário');
