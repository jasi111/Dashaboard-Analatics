import React from 'react'

function Footer() {
    return (
        <div className="footer bottom-0 container-fluid text-center bg-secondary">
            copy right {(new Date().getFullYear())}
        </div>
    )
}

export default Footer
