
export async function userValid() {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(' 1 ')
            resolve(true)
        }, 4000);
    })
}

export async function userAmount() {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(' 2 ')
            resolve(true)
        }, 1000);
    })
}

export async function ibanValid() {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(' 3 ')
            resolve(true)
        }, 2000);
    })
}