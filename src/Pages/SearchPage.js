import React from 'react'
import '../Assets/SearchPage.css'
import { Button } from "@material-ui/core"
import SearchResult from '../Components/SearchResult'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>52 stays • 27 August to 30 august • 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>

            <SearchResult
                img="https://hg-images.condecdn.net/image/5EnJjk8aooV/crop/1920"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathroooms • Wifi •
                Kitchen • Free Parking • Washing Machine"
                star={4.73}
                price="$150 / night"
                total="$600 total"
            />
            <SearchResult
                img="https://hg-images.condecdn.net/image/5EnJjk8aooV/crop/1920"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathroooms • Wifi •
                Kitchen • Free Parking • Washing Machine"
                star={4.73}
                price="$150 / night"
                total="$600 total"
            />
            <SearchResult
                img="https://hg-images.condecdn.net/image/5EnJjk8aooV/crop/1920"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathroooms • Wifi •
                Kitchen • Free Parking • Washing Machine"
                star={4.73}
                price="$150 / night"
                total="$600 total"
            />
            <SearchResult
                img="https://hg-images.condecdn.net/image/5EnJjk8aooV/crop/1920"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathroooms • Wifi •
                Kitchen • Free Parking • Washing Machine"
                star={4.73}
                price="$150 / night"
                total="$600 total"
            />
        </div>

    )
}

export default SearchPage
