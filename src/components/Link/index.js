import React from 'react';
import NextLink from 'next/link';

export default function Link({children,href,...props}){
    return(
        <NextLink href={href} passHref>
            {/* eslint-disable-next-line jsx-ally/anchor-is-valid*/}
            <a{...props}>
                {children}
            </a>
        </NextLink>
    );
}