const clave = ['nombre', 'edad', 'ciudad'];
const valores = ['Juan', 30, 'Madrid'];
const objeto = {};
for (let i = 0; i < clave.length; i++) 
{
    objeto[clave[i]] = valores[i];
}
console.log(objeto);
