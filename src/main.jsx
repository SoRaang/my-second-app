import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './assets/store/store.js';
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={ queryClient }> { /** React Query 사용을 위한 준비 */ }
        <Provider store={ store }> { /** Redux 사용을 위한 준비 */ }
            <App />
        </Provider>
    </QueryClientProvider>
)