import React from 'react';
import {ManType} from './07.test';

type PropsType = {
    title: string
    man: ManType
    car?: string[]
}

export const Man: React.FC<PropsType> = ({title, man, ...props}: PropsType) => {

    return <div>
        <h1>{man.name}</h1>

        <h3>{props.car}</h3>
    </div>
};