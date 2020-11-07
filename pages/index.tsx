import React from 'react';

import Button from '@bit/streamstack.uicomponents.button';

export default function() {
    return (
        <div>
            <Button onClick={() => console.log("WHOOP")}>
                Test
            </Button>
        </div>
    )
}
