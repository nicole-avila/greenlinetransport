"use client";
import "./StaffCards.css";
import Image from "next/image";

export default function StaffCards({ staff }) {
    return (
        <div className="person-gallery">
            {staff &&
                staff.map((person, key) => {
                    return (
                        <div className="" key={key}>
                            <div>
                                <Image
                                    src={`https:${person.fields.image.fields.file.url}`}
                                    alt={person.fields.name}
                                    width={250}
                                    height={250}
                                /></div>
                            <div>{person.fields.name}</div>
                            <div>{person.fields.jobTitle}</div>
                        </div>
                    );
                })}
        </div>
    );
}
