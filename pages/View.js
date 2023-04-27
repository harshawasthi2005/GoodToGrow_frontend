import { useRouter} from 'next/router';
import React, { useState } from 'react';


function View() {
    const router = useRouter();
    const {Link} = router.query;
    const url=`${Link}`;
    
    
    
    
    return (
      <div style={{ height: "100vh" }}>
      <iframe src={url} style={{ width: "100%", height: "100%" }} />
    </div>
    );
}

export default View;