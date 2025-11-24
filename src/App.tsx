import './App.css'
import { Button } from './components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { usePhones } from './hooks/usePhones'
import type { Phone } from './api/phone.type'

function App() {
  const { data: phonesResponse, isLoading } = usePhones()
  const phoneList: Phone[] | undefined = phonesResponse?.data

  return (
    <>
      <div className="align-end my-6 flex justify-end">
        <Button>Add New Phone</Button>
      </div>
      {
        isLoading ? (
          <div>Loading...</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Color</TableHead>
                <TableHead className="text-right">Capacity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {phoneList?.map((phone) => (
                <TableRow key={phone.id}>
                  <TableCell className="text-start">{phone.id}</TableCell>
                  <TableCell className="text-start">{phone.name}</TableCell>
                  <TableCell className="text-start">{phone.data?.color}</TableCell>
                  <TableCell className="text-end">{phone.data?.capacity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        )
      }
    </>
  )
}

export default App
