import { useContext } from "react"
import { FiltersContext } from "../context/filters"

//Vamos a usar la logica de useFilters para otros componentes

export function useFilters() {
    //const [filters, setFilters] = useState({
    //  category: 'all',
    //  minPrice: 0
    //})
  
    const {filters, setFilters} = useContext(FiltersContext)
  
    //Hay que saber filtrar BIEN
    const filterProducts = (products) => {
      return products.filter(product => {
        return (
          product.price >= filters.minPrice &&
          (
            filters.category === 'all' ||
            product.category === filters.category
          )
        )
      })
    }
  
    return {filters, filterProducts, setFilters}
  }