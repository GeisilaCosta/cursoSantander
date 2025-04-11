import React from  'react';

const minhaLista = [
    {id: "1", value:"fruta"},
    {id: "2", value:"carne"},
    {id: "3", value:"peixe"},
]
export default function MinhaLista() { //nome do arquivo, que não pode ser o mesmo da variavel
return minhaLista.map ( (item) => {
    return (
        <div key={item.id}>
            <h3>{item.value}</h3>
        </div>
    )
})
}

/*export default function NossaLista() {
    const nossaLista= [
        <h4 key= '9'>Banana</h4>,
        <h4 key= '8'>maca</h4>,
        <h4 key= '7'>laranja</h4>,
    ]
    return(NossaLista);

    //outra forma  de fazer listas
}*/


