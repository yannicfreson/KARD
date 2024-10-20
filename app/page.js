export default function Home() {
    const userInfo = {
        name: "Fsëvss",
        email: "cppwehzGjxyuptuBw{",
        website: "wxy1}ftuqlp}q}}>sw",
        phone: "+44#8<6'>?*>>-DD",
        tax: "BF\"3<5:'>;@+DDD",
        qrCodeUrl: "huvsw?569n|}ytxyF{",
    }

    function decode(data) {
        return data
            .split("")
            .map((c, i) => {
                return String.fromCharCode(c.charCodeAt(0) - i)
            })
            .join("")
    }

    return (
        <div className="flex flex-col items-center justify-center bg-black h-svh w-svw text-black p-8">
            <div
                className="bg-neutral-100 w-full aspect-[1/1.75] rounded-3xl flex flex-col justify-center items-center gap-6 p-8 border-accent-light border-2
            "
            >
                <div className="font-asteroid -ml-10 flex text-6xl text-accent-light -mb-2">
                    {
                        // first letter of the name
                        <p className="scale-y-50">{decode(userInfo.name).charAt(0)}</p>
                    }
                    {
                        // the rest of the name
                        <p className="scale-y-75 mt-3 -ml-3">{decode(userInfo.name).slice(1)}</p>
                    }
                </div>

                <img src="/profile_picture.jpg" alt="Yannic Fréson" className="rounded-full aspect-square object-cover object-top w-1/2 border-2 border-accent-light" />

                <div className="flex flex-col font-bold items-center">
                    <p className="">{decode(userInfo.phone)}</p>
                    <p className="">{decode(userInfo.email)}</p>
                    <p className="">{decode(userInfo.website)}</p>
                </div>

                <img src={userInfo.qrCodeUrl ? `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${decode(userInfo.qrCodeUrl)}` : "https://via.placeholder.com/150"} alt="QR code" className="w-1/2" />

                <p className="font-bold">{decode(userInfo.tax)}</p>
            </div>
        </div>
    )
}
