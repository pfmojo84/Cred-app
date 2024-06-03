import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';
import RegistrationForm from "./pages/userReg";
import Header from "./components/Header";
import Footer from "./components/Footer";




const httpLink = createHttpLink({
  uri:'/graphql'
});

const authLink = setContext((_, { headers }) => {

  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : '',
    }
  };
});

 const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
 });

export default function App() {
  return (
    <ApolloProvider client={client} >
      <Header />

      <div>
        <Outlet />
      </div>

      <Footer />

    </ApolloProvider>
  );
}


