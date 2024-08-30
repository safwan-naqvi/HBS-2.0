import * as React from 'react';

interface EmailTemplateProps {
    fullname: string
    companyName: string
    senderEmail: string
    service: string
    range?: string
    description: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    fullname, companyName, senderEmail, service, range, description
}) => (
    <div className='flex flex-col gap-4 w-full bg-black text-white'>
        <h1 className='text-4xl font-bold tracking-tighter'>Welcome, HashBitStudio</h1>
        <p className='tracking-tight text-lg font-thin'>There is a Lead From {fullname}</p>
        <ul>
            <li>
                <strong>Company:</strong> {companyName}
            </li>
            <li>
                <strong>Sender Email:</strong> {senderEmail}
            </li>
            <li>
                <strong>Service:</strong> {service}
            </li>
            {!!range &&
                <li>
                    <strong>Budget:</strong> {range}
                </li>
            }
        </ul>
        <p className='text-xl font-medium tracking-tight'>
            <strong>Description:</strong> {description}
        </p>
    </div>
);
