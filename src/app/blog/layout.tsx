import React from 'react';

const Layout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return (
        <div>
            <h1>This is blog layout</h1>
            {children}
            <h1>This is blog layout</h1>
        </div>
    );
};

export default Layout;