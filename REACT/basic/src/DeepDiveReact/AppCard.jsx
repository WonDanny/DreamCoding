import React from "react";

export const AppCard = () => {
    
    return (
        <>
            <Card>
                <p>Card 1</p>
            </Card>
            <Card>
                <p>Card 2</p>
            </Card>
        </>
    )
}

function Card({children}) {
    return(
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
    )
    
}