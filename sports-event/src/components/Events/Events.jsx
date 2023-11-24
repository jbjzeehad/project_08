import { useEffect, useState } from "react";
import Card from "../Card/Card";



const Events = () => {



    const [eventCard, setEventCard] = useState([]);
    const [eventCardLength, setEventCardLength] = useState(3);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setEventCard(data))
    }, [])

    return (
        <div className="p-16 bg-gradient-to-bl from-[#FBAE3F] to-[#001220] ">
            <div className="grid grid-cols-3 gap-4">
                {
                    eventCard.slice(0, eventCardLength).map(card => <Card key={card.id} card={card}>
                    </Card>)

                }
            </div>
            <div className={`${eventCardLength === eventCard.length ? 'hidden' : ''} text-center pt-5`}>
                <button onClick={() => setEventCardLength(eventCard.length)} className="text-white text-lg font-bold border-2 bg-[#001220] rounded-lg py-1 px-4">All Event</button>
            </div>
        </div >
    );
};

export default Events;