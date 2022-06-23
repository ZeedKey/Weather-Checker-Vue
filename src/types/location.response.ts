
export type Address = {
    country: string
    localName: string
    postalCode: string
    streetNumber: string
    streetNameAndNumber: string
    streetName: string
    routeNumbers: [number],
    municipality: string
    freeformAddress: string
    countryTertiarySubdivision: string
    countrySubdivision: string
    countrySecondarySubdivision: string
    countryCodeISO3: string
    countryCode: string
    buildingNumber: string
    boundingBox: {
        entity: string
        northEast: string
        southWest: string
    }
}

export type Location = {
    addresses: Address
    position: string
}

export type LocationResponseType = {
    addresses: [Location]
    position: string
}