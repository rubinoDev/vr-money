import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions(){
  return(
    <div>
      <Header/>
      <Summary/>

      <TransactionsContainer>
        <SearchForm/>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 17.000,00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>15/09/2022</td>
            </tr> 

            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 17.000,00
                </PriceHighlight>
              </td>
              <td>Alimentos</td>
              <td>15/09/2022</td>
            </tr>

          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}