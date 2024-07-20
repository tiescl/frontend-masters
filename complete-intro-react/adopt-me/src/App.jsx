import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchParams from './components/SearchParams';
import Details from './components/Details';
import AdoptedPetContext from './components/AdoptedPetContext';

var queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: Infinity,
      staleTime: Infinity
    }
  }
});

var App = function CreateApp() {
  var adoptedPet = useState(null);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <header>
            <Link to='/'>Adopt Me!</Link>
          </header>
          <Routes>
            <Route path='/details/:id' element={<Details />} />
            <Route path='/' element={<SearchParams />} />
          </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

{
  let container = document.getElementById('root');
  let root = createRoot(container);
  root.render(<App />);
}
