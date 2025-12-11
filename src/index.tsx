import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import { App } from './components/app/app'
import { Settings } from './const'
import { offersList } from './mocks/offers-list'
import { offers } from './mocks/offers'
import { reviews } from './mocks/reviews'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={
            <App
              rentalOffersCount={Settings.rentOffersCount}
              offersList={offersList}
              offers={offers}
              reviews={reviews}
            />
          } />
          {/* другие маршруты */}
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
