import React from 'react'
import '../Assets/Home.css'
import Banner from '../Components/Banner'
import Card from '../Components/Card'

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home__section">
            <Card
                    src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
                    
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family"
                   
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family"
                    
                />
            </div>
            <div className="home__section">
            <Card
                    src="https://goster.co/wp-content/uploads/2018/05/0448defd_original-1-1024x683.jpg"
                    title='Entire apartment in Nature'
                    description="Comfortable, calm, spacey, silent and all yours"
                    price="$85/night"
                />
                <Card
                    src="https://pazarlamasyon.com/wp-content/uploads/2017/11/Contest-Airbnb-Cat-Chairs.jpg"
                    title="Unique home at Center"
                    description="A Full Lego house for adults who will never grow up"
                    price="$45/night"
                />
                <Card
                    src="https://slasharchitects.com/img/01-kievhouse/slasharchitects-kiev-airbnb-house-04-cosy-home-design.jpg"
                    title="Luxuirous and cozy at the same time"
                    description="Feel at home in the most luxuirous mansions"
                    price="$299/night"
                />
                
            </div>
        </div>
    )
}

export default Home
