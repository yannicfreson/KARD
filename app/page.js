export default function Home() {
    let name = "Fréson"
    let email = "contact@yannicfreson.be"
    let website = "www.yannicfreson.be"
    let phone = "+32 123 45 67 89"
    let tax = "BE 0804 626 876"
    let services = ["Nightlife", "Events", "Potraits"]

    return (
        <div className="flex flex-col items-center justify-center bg-black h-svh w-svw text-black p-8">
            <div
                className="bg-neutral-100 w-full aspect-[1/1.75] rounded-3xl flex flex-col justify-center items-center gap-8
            "
            >
                <img src="/profile_picture.jpg" alt="Yannic Fréson" className="rounded-full aspect-square object-cover object-top w-1/2" />
                <div className="flex flex-col items-center">
                    <p className="">{email}</p>
                    <p className="">{website}</p>
                    <p className="">{phone}</p>
                </div>

                <div className="flex flex-row gap-4 font-sans justify-center items-center">
                    {services.map((service) => (
                        <p key={service} className="">
                            {service}
                        </p>
                    ))}
                </div>

                <div className="font-asteroid -ml-14 flex text-8xl text-accent-light">
                    {
                        // first letter of the name
                        <p className="scale-y-50">{name.charAt(0)}</p>
                    }
                    {
                        // the rest of the name
                        <p className="scale-y-75 mt-5 -ml-4">{name.slice(1)}</p>
                    }
                </div>
                <p className="">{tax}</p>
            </div>
        </div>
    )
}
