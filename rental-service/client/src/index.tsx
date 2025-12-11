import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './components/app/app'
import { Settings } from './const'
import { offers } from './mocks/offers'
import { reviews } from './mocks/reviews'
import { offersList } from './mocks/offers-list'
import { Provider } from 'react-redux'
import { store } from './store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App rentalOffersCount={Settings.rentOffersCount}
        offersList={offersList}
        offers={offers}
        reviews={reviews}
      />
    </Provider>
  </StrictMode>,
)