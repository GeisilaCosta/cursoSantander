import { useEffect, useState } from "react"
const minhaLista = [
  { id: '1', value: 'fruta' },
  { id: '2', value: 'legume' },
  { id: '3', value: 'carne' },
]
export default function App() {

  const [produtos, setProdutos] = useState(minhaLista)
  const [pesquisa, setPesquisa] = useState('')

  useEffect(
    () => {
      if (pesquisa) {
        const novaLista = minhaLista.filter( (item) => {
          return item.value.toLowerCase().includes(pesquisa.toLowerCase())
        })
        setProdutos(novaLista)
      } else {
        setProdutos(minhaLista)
      }
    }
  , [pesquisa]) // dependências que serão monitoradas para executar o efeito (se não passado ou vazio executa toda vez q renderiza a página) ,[pesquisa]);


  return (
    <div>
      <h1>Efeitos Colaterais do React </h1>
      <input 
      value={pesquisa} 
      onChange={e=>setPesquisa(e.target.value)}
      placeholder="Pesquise Aqui" />
      {produtos.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        )
      })}
    </div>
  )
}