import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';

interface ProvidersProps {
	children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
	return (
		<BrowserRouter>
			<Provider store={store}>{children}</Provider>
		</BrowserRouter>
	);
};
