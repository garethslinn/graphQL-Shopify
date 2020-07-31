import React from 'react';

export const handleNew = (arr) => {
    const newItem =  arr.findIndex(element => element.includes("New"))
    if (newItem === 0) {
        return <div className="new-product"><span>New</span></div>
    }
    return <div className="new-product"></div>
}

export const handleCart = (history) => {
    history.push("/cart");
}

export const handleBack = (history) => {
    history.push("/");
}