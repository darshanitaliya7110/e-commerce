import React from 'react'

const Admin = () => {
    return (
        <div style={{
            marginLeft: "20rem",
            padding: "20px",
        }}>
            <h1>Admin</h1>



            <>
                <hr />

                <table
                    style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        marginTop: '20px',
                    }}
                >

                    <thead>

                        <tr>
                            <th
                                style={{
                                    border: '1px solid #ddd',
                                    padding: '8px',
                                    backgroundColor: '#f2f2f2',
                                }}
                            >
                                Name
                            </th>
                            <th
                                style={{
                                    border: '1px solid #ddd',
                                    padding: '8px',
                                    backgroundColor: '#f2f2f2',
                                }}
                            >
                                Email
                            </th>
                            <th
                                style={{
                                    border: '1px solid #ddd',
                                    padding: '8px',
                                    backgroundColor: '#f2f2f2',
                                }}
                            >
                                Total
                            </th>
                            <th
                                style={{
                                    border: '1px solid #ddd',
                                    padding: '8px',
                                    backgroundColor: '#f2f2f2',
                                }}
                            >
                                Shipped
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* {filteredResult.length > 0 && filteredResult.map((item, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    <Avatar>
                                        <AvatarImage
                                            style={{ borderRadius: '50%' }}
                                            width={50}
                                            height={50}
                                            src={item.imageUrl}
                                            alt="Profile"
                                        />
                                    </Avatar>
                                </td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    {item.firstName}
                                </td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    {item.lastName}
                                </td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    {item.email}
                                </td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    {item.phoneNumber}
                                </td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    {dateConvert(item.dateSetter)}
                                </td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    {item.gender === "male" ? "Male" : "Female"}
                                </td>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                        textAlign: 'center',
                                    }}
                                >
                                    {item.subscribe ? 'True' : 'False'}
                                </td>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                        textAlign: 'center',
                                    }}
                                >
                                    {roleName[item.userType]}
                                </td>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Button onClick={() => handleEdit(item.id)}>Edit</Button>
                                </td>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))} */}
                    </tbody>
                </table >
            </>





        </div>
    )
}

export default Admin
