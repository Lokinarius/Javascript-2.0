//Posição dos Arrays
//                0         1         2
const alunos = ['João','Francisco','Maria']
console.log(alunos);
console.log(alunos[2]);

//Modificando o Array 
alunos[0] = 'Pedro';
alunos[1] = 'Ana Luíza';
console.log(alunos);

//Adicionando elementos ao Array
alunos[alunos.length] = 'Alex';
alunos[alunos.length] = 'Felipe';
alunos[alunos.length] = 'Júlia';
console.log(alunos)
//segunda forma:
alunos.push('Caroline');
alunos.push('Giovanni');
alunos.push('Andressa')
console.log(alunos)