import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { Chargement } from "../../../composants/Chargement/Chargement";
import logo from "../../../images/logo.svg";

// Create a client
const queryClient = new QueryClient()

/**
 * Composant
 * @returns {JSX.Element}
 * @constructor
 */
export function Exemple() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  )
}

const fetchData = () =>
  fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
    res.json(),
  )

function Todos() {
  const {isLoading, data, status} = useQuery(['repoData'], fetchData)

  const message = data.message.length
  const hadMessage = data.message.length > 0

  let component
  if (isLoading) {
    component = <Chargement logo={logo} />
  } else if (status >= 400 && status < 500) {
    component = <p>{'Erreur du client HTTP'}</p>
  } else if (status >= 500) {
    component = <p>{'Erreur du serveur'}</p>
  } else if (!data || hadMessage) {
    component = <p>{hadMessage ? 'Aucune données' : message}</p>
  } else {
    component = data && (
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong>{' '}
        <strong>✨ {data.stargazers_count}</strong>{' '}
        <strong>🍴 {data.forks_count}</strong>
      </div>
    )
  }
  return component
}
