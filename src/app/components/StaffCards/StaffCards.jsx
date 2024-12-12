'use client';
import './StaffCards.css';
import Image from 'next/image';

export default function StaffCards({ staff }) {
  return (
    <div className='staff-gallery'>
      {staff &&
        staff.map((person, key) => {
          return (
            <div className='staff' key={key}>
              <div className='staff-image'>
                {person.fields.image ? (
                  <Image
                    src={`https:${person.fields.image.fields.file.url}`}
                    alt={person.fields.name}
                    width={250}
                    height={250}
                  />
                ) : (
                  <Image
                    src='/images/profileplaceholder.svg'
                    alt={person.fields.name}
                    width={250}
                    height={250}
                  />
                )}
              </div>
              <div className='staff-name'>{person.fields.name}</div>
              <div className='staff-title'>{person.fields.jobTitle}</div>
            </div>
          );
        })}
    </div>
  );
}
