import React from 'react';
import { SHeader, SHeaderTitle } from './PageHeader.styled';

interface IPageHeaderProps {
	title?: string;
	children?: React.ReactNode;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ title, children }): React.ReactElement => {
	return <SHeader>{title ? <SHeaderTitle>{title}</SHeaderTitle> : { children }}</SHeader>;
};

export default PageHeader;
