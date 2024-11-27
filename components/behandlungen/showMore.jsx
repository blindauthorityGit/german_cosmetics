import React from "react";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

const WeitereBehandlungen = ({ behandlungen, currentSlug }) => {
    // Exclude the current treatment and select up to 4 others
    const filteredBehandlungen = behandlungen.filter((behandlung) => behandlung.slug !== currentSlug);

    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Weitere Behandlungen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredBehandlungen.map((behandlung) => (
                    <div key={behandlung.slug} className="border rounded-lg shadow hover:shadow-lg transition-shadow">
                        <div className="relative w-full h-48">
                            <Link href={`/behandlungen/${behandlung.slug.current}`} passHref>
                                <img
                                    src={urlFor(behandlung.image).url()}
                                    alt={behandlung.title}
                                    className="w-full h-full object-cover rounded-t-lg"
                                />
                            </Link>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{behandlung.title}</h3>
                            <Link
                                className="text-primaryColor hover:underline"
                                href={`/behandlungen/${behandlung.slug.current}`}
                                passHref
                            >
                                Mehr
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeitereBehandlungen;
