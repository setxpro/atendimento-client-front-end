import React from 'react';

import { Container } from './styles';

interface Props {
    title: string;
}

const TitlePages: React.FC<Props> = ({title}) => <Container>{title}</Container>
export default TitlePages;