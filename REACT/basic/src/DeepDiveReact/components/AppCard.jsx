import React from "react";

export const AppCard = ({darkMode}) => {
    
    return (
        <>
            <Card darkMode={darkMode}>
                <p>Card 1</p>
            </Card>
            <Card darkMode={darkMode}>
                <p>Card 2</p>
            </Card>
        </>
    )
}

function Card({children, darkMode}) {
    return(
        <>
            {darkMode ? (
                <div
                    style={{
                        backgroundColor: 'black',
                        borderRadius: '20px',
                        color: 'white',
                        minHeight: '200px',
                        minWidth: '200px',
                        margin: '1rem',
                        padding: '1rem',
                        textAlign: 'center'
                    }}
                >
                    {children}
                </div>
            ) : (
                <div
                    style={{
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        color: 'black',
                        minHeight: '200px',
                        minWidth: '200px',
                        margin: '1rem',
                        padding: '1rem',
                        textAlign: 'center'
                    }}
                >
                    {children}
                </div>
            )}
        </>
    )
}