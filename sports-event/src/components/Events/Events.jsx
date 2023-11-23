import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Events = () => {

    const [eventCard, setEventCard] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setEventCard(data))
    }, [])

    return (
        <div className="grid grid-cols-3 p-16 gap-4 bg-gradient-to-bl from-[#FBAE3F] to-[#001220] ">
            {
                eventCard.map(card => <Card key={card.id} card={card}>
                </Card>)

            }


        </div>
    );
};

export default Events;