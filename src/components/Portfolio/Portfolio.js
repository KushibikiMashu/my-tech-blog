import React from 'react';

type Props = {

}

const Component: React.FC<Props> = () => (
<div>portfolio</div>
);

type ContainerProps = {

}

const Container: React.FC<ContainerProps> = () => <Component/>;

Container.displayName = 'Portfolio';

export default Container;
