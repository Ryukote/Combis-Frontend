const dev = {
    savePersonUrl: "https://localhost:44380/api/Person"
}

const prod = {
    savePersonUrl: ""
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;