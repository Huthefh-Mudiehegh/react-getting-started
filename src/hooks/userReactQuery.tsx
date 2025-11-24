import type { FC, PropsWithChildren } from "react"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 6 * 60 * 1000, // ? 5 mins
      retry: 2,
    },
  },
})

const QueryProvider: FC<PropsWithChildren> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  )
}

export { QueryProvider, queryClient }
