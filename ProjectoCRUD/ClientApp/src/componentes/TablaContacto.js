import { Table, Button } from "reactstrap"

const TablaContacto = ({ data, setEditar, mostrarModal, setMostarModal, eliminarContacto }) => {
    const enviarDatos = (contacto) => {
        setEditar(contacto)
        setMostarModal(!mostrarModal)
    }

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>email</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="4">No contacts</td>
                        </tr>
                    ) : (
                            data.map((item) => (
                                <tr key={item.idContacto}>
                                    <td>{item.nombre}</td>
                                    <td>{item.correo}</td>
                                    <td>{item.telefono}</td>
                                    <td>
                                        <Button color="primary" size="sm" className="me-2"
                                            onClick={() => enviarDatos(item) }
                                        >Edit</Button>
                                        <Button color="danger" size="sm"
                                            onClick={() => eliminarContacto(item.idContacto)}
                                        >Delete</Button>
                                    </td>
                                </tr>
                                ))
                            )
                }
            </tbody>
        </Table>
        )
}
export default TablaContacto